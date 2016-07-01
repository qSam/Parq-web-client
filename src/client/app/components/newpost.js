import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';


class NewPost extends Component {

  render() {

    const {fields:{post}, handleSubmit} = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >

      </form>
    );
  }
}




export default reduxForm({
  post: 'PostsNewForm',
  fields: ['post'],
  validate
},null,null)(PostNew);
