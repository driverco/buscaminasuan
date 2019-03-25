
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets

import './Header.css';
class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;

    return (
      <div className="Header">
          <div className="Menu">
           <nav className ="navbar navbar-dark bg-dark">
            {
              items && items.map(
                (item, key) => <div className="menuItem"><Link to={item.url}><i className="material-icons icon">{item.icon}</i>{item.title}</Link></div>              
                )
            }

          </nav> 
          </div>
        </div>
    );
  }
}

export default Header;

/*          <div className="Menu">
            <nav className ="navbar navbar-dark bg-dark"> */
            
