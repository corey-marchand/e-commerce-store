import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import Background from './assets/hockey.jpg';
import './App.css';

const backgoundStyle = {
  backgroundImage: `url(${Background})`
}

function App(){
  return(
    <>
      <section className="background-style" style={backgoundStyle} ></section>
      <div>
        {/* <Header />  */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
    </>
  );
}

export default App;