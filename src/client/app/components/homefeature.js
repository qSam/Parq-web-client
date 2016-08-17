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
             <div className="btn-group pull-right" role="group" aria-label="...">
             <button type="button" className="btn btn-default">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </button>
             <button type="button" className="btn btn-default">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </button>
             <button type="button" className="btn btn-default">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </button>
             </div>
          </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="center-element-round">
           Total Purchases Shared : <span className="rounded">{this.props.posts.length} </span>
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
