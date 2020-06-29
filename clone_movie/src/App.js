import React, { Component } from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Food fav="김치" />
        <Food fav="라면" />
        <Food fav="삼겹살" />
        <Food fav="청국장" />
        
      </div>
    );
  }
}

export default App;
