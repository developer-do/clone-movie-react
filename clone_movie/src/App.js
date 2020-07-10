import React, { Component } from 'react';
import Home from './routes/Home';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };


  render() {
    return <Home />
  }
}

export default App;
