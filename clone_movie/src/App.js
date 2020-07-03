import React, { Component } from 'react';

class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  state = {
    count: 0,
  };

  add = () => {
    this.state.count++;
    console.log(this.state.count);
  };

  minus = () => {
    this.state.count--;
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
