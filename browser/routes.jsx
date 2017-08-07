import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Main from './components/Main.jsx';


const Routes = (props) => (
  <Router history={history}>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
           <Route path="/projects" component={Main}/>
           <Route path="/about" component={Main} />
           <Route path="/resume" component={Main} />
           <Route path="/contact" component={Main} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default Routes;
