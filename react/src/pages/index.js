import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './about';
import BaseRanking from './baseranking';
import DynamicData from '../international_relation/Dynamic_data';
import Country from '../international_relation/Country';
import Navbar from './nav-bar';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/data'>
          <DynamicData/>
        </Route>
        <Route path='/data/:id' children={<Country />}></Route>
        <Route path='/baseranking'>
          <BaseRanking />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
