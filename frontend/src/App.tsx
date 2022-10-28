import React from 'react';
import './App.css';
import Header from './components/atoms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import Navigation from './Navigation'

function App() {
  return (
    <>
      <Header />
      <div id="app">
        <Navigation />
      </div>
      <Footer />
    </>
  );
}

export default App;
