import React from 'react';
import './App.css';
import Header from './components/atoms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import Navigation from './Navigation'

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
