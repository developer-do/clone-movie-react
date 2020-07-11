import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
  console.log(BrowserRouter);
  console.log(HashRouter);
  console.log(Route);
  return (
    <BrowserRouter >
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
