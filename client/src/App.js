import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/home';
// import About from '../src/components/About';
// import Contact from '../src/components/Contact';
// import Portfolio from '../src/components/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} /> */}
      </Switch>
    </Router>
  );
}

export default App;
