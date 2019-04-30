import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./contentcard.css"

export default class  ContentCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return<div className="contentcard">
            <div className="thumbnail"> 
            <Link to={`/watch/${this.props.card.title}`}>
            <img  className="thumbnail-image" src={this.props.card.thumbnail} />
            </Link> 
            </div>
            <h1 className="content-title">{this.props.card.title}</h1>
            <a href="www.google.com" className="content-owner">{this.props.card.owner}</a>
            <p className="statics">{this.props.card.statics.views} - {this.props.card.statics.time} ago</p>

    </div>
    }
}
