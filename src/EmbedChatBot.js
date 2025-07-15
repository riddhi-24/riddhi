import React, { useEffect, useState } from "react";

export default function EmbedBot() {
  const typeMap = {'iframe' : 'IFRAME', 'div' : 'DIV'};
  const [embedType, setEmbedType] = useState('div');

  const handleEmbedTypeChange = () => {
    if (embedType === 'iframe') {
      setEmbedType('div');
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('src', 'https://app.wotnot.io/chat-widget/6tBdMTj6JzRi100521719752AV2dKwMy.js');
      scriptTag.setAttribute('async', true);
      scriptTag.setAttribute('id', 'bot_script');
      scriptTag.setAttribute('widget-container-id', 'rootContainer');
      scriptTag.setAttribute('widget-height', '400px');
      scriptTag.setAttribute('widget-width', '600px');
      scriptTag.setAttribute('widget-header-visible', false);
      const container = document.querySelector('#rootContainer');
      container.appendChild(scriptTag);
    }
    else {
      setEmbedType('iframe');
      const containerElement = document.querySelector('#rootContainer');
      const botScript = document.querySelector('#bot_script');
      containerElement.removeChild(botScript);
    }
  }

  useEffect(() => {
    if(embedType === 'div'){
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('src', 'https://app.wotnot.io/chat-widget/6tBdMTj6JzRi100521719752AV2dKwMy.js');
      scriptTag.setAttribute('async', true);
      scriptTag.setAttribute('id', 'bot_script');
      scriptTag.setAttribute('widget-container-id', 'rootContainer');
      scriptTag.setAttribute('widget-height', '400px');
      scriptTag.setAttribute('widget-width', '600px');
      scriptTag.setAttribute('widget-header-visible', false);
      const container = document.querySelector('#rootContainer');
      container.appendChild(scriptTag);
    }
  }, [])

  return (
    <div>
      <h4>{`Chatbot is embedded via ${typeMap[embedType]} element`}</h4>
      <button className='button' onClick={e => handleEmbedTypeChange()}>Change embedType</button>
      <h1></h1>
      <div id="rootContainer" style={{"backgroundColor": "white", "borderRadius": "40px"}}>
        </div>
      {embedType === 'iframe' && <iframe id='embedIframe' width="640" height="480" src="https://embed.wotnot.io/6tBdMTj6JzRi100521719752AV2dKwMy/bot/7FxkjigFJ8Us125815793134kRUePfo9?display_header=false&history_retention=false&utm_source=test&utm_medium=med" frameBorder="0"></iframe>}
    </div>)
}
