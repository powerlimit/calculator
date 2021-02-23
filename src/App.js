import React from 'react';
import './assets/scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Index} from './pages/Index';
import {Quiz} from './pages/Quiz';
import {Products} from './pages/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
