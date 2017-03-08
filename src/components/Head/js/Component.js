import React from 'react'
import { Link } from 'react-router'
let ComponentObj = {
  backClick:function(){
    alert();
  }
}

function Component(props, /* context */) {
  return <div className="HeadComponent">
              <a className="icon iconfont icon-back back" onClick={ComponentObj.backClick}></a>
              <div className="HeadComponent_title">{props.content}</div>
         </div>
}
export default Component