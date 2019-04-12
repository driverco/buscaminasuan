import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import items from '../Menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Header items={items} />
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;