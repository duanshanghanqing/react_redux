import React from 'react'
import { Link } from 'react-router'

function Component(props, /* context */) {
  return <div className="HomeComponent">
              <div className="contentBox">
                  <p className="title">{props.content}</p>
                  <Link className="button" to="/index" activeClassName="active">go</Link>
              </div>
         </div>
}
export default Component