'use strict'
import React, {Component} from "react";
import LeftPanelUrl from "./leftPanelUrl";


export default class ConfiguredSources extends Component {

  render(){
    return <div id= "ConfiguredSources" className = "configured-sources">
            <span><b>My Sources</b></span>
            {this._getSources()}
        </div>;
  }


    _getSources() {
      if(this.props.getUrls !== undefined){
        return (this.props.getUrls).map((newSource) => {
          if(newSource !== undefined){
            return(
            <LeftPanelUrl url={newSource.url}  key={newSource.id} />
            );
          }
        });
      }
    }
}
