import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/home', '/react-portfolio']}>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/portfolio'>
          {/* pass in portfolio infor from json */}
          {/* <Portfolio props={portfolioData} /> */}
          <Portfolio />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route exact path='/contact' >
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;