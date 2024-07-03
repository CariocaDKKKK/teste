import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './screens/auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* Outras rotas */}
      </Switch>
    </Router>
  );
}

export default App;
