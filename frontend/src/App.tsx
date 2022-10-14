import React from 'react';
import './App.css';
import Header from './components/atoms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import { Book } from './components/atoms/Book/Book';

function App() {
  return (
    <div className="App">
      <Header />
        <Book id={1}
          image={'https://m.media-amazon.com/images/I/91frjMKZ7HL.jpg'}
          book_title={'Mythos'}
          author={'Stephen Fry'}
          book_description={'Funny af book. V good. Thanks, Stephen!'}
          price={'$10'}
          publisher={'Michael Joseph'} />
        <Book id={1}
          image={'https://m.media-amazon.com/images/I/91frjMKZ7HL.jpg'}
          book_title={'Mythos'}
          author={'Stephen Fry'}
          book_description={'Funny af book. V good. Thanks, Stephen!'}
          price={'$10'}
          publisher={'Michael Joseph'} />
      <Footer />
    </div>
  );
}

export default App;
