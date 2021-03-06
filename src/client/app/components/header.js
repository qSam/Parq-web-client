import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';



class Header extends Component {

  renderLinks(){

    if (this.props.authenticated) {
      //Show a link to sign to sign out
      return [
        <li className="nav-item" key={1} >
          <Link className="nav-link" to="/home">Home</Link>
      </li>,
        <li className="nav-item" key={2} >
          <Link className="nav-link" to="/new">Add to Parq</Link>
      </li>,
        <li className="nav-item" key={3} >
          <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    ];

    } else {
    return [
      <li className="nav-item" key={4}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={5}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    ];
  }
}


   render(){
     return (
        <nav className="navbar navbar-light parq-theme lobsterFontMedium">
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </nav>
     );
   }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
