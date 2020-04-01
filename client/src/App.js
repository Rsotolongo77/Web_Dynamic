import React from 'react';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
