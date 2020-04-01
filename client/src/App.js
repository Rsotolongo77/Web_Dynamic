import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route exact path="/add" component={AddContact} />
        <Route exact path="/edit/:id" component={EditContact} />
        <Route exact path="/contacts/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
