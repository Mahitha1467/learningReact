'use strict';
import React from "react";
import Header from "./header";
import ConfiguredSources from "./configuredSources";
import Search from "./searchBox";
import Sources from "./sources";
import FontAwesome from "react-fontawesome";

export default class Page extends React.Component{
  render() {
    return (
        <div>
          <Header />
          <Search />
          <Sources />
        </div>
    );
  }
}
