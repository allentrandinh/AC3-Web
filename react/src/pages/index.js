import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './about';
import BaseRanking from './baseranking';
import DynamicData from '../international_relation/Dynamic_data';
import Country from '../international_relation/Country';
import Navbar from './nav-bar';

const ReactRouterSetup = () => {
  return (
    <Router basename='/'>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/data'>
          <DynamicData/>
        </Route>
        <Route path='/baseranking'>
          <BaseRanking />
        </Route>
        <Route path='/:id' children={<Country />}></Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
