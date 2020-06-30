import React, { Component } from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character01_img.png',
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character02_img.png',
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character03_img.png',
  },
  {
    id: 4,
    name: '돈가스',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character04_img.png',
  },
  {
    id: 5,
    name: '김밥',
    image: 'http://comedytv.ihq.co.kr/deliciousguys/_images/character05_img.png',
  },
];



class App extends Component {
    render() {
    return (
      <div>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} />
        ))}
      </div>
    );
  }
}

export default App;
