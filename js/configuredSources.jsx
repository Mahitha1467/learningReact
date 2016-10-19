'use strict'
import React, {Component} from "react";
import LeftPanelUrl from "./leftPanelUrl";


export default class ConfiguredSources extends Component {

  render(){
    return (<div>
            <span><b>My Sources</b></span>
            {this._getSources()}
        </div>);
  }
  _remove(url){
    this.props.removeUrl(url);
  }

    _getSources() {
      if(this.props.getUrls !== undefined){
        var thisn = this;
        return (this.props.getUrls).map((newSource) => {
          if(newSource !== undefined){
            return(
            <LeftPanelUrl url={newSource.url}  key={newSource.id} remove = {thisn._remove.bind(thisn)}/>
            );
          }
        });
      }
    }
}
