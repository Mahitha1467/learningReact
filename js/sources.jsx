'use strict'
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Url from "./urls";
import ConfiguredSources from "./configuredSources";

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
   var thisn = this;
   return urls.map(function(url, index){
       return <Url title={url.title} link={url.link} key = {index} addUrl = {thisn._addUrlToList.bind(thisn)}/>;
     });
 }

  render(){
    var urlsList = this._getUrls();
    <ConfiguredSources getUrls = {this.state.ConfiguredSourcesList}/>
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
        ReactDOM.render(<ConfiguredSources getUrls = {this.state.ConfiguredSourcesList}/>, document.getElementById("configuredSources"));
    }
}
