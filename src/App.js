import React, { useEffect } from "react";

export default function App() {
  const isChatBotOpened = document.getElementById("chat-bubble-close");
  useEffect(() => {
    setTimeout(() => {
      if(window && window.wn && !isChatBotOpened){
        console.log("added")
        window.wn.setPopupMessage({text: "Hello!!!", media: "https://picsum.photos/200"})
      }
      else console.log("wn not found")
    }, 2000);
    
  }, [])

  return (
 <div>hi</div>
  );
}
