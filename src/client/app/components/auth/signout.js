import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {browserHistory} from 'react-router';

class Signout extends Component {

    componentWillMount() {
      this.props.signoutUser();
    }

    render() {
      return <div className="lobsterFont">Thank You for visiting Parq</div>
    }
}

export default connect(null,actions)(Signout);
