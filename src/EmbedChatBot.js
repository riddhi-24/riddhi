import React, { useState } from "react";

export default function EmbedBot() {
  const typeMap = {'iframe' : 'IFRAME', 'div' : 'DIV'};
  const [embedType, setEmbedType] = useState('iframe');

  const handleEmbedTypeChange = () => {
    if (embedType === 'iframe') {
      setEmbedType('div');
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('src', 'https://app.wotnot.io/chat-widget/pt5ccHzjEgpw082454069938MsceKjSD.js');
      scriptTag.setAttribute('async', true);
      scriptTag.setAttribute('widget-container-id', 'rootContainer');
      scriptTag.setAttribute('widget-height', '400px');
      scriptTag.setAttribute('widget-width', '600px');
      scriptTag.setAttribute('widget-header-visible', false);
      document.head.appendChild(scriptTag);
    }
    else {
      setEmbedType('iframe');
    }
  }

  return (
    <div>
      <h4>{`Chatbot is embedded via ${typeMap[embedType]} element`}</h4>
      <button className='button' onClick={e => handleEmbedTypeChange()}>Change embedType</button>
      <h1></h1>
      {embedType === 'iframe' ? <iframe id='embedIframe' width="640" height="480" src="https://embed.wotnot.io/pt5ccHzjEgpw082454069938MsceKjSD/bot/54yeBwMzgAdy055455017858UO6PjXPd?display_header=false&history_retention=false" frameBorder="0"></iframe> :
        <div id="rootContainer" style={{background : 'white'}}></div>}

    </div>)
}
