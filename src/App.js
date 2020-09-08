import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';

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
           <Header />
           <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
            </Switch>
        </div>
      </>
    );
  }
}

export default App;