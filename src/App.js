import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderForm from './components/OrderPage';
import Success from './components/Success';
import Redirect  from './components/Redirect';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/order-pizza"><OrderForm/></Route> 
        <Route path="/order-success"><Success/></Route>
        <Route path="/redirect-order"><Redirect/></Route>
      </Switch>
    </Router>
  );
};

export default App;
