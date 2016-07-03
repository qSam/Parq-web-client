import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {newPost} from '../actions/index';
import {Link} from 'react-router';


class NewPost extends Component {


  onSubmit(props) {
    //Call action creator
    this.props.newPost(props);

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
},null,{newPost})(NewPost);
