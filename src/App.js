import React from 'react';
import BookContainer from './components/Home/BookContainer';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Navbar logged />
    <BookContainer />
  </>
);

export default App;
