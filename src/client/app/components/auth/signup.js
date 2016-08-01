import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit(formProps) {
    //Call Signup Action Creator
    //console.log('Here');
    this.props.signupUser(formProps);
  }

  render() {
    const {handleSubmit, fields:{email,password,passwordConfirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />

        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />

        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" {...passwordConfirm} type="password" />

        </fieldset>

        <button action="submit" className="btn btn-primary">Sign Up!</button>

      </form>

    );
  }

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
