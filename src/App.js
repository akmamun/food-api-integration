import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
 
import Navbar from './components/Navbar';
import TodoList from "./components/todo/TodoList";


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={TodoList} exact />
         
        </Switch>
      </>
    );
  }
}

export default App;
