import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import reducers from './reducers';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="signin" component={Signin} />
        </Route>
       </Router>
       </Provider>, document.getElementById('app'));
