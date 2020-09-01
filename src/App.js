import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Background from './assets/hockey.jpg';
import './App.css';
import { auth } from './firebase/firebase.utils';
import Footer from './components/footer/footer.component';

const backgoundStyle = {
  backgroundImage: `url(${Background})`
}

class App extends React.Component{
  render(){
    return(
      <>
         <div className="App">
            <HomePage />
        </div>
      </>
    );
  }
}

export default App;