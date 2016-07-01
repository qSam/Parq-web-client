import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';


class NewPost extends Component {

  render() {

    const {fields:{post}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >

        <div  className="form-group">
          <label>Share your purchase: </label>
          <input type="text" className="form-control" {...post} />
        </div>

        <button type="submit" className="btn btn-primary">
        Submit</button>

      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  return errors;
}




export default reduxForm({
  post: 'PostsNewForm',
  fields: ['post'],
  validate
},null,null)(PostNew);
