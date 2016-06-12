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
import HomeFeature from './components/homefeature';

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
          <Route path="home" component={HomeFeature} />
        </Route>
       </Router>
       </Provider>, document.getElementById('app'));
