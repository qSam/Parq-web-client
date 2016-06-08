import React, {Component} from 'react';
import {connect} from 'react-redux';


class HomeFeature extends Component {


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

export default connect()(HomeFeature);
