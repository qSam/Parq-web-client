import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


class HomeFeature extends Component {

  //First time render
  componentWillMount() {
    //Get All posts for user
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map( (post)=> {
      return (
          <li className="list-group-item" >
             {post.post}
          </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="rounded">
          Purchase Count: {this.props.posts.length}
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
  );
}

}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps,{fetchPosts})(HomeFeature);
