import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Sidebar.css"
import Tabs from "./Tabs"

export default class  Sidebar extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return <div className="leftdiv">
    <Tabs to="/" name="home" />
    <Tabs to="/trending" name="trending" />
    <Tabs to="/subscribtion" name="subscribtion" />
    </div>
    }
}