import React from 'react';
import './App.css';
import Header from './components/atoms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import Navigation from './Navigation'
import { SnackbarContextProvider } from './contexts/MuiSnackbarContext';

function App() {
  return (
    <>
      <Header />
      <div id="app">
        <SnackbarContextProvider>
          <Navigation />
        </SnackbarContextProvider>

      </div>
      <Footer />
    </>
  );
}

export default App;
