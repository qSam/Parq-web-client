import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


class HomeFeature extends Component {

  //First time render
  componentWillMount() {
    //Get All posts for user
    console.log('My Email in Home Feature is : ', this.props.myEmail)
    this.props.fetchPosts(this.props.myEmail)
  }

  renderPosts(){
  
    return this.props.posts.map( (post)=> {
      return (
          <li className="list-group-item" key={post._id} >
             {post.post}
          </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="rounded">
          {this.props.posts.length}
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
  );
}

}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
    myEmail: state.auth.email };
}

export default connect(mapStateToProps,{fetchPosts})(HomeFeature);
