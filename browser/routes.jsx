import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Main from './components/Main.jsx';


/* -----------------    COMPONENT     ------------------ */

const Routes = (props) => (
  <Router history={history}>
    <div>
      {/* <Sidebar />
      <Navbar /> */}
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/map" />
        </Switch>
      </main>
    </div>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

// import { getCurrentLocation } from './reducers/location';
// import { fetchStories } from './reducers/stories';

// const mapProps = null;

// const mapDispatch = null;
// const mapDispatch = dispatch => ({
//   fetchCurrentLocation: () => {
//     console.log('getch curr')
//     dispatch(getCurrentLocation());
//   }
// });
//   onRealStoryEnter: (nextRouterState) => {
//     const storyId = nextRouterState.params.storyId;
//     dispatch(fetchStory(storyId));
//   },
//   fetchInitialData: () => {
//     dispatch(fetchStories());
//   }
// });

// export default connect(mapProps, mapDispatch)(Routes);
export default Routes;
