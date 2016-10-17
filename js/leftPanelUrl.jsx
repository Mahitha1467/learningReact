'use strict';
import React, {Component} from "react";

export default class LeftPanelUrl extends React.Component{
    render(){
        return (
            <div className="left-panel-url">
                <span className = "square-box" />
                <span>{this.props.url}</span>
                  <span className = "canel-button"><i className="fa fa-times" aria-hidden="true"></i></span>
            </div>
        );
    }

}
