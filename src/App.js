import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

class App extends React.Component{
  render(){
    return(
      <>
         <div>
           <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
      </>
    );
  }
}

export default App;