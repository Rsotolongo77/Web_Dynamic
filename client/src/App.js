import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from '../pages/Contact/contact';
// import Portfolio from '../pages/Portfolio/portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
      </Switch>
    </Router>
  );
}

export default App;
