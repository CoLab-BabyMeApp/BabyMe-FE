import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Landing from './Landing';
import Map from './Map';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </Router>
    </div>
  )
}
