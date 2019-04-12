
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar} from 'reactstrap';
import store from '../store';

// Assets

import './Header.css';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      authMessage:""
    }
  }
  componentDidMount() {

    this.setState({
      authMessage: store.getState().User.authMessage
    });
    store.subscribe( () => {
      this.setState({
        authMessage: store.getState().User.authMessage
      })
    });
    this.unsubscribe = store.subscribe(() => { });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;

    return (
      <div className="m-0 p-0">
        <Navbar dark color="dark">
          {
            items && items.map(
              (item, key) => {
                let toRender = false;
                if (item.auth ==="A") toRender = true;
                if (item.auth ==="Y"&&this.state.authMessage==="OK") toRender = true;
                if (item.auth ==="N"&&this.state.authMessage!=="OK") toRender = true;
                return (
                  toRender&&<div className="menuItem" key={"menu"+item.title}><Link to={item.url}><i className="material-icons icon">{item.icon}</i>{item.title}</Link></div>
                )
              }
                
            )
          }

        </Navbar> 
      </div>
    );
  }
}

export default Header;

/*          <div className="Menu">
            <nav className ="navbar navbar-dark bg-dark"> */
            
