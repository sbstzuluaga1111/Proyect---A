import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './components/Nav';

import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Productos';

function App() {
  return (
    <Router>
      <Nav />
      <div className='separate'>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Product} />
      </Switch>
      </div>
      <div className='App-headerr'>
        <h1>Footer</h1>
      </div>
    </Router>
  );
}

export default App;
