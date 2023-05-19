
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename='/News-App'>

        < Navbar />
        <Switch>
          <Route exact key='general' path="/News-App">
                <News category="general"/>    
          </Route>
          <Route exact key='general' path="/general">
                <News category="general"/>    
          </Route>
          <Route exact key='business' path="/business">
                <News category="business"/>    
          </Route>
          <Route exact key='health' path="/health">
                <News category="health"/>    
          </Route>
          <Route exact key='entertainment' path="/entertainment">
                <News category="entertainment"/>    
          </Route>
          <Route exact key='science'  path="/science">
                <News category="science"/>    
          </Route>
          <Route exact key='sports' path="/sports">
                <News category="sports"/>    
          </Route>
          <Route exact key='technology' path="/technologys">
                <News category="technology"/>    
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


