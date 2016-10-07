'use strict';
import React, { Component } from "react";

export default class Login extends Component{
  render(){
    return (
      <div id = 'loginForm'>
        <input type= 'text' placeholder = 'User Name' id = "userName" className = "user-name"/>
        <input type = 'password' placeholder = 'password' id= "password" className = "password"/>
        <button value = 'submit' id = "submit" className = "submit">Submit</button>
      </div>);
  }
}
