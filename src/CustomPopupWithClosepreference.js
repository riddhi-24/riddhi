import React, { useEffect } from "react";

export default function CustomPopup() {

  const addScript = () => {
    var script_tag = document.createElement("script");
    script_tag.src = "https://app.wotnot.io/chat-widget/pt5ccHzjEgpw082454069938MsceKjSD.js"
    script_tag.setAttribute('hidebotonload', true);
    document.head.appendChild(script_tag);
  }

  useEffect(() => {
    addScript();
    window.addEventListener("message", (event) => {
      if (event.data && typeof event.data === "string") {
        let eventData; 
        try{
          eventData = JSON.parse(event.data)
        } catch(err){
          // console.log('eventData is string')
        };
        if (eventData && eventData.type === "bubble-loaded") {
          debugger
          const isChatBotClosed = !document.getElementById("chat-bubble-close-wrapper");
          if (!sessionStorage.getItem("hasUserClosedPopup") && window.wn && isChatBotClosed) {
            setTimeout(() => {
              window.wn.setPopupMessage({ text: "Klik hier voor eerlijk advies van een onafhankelijke verkoopadviseur" })
              setTimeout(() => {
                const isPopupAdded = document.getElementById("popup-frame");
                if (isPopupAdded && isPopupAdded.contentWindow && isPopupAdded.contentWindow.document) {
                  const closeIcon = isPopupAdded.contentWindow.document.getElementsByClassName("popup-close-button");
                  if (closeIcon) {
                    const setUserPref = function () {
                      sessionStorage.setItem("hasUserClosedPopup", true);
                      // mixpanel.track("Popup closed");
                      closeIcon[0].removeEventListener("click", setUserPref);
                    }
                    closeIcon[0].addEventListener("click", setUserPref);
                  }
                }
              }, 500);
            }, 10000);
          }
          else console.log("wn not found || bot opened || user closed popup || excludedPage")
        }
      }
    });

    return () => {
      localStorage.removeItem("hasUserClosedPopup");
    }
  }, [])



  return (<h4>Custom popup on load</h4>)
}
