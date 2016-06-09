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
    return (
      <div>Show All the posts</div>
    );
  }

  render() {
    return (
      <div>
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