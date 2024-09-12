import React from "react";
import './App.css'

export default function GaTracking() {
    const handleClick = () => {
        console.log('btn clicked');
        window.dataLayer = window.dataLayer || [];
        const payload = {
            "event": "btn_clicked",
            "data": "{'Test' : 'Riddhi'}"
        };
        window.dataLayer.push(payload);
    }

    return (<div>
        <h4>It tracks the button click event in GA</h4>
        <button className='button' onClick={handleClick}>Click me</button>
    </div>)
}
