import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
 
import Navbar from './components/Navbar';
import Food from "./components/Food";


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Food} exact />
         
        </Switch>
      </>
    );
  }
}

export default App;
