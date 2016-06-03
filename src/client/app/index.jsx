import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
    <p>Let's build the Parq Web Client</p>
    );
  }
}

render(<App/>, document.getElementById('app'));
