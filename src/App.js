import React from 'react';
import BookContainer from './components/Home/BookContainer';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <BookContainer />
      </div>
    );
  }
}

export default App;
