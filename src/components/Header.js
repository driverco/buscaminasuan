
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <div className="Header">
          <div className="Menu">
           <nav className ="navbar navbar-dark bg-dark">
            {
              items && items.map(
                (item, key) => /*<li key={key}>*/<Link to={item.url}>{item.title}</Link> 
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
            
