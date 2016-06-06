import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';

render(<Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
        </Route>
       </Router>, document.getElementById('app'));
