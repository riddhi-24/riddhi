import React, { useEffect } from "react";
import './App.css'

export default function DynamicScript() {
    function removeElementsOnUnmount() {

        // Remove chatbot links
        const prefetchLinks = document.querySelectorAll('[href*="cdn.wotnot.io/modern-chat-bubble"]');
        const prefetchSrc = document.querySelectorAll('[src*="cdn.wotnot.io/modern-chat-bubble"]');
        const scriptChatWidget = document.querySelector('script[src*="/chat-widget/"]')
        let removableElements = [...prefetchLinks, ...prefetchSrc];
        if(scriptChatWidget){
            removableElements.push(scriptChatWidget);
        }
        if(removableElements.length) removableElements.forEach(link => link.remove());


        //Remove container class
        setTimeout(() => {
            const chatWidgetClass = document.querySelector('.chat-widget-details');
            if (chatWidgetClass) chatWidgetClass.remove();
        })


        if (window.wn && window.wn.hideWidget) {
            window.wn.hideWidget();
        }
    }

    function chatbotLoadListener(event) {
        if (event.data && typeof event.data === "string") {
            const eventData = JSON.parse(event.data);
            if (eventData && eventData.type === "chat-bubble-loaded") {
                try {
                    setTimeout(() => {
                        if (window.wn) {
                            window.wn.showWidget(true)
                        }
                    })
                } catch (error) { console.log(error) }
            }
        }
    }

    const onAddScript = () => {
        var script_tag = document.createElement("script");
        script_tag.src = "https://app.wotnot.io/chat-widget/pt5ccHzjEgpw082454069938MsceKjSD.js"
        script_tag.setAttribute('hidebotonload', true);
        document.head.appendChild(script_tag);
    }

    const onRemoveScript = () => {
        removeElementsOnUnmount();
    }

    useEffect(() => {
        window.addEventListener('message', chatbotLoadListener);

        return () => {
            window.removeEventListener('message', chatbotLoadListener);
            removeElementsOnUnmount();
        };

    }, []);

    return (
    <div>
        <h4>Add & remove chatbot script dynamically</h4>
        <button className='button' onClick={e => onAddScript(e)}>Add script</button><span> </span>
        <button className='button' onClick={e => onRemoveScript(e)}>Remove script</button>
    </div>)
}
