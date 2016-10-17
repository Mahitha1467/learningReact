'use strict';
import React, {Component} from "react";
import Sources from "./sources";

export default class LeftPanelUrl extends React.Component{
    render(){
        return (
            <div className="left-panel-url">
                <span className = "square-box" />
                <span>{this.props.url}</span>
                  <span className = "canel-button" onClick = {this._removeUrl.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></span>
            </div>
        );
    }

    _removeUrl(event){
      let urlName = event.target.parentNode.previousSibling.innerHTML;
      this.props.remove(urlName);
      // console.log(event.target.parentNode.previousSibling.innerHTML);
    }

}
