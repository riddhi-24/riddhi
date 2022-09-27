import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Page = (props) => {
  
  let location = useLocation();
  const history = useHistory()
  return (
  <div>
    <div onClick={e => {history.push(`/${props.url}`)}}>{props.url}</div>
    <div id="me" style={{background : 'skyblue', height: '20px'}}>{`current URL : ${location.pathname || ""}`}</div>
  </div>
  )
}

export default Page;
