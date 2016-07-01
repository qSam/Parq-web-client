import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addPost} from '../actions/index';


class NewPost extends Component {

  onSubmit(props) {
    //Submit new post action
  }

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
  form: 'NewPostForm',
  fields: ['post'],
  validate
},null,{addPost})(NewPost);
