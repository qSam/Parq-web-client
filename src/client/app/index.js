import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';

render(<App />, document.getElementById('app'));
