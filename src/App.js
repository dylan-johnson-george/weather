import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WeatherSearch from './components/WeatherSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <WeatherSearch />
        <Footer />
      </div>
    );
  }
}

export default App;
