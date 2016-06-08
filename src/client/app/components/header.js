import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';



class Header extends Component {

  renderLinks(){

    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>
    ];
  }


   render(){
     return (
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </nav>
     );
   }
}

export default connect()(Header);
