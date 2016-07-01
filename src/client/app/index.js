import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/index';


import App from './components/app';
import reducers from './reducers';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import HomeFeature from './components/homefeature';
import NewPost from './components/newpost';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

//Update state if token exists
if (token) {
  store.dispatch({type:AUTH_USER});
}

render(<Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="signin" component={Signin} />
          <Route path="signout" component={Signout} />
          <Route path="signup" component={Signup} />
          <Route path="home" component={HomeFeature} />
          <Route path="new" component={NewPost} />
        </Route>
       </Router>
       </Provider>, document.getElementById('app'));
