'use strict'
import React, {Component} from "react";
import Url from "./urls";
import LeftPanelUrl from "./leftPanelUrl";

export default class ConfiguredSources extends Component {

  constructor() {
      super();
      this.state = {
          ConfiguredSourcesList: [ ]
      };
  }

  render(){
    return <div id= "ConfiguredSources" className = "configured-sources">
            <span><b>My Sources</b></span>
             <LeftPanelUrl addUrl = {this.props.url}/>
        </div>;
  }
}
