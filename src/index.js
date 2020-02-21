import React, { Component } from 'react';
import HomePage from './homepage';
import ReactDOM from 'react-dom';

class App extends Component{
  render(){
    return(
      <div>
        <HomePage />
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)