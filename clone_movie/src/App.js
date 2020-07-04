import React, { Component } from 'react';

class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  constructor(props) {
    super(props);
    console.log('hello');
    console.log(props);
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log("I'm rendering");
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
