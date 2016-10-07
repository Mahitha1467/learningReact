'use strict'
import React, {Component} from "react";
import Url from "./urls";

export default class Sources extends Component {
  _getUrls(){
   var urls = [{title: "Economic times", link:"http://economictimes.indiatimes.com/rssfeedstopstories.cms"},{title: "Scroll", link:"http://feeds.feedburner.com/ScrollinArticles.rss"},{title: "NDTV", link:"http://feeds.feedburner.com/NDTV-LatestNews"},{title: "Indian Express", link:"http://indianexpress.com/section/india/feed/"},{title: "New Zealand Herald", link:"http://rss.nzherald.co.nz/rss/xml/nzhtsrsscid_000000698.xml"}];
   return urls.map(function(url, index){
       return <Url title={url.title} link={url.link} key = {index}/>;
     });
 }
  render(){
    var urlsList = this._getUrls();
    return <div id="Feeds" className = "feeds">
      {urlsList}
    </div>
  }

}
