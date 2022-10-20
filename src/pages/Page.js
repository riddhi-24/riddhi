import React from "react";

const style = {
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    width: 'auto',
    padding: '130px',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 10px)',
    background: `url(https://www.mvfglobal.com/sites/all/themes/mvfglobal/images/logo-dark.svg) no-repeat`
}

const Page = () => {
  return (
  <div>
    <div id="me" style={style}>{}</div>
  </div>
  )
}

export default Page;
