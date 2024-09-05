import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {

    window.addEventListener("message", (event) => {
      if (event.data && typeof event.data === "string") {
        const eventData = JSON.parse(event.data);
        if (eventData && eventData.type === "bubble-loaded") {
          debugger
          const isChatBotClosed = !document.getElementById("chat-bubble-close-wrapper");
          if (!sessionStorage.getItem("hasUserClosedPopup") && window.wn && isChatBotClosed) {
              setTimeout(() => {window.wn.setPopupMessage({ text: "Klik hier voor eerlijk advies van een onafhankelijke verkoopadviseur" })
                  setTimeout(() => {
                    const isPopupAdded = document.getElementById("popup-frame");
                    if (isPopupAdded && isPopupAdded.contentWindow && isPopupAdded.contentWindow.document) {
                      const closeIcon = isPopupAdded.contentWindow.document.getElementsByClassName("popup-close-button");
                      if (closeIcon) {
                        const setUserPref = function(){
                          sessionStorage.setItem("hasUserClosedPopup", true);
                          mixpanel.track("Popup closed");
                          closeIcon[0].removeEventListener("click", setUserPref);
                        }
                        closeIcon[0].addEventListener("click",setUserPref);
                      }
                    }
                  }, 500);
              },10000);
          }
          else console.log("wn not found || bot opened || user closed popup || excludedPage")
        }
      }
    });

    () => {
      removeElementsOnUnmount()
      // localStorage.removeItem("hasUserClosedPopup");
    }

  }, [])

  function removeElementsOnUnmount() {
    // Remove prefetch link elements
    const prefetchLinks = document.querySelectorAll('link[rel="prefetch"][href*="cdn.wotnot.io/modern-chat-bubble"]');
    prefetchLinks.forEach(link => link.remove());

    // Remove script elements
    const scriptVendors = document.querySelector('script[src*="cdn.wotnot.io/modern-chat-bubble/"][src*="vendors~main.js"]');
    const scriptMain = document.querySelector('script[src*="cdn.wotnot.io/modern-chat-bubble/"][src*="main.js"]');
    const scriptChatWidget = document.querySelector('script[src*="chat-widget/pt5ccHzjEgpw082454069938MsceKjSD.js"]');
    
    if (scriptVendors) scriptVendors.remove();
    if (scriptMain) scriptMain.remove();
    if (scriptChatWidget) scriptChatWidget.remove();

    // Remove input element
    const preferenceInput = document.querySelector('input#preference-response');
    if (preferenceInput) preferenceInput.remove();
}


  // const handleClick = () =>  {
  //   console.log('btn clicked');
  //   window.dataLayer = window.dataLayer || [];
  //   const payload = {
  //     "event": "btn_clicked",
  //     "data": "{'Test' : 'Riddhi'}"
  //   };
  //   window.dataLayer.push(payload);
  // }

  const onAddScript = (e) => {
    var script_tag = document.createElement("script");
    script_tag.src = "https://app.wotnot.io/chat-widget/pt5ccHzjEgpw082454069938MsceKjSD.js"
    script_tag.setAttribute('hidebotonload', true);
    alert('added');
  }

  return (<div>
    <h1>This is my website</h1>``
<button onClick={e => onAddScript(e)}>Add script</button>
    {/* <iframe width="640" height="480" src="https://embed.dev.wotnot.io/ZLSS34AV63QR135844052724LKMotLtn/bot/5rKg3D27nsQk1147369188978bCdBQGo?display_header=false&history_retention=false&gtm_id=GTM-PS7CS8G7" frameborder="0"></iframe> */}
    
    {/* <button onClick={handleClick}>Click me</button> */}

    <iframe src="https://chat.sopro.io/account/355/live-chat?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMTgyNDg0MSwianRpIjoiOWY3NTk0ZTAtMTI2MC00ZTdhLTg1YTQtZDdlNDlhMjNiYTNiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJsb2dnZWRfaW4iOnRydWUsInVzZXJfaWQiOjEzLCJhZ2VudF9sb2dnZWRfaW4iOnRydWUsImFnZW50X2lkIjoxMywiYWdlbnRfbmFtZSI6IkRldlNvUHJvIiwiYWdlbnRfZmlyc3RfbmFtZSI6IkRldiIsImFnZW50X2xhc3RfbmFtZSI6IlNvUHJvIiwiYWdlbnRfZW1haWwiOiJkZXZAc29wcm8uaW8iLCJhZ2VudF9hY2NvdW50X2tleSI6IjRCS1duWlRRelUzYzEwMTgxMzgxNDUxMVF0RUdpYkM4IiwiYWdlbnRfcm9sZV9pZCI6MiwiYWdlbnRfYm90X2lkIjo5NTAsInVzZXJfc2Vzc2lvbl9sb2dfaWQiOjM2NTg3LCJhZ2VudF9hY2NvdW50X2lkIjozNTUsInNlc3Npb25faWQiOiI4MmFLREF4M0hmQkwxMjQwNDEzMDA1OTVVNUVJcGxrTCJ9LCJuYmYiOjE3MjE4MjQ4NDEsImV4cCI6MjAzNzE4NDg0MSwibG9nZ2VkX2luIjp0cnVlLCJ1c2VyX2lkIjoxMywiYWdlbnRfbG9nZ2VkX2luIjp0cnVlLCJhZ2VudF9pZCI6MTMsImFnZW50X25hbWUiOiJEZXZTb1BybyIsImFnZW50X2ZpcnN0X25hbWUiOiJEZXYiLCJhZ2VudF9sYXN0X25hbWUiOiJTb1BybyIsImFnZW50X2VtYWlsIjoiZGV2QHNvcHJvLmlvIiwiYWdlbnRfYWNjb3VudF9rZXkiOiI0QktXblpUUXpVM2MxMDE4MTM4MTQ1MTFRdEVHaWJDOCIsImFnZW50X3JvbGVfaWQiOjIsImFnZW50X2JvdF9pZCI6OTUwLCJ1c2VyX3Nlc3Npb25fbG9nX2lkIjozNjU4NywiYWdlbnRfYWNjb3VudF9pZCI6MzU1LCJzZXNzaW9uX2lkIjoiODJhS0RBeDNIZkJMMTI0MDQxMzAwNTk1VTVFSXBsa0wifQ.9waAizkZ3llceOJSGYUcrvExyZwlD8w128PxYHZ6EOA" />
  </div>)
}
