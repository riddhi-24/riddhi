import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const Page = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    setTimeout(() => {
        setIsLoaded(true)
    }, 10000)
}, []);

  let location = useLocation();
  const history = useHistory();
  axios.post("https://113c-49-249-141-54.ngrok-free.app/v1/user-login", {
    "email": "riddhi.sherasiya@marutitech.com",
    "password": "123456"
  } , {"headers" : {'Content-Type': 'application/json'}}).then(res => console.log(res)).catch(err => console.log(err))

  return (
  <div className="center">
    {setIsLoaded && <div id="me" className="ifrmae-content"><iframe src="https://113c-49-249-141-54.ngrok-free.app/account/124/chatbot/analytics" height="500" width={'400'}></iframe></div>}
  </div>
  )
}

export default Page;