'use strict';
import React, {Component} from "react";

export default class LeftPanelUrl extends React.Component{
    render(){
        return (
            <div className="left-panel-url">
                <p>{this.props.addUrl}</p>
            </div>
        );
    }

}
