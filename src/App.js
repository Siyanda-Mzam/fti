import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Carousel from './components/carousel/carousel';
import Intro from './components/introduction/intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
