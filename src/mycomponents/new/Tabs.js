import React, { Component } from 'react';
import { NavLink , Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './Tabs.css';

export default class  Tabs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <NavLink exact activeStyle={{color:"#EA2027",fontWeight: "bold",backgroundColor:"rgb(214, 214, 214)"}} to={`${this.props.to}`}><div className="tabs"> {this.props.name}</div></NavLink>
    }
  
}
