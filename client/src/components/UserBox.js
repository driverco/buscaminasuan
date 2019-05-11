import React, { Component }  from 'react';
import store from '../store';
import { Link } from 'react-router-dom';
import {Row, Col } from 'reactstrap';
import { setUser, setAuthMessage } from '../actions/ActionCreatorUser';
import './UserBox.css';


class UserBox extends Component {
    constructor(props){
        super(props);
        this.state = {
          authMessage:"",
          user: {}
        }
      }
      componentDidMount() {
    
        this.setState({
          authMessage: store.getState().User.authMessage,
          user: store.getState().User.user
        });
        store.subscribe( () => {
          this.setState({
            authMessage: store.getState().User.authMessage,
            user: store.getState().User.user
          })
        });
        this.unsubscribe = store.subscribe(() => { });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
    
      render() {
          return(
            <div className="userBox">
              <Row>
              <Col>
                  <img src={"/img/avatar/"+this.state.user.avatar+".png"} className="imgAvatar" alt="avatar" />
                </Col>
                <Col>
                  <span className="score">{this.state.user.score}</span>
                </Col>
                <Col>
                    <Row>
                        <Col>
                          {this.state.user.username}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                          <Link onClick={()=>this.closeSession()} to="#">Salir</Link>
                        </Col>
                    </Row>
                </Col>
              </Row>
            </div>
          );
      }

    closeSession(){
        store.dispatch(setUser(null));
        store.dispatch(setAuthMessage(""));
        this.props.history.push("/home");
    }

}
export default UserBox;
