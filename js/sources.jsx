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
          ConfiguredSourcesList: [],
      };
  }

  _getUrls(){
   var urls = [{title: "Economic times", link:"http://economictimes.indiatimes.com/rssfeedstopstories.cms"},
   {title: "Scroll", link:"http://feeds.feedburner.com/ScrollinArticles.rss"},
   {title: "NDTV", link:"http://feeds.feedburner.com/NDTV-LatestNews"},
   {title: "Indian Express", link:"http://indianexpress.com/section/india/feed/"},
   {title: "New Zealand Herald", link:"http://rss.nzherald.co.nz/rss/xml/nzhtsrsscid_000000698.xml"},
   {title: "The Hindu", link:"http://www.thehindu.com/opinion/?service=rss"},
   {title: "Times of India", link:"http://timesofindia.indiatimes.com/rssfeedstopstories.cms"},
   {title: "Deccan Chronicle", link:"http://www.deccanchronicle.com/rss_feed/"},
   {title: "The Guardian", link:"https://www.theguardian.com/world/rss"}
 ];

   let thisn = this;
   return urls.map(function(url, index){
        let count = 0;
        let isConfigured=false;

        for( let i in thisn.state.ConfiguredSourcesList){
          if(thisn.state.ConfiguredSourcesList[i].url === url.title) {count++}
        }

        if(count > 0 ){isConfigured = true}
       return <Url title={url.title} link={url.link} key = {index} isConfigured = {isConfigured} addUrl = {thisn._addUrlToList.bind(thisn)}/>;
     });
 }

  render(){
    var urlsList = this._getUrls();
    return(<div>
          <div id="Feeds" className = "feeds">
            {urlsList}
            <div className = "next">
            <span className ="next-arrow"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span><br/>
            <span className = "next-font">Next</span>
            </div>
          </div>
        <div id= "ConfiguredSources" className="configured-sources">
          <ConfiguredSources getUrls = {this.state.ConfiguredSourcesList} removeUrl =  {this._removeUrl.bind(this)}/>
        </div>
        </div>
      );
  }

  _addUrlToList(url){
        let Url= { url : url, id : this.state.ConfiguredSourcesList.length + 1 };
        this.state.ConfiguredSourcesList.push(Url);
        this.setState(
          {ConfiguredSourcesList : this.state.ConfiguredSourcesList }
        );
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
    }
}
