import React, { Component } from 'react';
import './App.css';
import store from './store'
import {loadPostsAction} from './actions/post_action';

store.dispatch(loadPostsAction)
console.log(store.getState())

class App extends Component {
  render() {
    return (
      <div className="App">
      dhfgj
      </div>
    );
  }
}

export default App;
