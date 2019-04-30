import React, { Component } from 'react';
import { BrowserRouter, Route, Link ,Switch } from "react-router-dom";
import Error from'./mycomponents/new/Error'
import Header from'./mycomponents/subcomponents/Header'
import Sidebar from'./mycomponents/new/Sidebar'
import MainScreen from'./mycomponents/new/MainScreen'
import Trending from'./mycomponents/new/Trending'
import Content from'./mycomponents/new/content'
import "./App.css"





class App extends Component {

  render() {
    return (
    <BrowserRouter>
      <div>
        <div className="app-root" >  
        <Header/>
        <div className="app-main" >
          <Sidebar/>
          <Switch>
            <Route path="/" exact component={MainScreen}/>
            <Route path="/trending" exact component={()=>{return <Trending max="100" filtered="trending"/>}}/>
            <Route path="/watch/:video" component={Content}/>
            <Route component={Error}/>
          </Switch>
         
        </div>

        </div>
       
      </div>

    </BrowserRouter>);

  }


}


export default App;
