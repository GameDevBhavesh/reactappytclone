import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./header.css"



class Header extends Component {

    constructor(){
        super();

    }
    render() {
        return <div className="header">
            <div className="option">
                <div className="image-con">
                <img width="12px" className="optionlogo" src={require("../images/option.png")} />
                </div> 
            </div>
            <img className="logo" src="https://darkeandtaylor.co.uk/wp/wp-content/uploads/2018/09/youtube-logo-png-transparent-image-e1537456990695.png" />
            <div className="searchbox">
                <input type="textfield" placeholder="search" size="30" size="50"></input>
                <button> search</button>
            </div>
            <img className="account" width="25px" src="https://www.abc.org.uk/images/icons/MyABCG.svg" />

        </div>

    }

}
export default Header;