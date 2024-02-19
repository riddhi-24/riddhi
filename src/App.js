import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data && typeof event.data === "string") {
        const eventData = JSON.parse(event.data);
        if (eventData && eventData.type === "bubble-loaded") {
          const isChatBotClosed = !document.getElementById("chat-bubble-close");
          const excludePageregex = /^https?:\/\/[^/?]+(?:\/|\?[^/]*)?$/gm
          const popupExcludedPage = document.location.href.match(excludePageregex);
          if (!localStorage.getItem("hasUserClosedPopup") && !popupExcludedPage  && window.wn && isChatBotClosed) {
              setTimeout(() => {
                  window.wn.setPopupMessage({ text: "Hello!!!" })
                  setTimeout(() => {
                    const isPopupAdded = document.getElementById("popup-frame");
                    if (isPopupAdded && isPopupAdded.contentWindow && isPopupAdded.contentWindow.document) {
                      const closeIcon = isPopupAdded.contentWindow.document.getElementsByClassName("popup-close-button");
                      if (closeIcon) {
                        const setUserPref = function(){
                          localStorage.setItem("hasUserClosedPopup", true); 
                          closeIcon[0].removeEventListener("click", setUserPref);
                        }
                        closeIcon[0].addEventListener("click",setUserPref);
                      }
                    }
                  }, 500);
              },5000);
          }
          else console.log("wn not found || bot opened || user closed popup || excludedPage")
        }
      }
  
    });

    // () => {
    //   localStorage.removeItem("hasUserClosedPopup");
    // }

  }, [])

  return (<div></div>)
}
