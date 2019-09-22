import React, { Component }from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation'
import Login from './components/Login'
import logo from './logo.svg';
import './App.css';
import './styles/main_styles.css'
import './styles/elements_responsive.css'
import  './styles/contact_responsive.css'
import  './styles/about_styles.css'
import './styles/elements_styles.css'
import './styles/responsive.css'
import './styles/news_responsive.css'
import './styles/contact_styles.css'
import './styles/offers_styles.css'

function App() {
  return (
      <BrowserRouter >
        <div className="App">
            <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Login}/>
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
