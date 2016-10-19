'use strict';
import React from "react";
import Header from "./header";
import ConfiguredSources from "./configuredSources";
import Search from "./searchBox";
import SourceUrls from "./sourceUrls";
import FontAwesome from "react-fontawesome";

export default class Page extends React.Component{
  render() {
    return (
        <div>
          <Header />
          <Search />
          <SourceUrls />
        </div>
    );
  }
}
