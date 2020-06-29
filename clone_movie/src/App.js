import React, { Component } from 'react';

function Potato() {
  return <h1>I like potato</h1>;
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Potato />
      </div>
    );
  }
}

export default App;
