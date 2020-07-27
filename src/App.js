import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './components/Navigate'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigate />
      <Header />
      <About />
      <Skills />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
