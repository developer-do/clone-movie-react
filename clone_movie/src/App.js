import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Food({name, image, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://lh3.googleusercontent.com/npew9dDnrDUsZl3lrIzjGAUr2SGR6qC2XLteyiNSeAp2SumD-eE3cruubr5FunAWyq0=w300-h250',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://lh3.googleusercontent.com/npew9dDnrDUsZl3lrIzjGAUr2SGR6qC2XLteyiNSeAp2SumD-eE3cruubr5FunAWyq0=w300-h250',
    rating: 4.9,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://lh3.googleusercontent.com/npew9dDnrDUsZl3lrIzjGAUr2SGR6qC2XLteyiNSeAp2SumD-eE3cruubr5FunAWyq0=w300-h250',
    rating: 3.6,
  },
  {
    id: 4,
    name: '돈가스',
    image: 'https://lh3.googleusercontent.com/npew9dDnrDUsZl3lrIzjGAUr2SGR6qC2XLteyiNSeAp2SumD-eE3cruubr5FunAWyq0=w300-h250',
    rating: 2,
  },
  {
    id: 5,
    name: '김밥',
    image: 'https://lh3.googleusercontent.com/npew9dDnrDUsZl3lrIzjGAUr2SGR6qC2XLteyiNSeAp2SumD-eE3cruubr5FunAWyq0=w300-h250',
    rating: 4,
  },
];



class App extends Component {
    render() {
    return (
      <div>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
        ))}
      </div>
    );
  }
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
