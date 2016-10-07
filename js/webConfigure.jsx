'use strict'
import React, {Component} from "react";

 class Header extends Component {
  render(){
    return <div id= "Header" className = "header">
      <div id="Title" className = "title">Make<b>News</b></div>
      <div id = "Sources" className = "sources">
        <span id= "Website" className = "website"><i className="fa fa-globe"></i>Website</span>
        <span id="Facebook" className = "facebook"><i className="fa fa-facebook-official"></i>Facebook</span>
        <span id = "Twitter" className = "twitter"><i className="fa fa-twitter"></i>Twitter</span>
      </div>
    </div>;
  }
}

class ConfiguredSources extends Component {
  render(){
    return <div id= "ConfiguredSources" className = "configured-sources">
        <span><b>My Sources</b></span>
    </div>
  }
}

class Search extends Component {
  render(){
    return <div id="Search" className = "search"><input type = "text" placeholder= "Search using keywords, urls or etc" className = "search-keyword"/>
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </div>
  }
}

class WebSources extends Component {
  _getUrls(){
   var urls = [{title: "Economic times", link:"http://economictimes.indiatimes.com/rssfeedstopstories.cms"},{title: "Scroll", link:"http://feeds.feedburner.com/ScrollinArticles.rss"},{title: "NDTV", link:"http://feeds.feedburner.com/NDTV-LatestNews"},{title: "Indian Express", link:"http://indianexpress.com/section/india/feed/"},{title: "New Zealand Herald", link:"http://rss.nzherald.co.nz/rss/xml/nzhtsrsscid_000000698.xml"}];
   return urls.map(function(url, index){
       return <Url title={url.title} link={url.link} key = {index}/>;
     });
 }
  render(){
    var urlsList = this._getUrls();
    return <div id="WebSources" className = "web-sources">
      {urlsList}
    </div>
  }

}
class Url extends Component {
  render(){
    return  <div  className = "url">
    <span className = "square-box" />
    <div className = "url-name">{this.props.title}</div>
    <i className="fa fa-circle-thin circle" aria-hidden="true"></i>
    <i className="fa fa-plus plus" aria-hidden="true"></i>
    <div className = "web-link">{this.props.link}</div>
    </div>;
    }
}

export {Header, ConfiguredSources, Search, WebSources};
