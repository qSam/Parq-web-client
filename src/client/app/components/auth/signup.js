import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

}

function validate(formProps) {
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate:validate
}, mapStateToProps,actions)(Signup);
