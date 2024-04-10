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

  // const handleClick = () =>  {
  //   console.log('btn clicked');
  //   window.dataLayer = window.dataLayer || [];
  //   const payload = {
  //     "event": "btn_clicked",
  //     "data": "{'Test' : 'Riddhi'}"
  //   };
  //   window.dataLayer.push(payload);
  // }

  return (<div>
    <h1>This is my website</h1>
    <iframe width="640" height="480" src="https://embed.dev.wotnot.io/ZLSS34AV63QR135844052724LKMotLtn/bot/5rKg3D27nsQk1147369188978bCdBQGo?display_header=false&history_retention=false&gtm_id=GTM-PS7CS8G7" frameborder="0"></iframe>
    
    {/* <button onClick={handleClick}>Click me</button> */}

  </div>)
}
