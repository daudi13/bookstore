import React from 'react';
import BookContainer from './components/Home/BookContainer';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar logged={true}/>
      <BookContainer />
    </>
  )
}

export default App;
