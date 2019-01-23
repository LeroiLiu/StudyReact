import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';

import CommentBox from './components/CommentBox';



const tags = ['123','456']

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameCard name="Leroi" number="17682100208" tags={tags}/>
        <LikesButton />
        <CommentBox />
      </div>
    );
  }
}

export default App;
