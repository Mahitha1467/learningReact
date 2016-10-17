'use strict'
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Url from "./urls";
import ConfiguredSources from "./configuredSources";
import LeftPanelUrl from "./leftPanelUrl";

export default class Sources extends Component {
  constructor() {
      super();
      this.state = {
          ConfiguredSourcesList: [
          ]
      };
      this._addUrlToList = this._addUrlToList.bind(this);
  }

  _getUrls(){
   var urls = [{title: "Economic times", link:"http://economictimes.indiatimes.com/rssfeedstopstories.cms"},{title: "Scroll", link:"http://feeds.feedburner.com/ScrollinArticles.rss"},{title: "NDTV", link:"http://feeds.feedburner.com/NDTV-LatestNews"},{title: "Indian Express", link:"http://indianexpress.com/section/india/feed/"},{title: "New Zealand Herald", link:"http://rss.nzherald.co.nz/rss/xml/nzhtsrsscid_000000698.xml"}];
   let thisn = this;
   return urls.map(function(url, index){
       return <Url title={url.title} link={url.link} key = {index} addUrl = {thisn._addUrlToList.bind(thisn)}/>;
     });
 }

  render(){
    var urlsList = this._getUrls();
    <ConfiguredSources getUrls = {this.state.ConfiguredSourcesList} removeUrl =  {this._removeUrl.bind(this)}/>
    return <div id="Feeds" className = "feeds">
      {urlsList}
    </div>
  }

  _addUrlToList(url){
        let Url= { url : url, id : this.state.ConfiguredSourcesList.length + 1 };
        this.state.ConfiguredSourcesList.push(Url);
        this.setState(
          {ConfiguredSourcesList : this.state.ConfiguredSourcesList }
        );
        ReactDOM.render(<ConfiguredSources getUrls = {this.state.ConfiguredSourcesList} removeUrl =  {this._removeUrl.bind(this)}/>, document.getElementById("configuredSources"));
    }

    _removeUrl(urlName){
      var newthis = this;
      this.state.ConfiguredSourcesList.map(function(source, index){
        if(source.url === urlName){
          newthis.state.ConfiguredSourcesList.splice(index, 1);
        }
      });
      this.setState(
      {ConfiguredSourcesList : this.state.ConfiguredSourcesList }
      );
      ReactDOM.render(<ConfiguredSources getUrls = {this.state.ConfiguredSourcesList} removeUrl =  {this._removeUrl.bind(this)}/>, document.getElementById("configuredSources"));
    }
}
