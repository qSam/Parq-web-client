import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {newPost} from '../actions/index';
import {Link} from 'react-router';


class NewPost extends Component {


  onSubmit(props) {
    //Call action creator
    console.log('New Post email prop ', this.props.myEmail)
    this.props.newPost(props, this.props.myEmail);
  }


    renderAlert() {
      if (this.props.errorMessage) {
        return (
            <div className="alert alert-danger">
              <strong>Oops! </strong>{this.props.errorMessage}
            </div>
        );
      }
    }

  render() {

    const {fields:{post}, handleSubmit} = this.props;

    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >

        <div  className="form-group">
          <label>Share your purchase: </label>
          <input type="text" className="form-control" {...post} />
          {post.touched && post.error &&
            <div className="error">{post.error}</div>}
        </div>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">
        Submit</button>

      </form>

    );
  }
}

function validate(formProps) {
  const errors = {}

  if (!formProps.post){
    errors.post = 'Pleas enter a post';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    myEmail: state.auth.email,
    errorMessage: state.auth.error 
  };
}


export default reduxForm({
  form: 'NewPostForm',
  fields: ['post'],
  validate:validate
},mapStateToProps,{newPost})(NewPost);
