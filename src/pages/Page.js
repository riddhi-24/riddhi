import React from "react";
import { useLocation } from "react-router-dom";

const Page = () => {
  
  let location = useLocation();

  return (
  <div id="me" style={{background : 'skyblue', height: '20px'}}>{`current URL : ${location.pathname || ""}`}</div>)
}

export default Page;
