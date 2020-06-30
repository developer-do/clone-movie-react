import React, { Component } from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: '김치',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character01_img.png',
  },
  {
    name: '삼겹살',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character02_img.png',
  },
  {
    name: '비빔밥',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character03_img.png',
  },
  {
    name: '돈가스',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character04_img.png',
  },
  {
    name: '김밥',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character05_img.png',
  },
];


class App extends Component {
  render() {
    return (
      <div>
        {foodILike.map(dish => (
          <Food name={dish.name} picture={dish.image} />
        ))}
      </div>
    );
  }
}

export default App;
