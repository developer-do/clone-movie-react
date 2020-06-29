import React, { Component } from 'react';

function Food(props) {
  console.log(props);
  return <h1>I like potato {props.fav} {props.papapapa[0]} {props.papapapa[1]}</h1>;
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Food fav="김치" something={true} papapapa={['hello', 1, 2, 3, 4, true]}/>
        
      </div>
    );
  }
}

export default App;
