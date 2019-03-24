import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets


class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {
  	const { copyright = '&copy; Universidad Antonio Nariño - ingeniería de Software  2019' } = this.props;

    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;