import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {InputGroup, Input, Row, Col } from 'reactstrap';
import './Login.css';
import store from '../store';
import { setAuthMessage, setUser } from '../actions/ActionCreatorUser';
import Crypto from 'crypto';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userNameError:'',
            password: '',
            passwordError: '',
            submitted : false,
            authMessage:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authUser = this.authUser.bind(this);
        
    }
    componentDidMount() {
        this.setState({
            authMessage:store.getState().User.authMessage
        })
        store.subscribe( () => {
          this.setState({
            authMessage:store.getState().User.authMessage
          })
        });
        this.unsubscribe = store.subscribe(() => { });
    }
      
    componentWillUnmount() {
        this.unsubscribe();
    }


    render (){
        return(
            <div>
                <h1 className="text-center">Inicia Sesión</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                <InputGroup>
                    <div className="loginForm">
                        <Col span="2">Por favor ingresa tus datos:</Col>
                        <Row >
                            <Col><label  htmlFor="userName">Nombre del Jugador: </label></Col>
                            <Col>
                                <Input type="text" placeholder="Username..." name="userName" value={this.state.userName} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                {this.state.submitted && (this.state.userNameError.length>1) && <div className="alertMessage text-muted">{this.state.userNameError}</div>}
                                <div className="alertMessage text-muted">{ this.state.authMessage }</div>
                            </Col>
                        </Row>
                        <Row >
                            <Col><label htmlFor="password">Contraseña: </label></Col>
                            <Col>
                                <Input type="password" placeholder="Password..."  name="password" value={this.state.password} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                            </Col>
                            <Col>
                            {this.state.submitted && (this.state.passwordError.length>1) && <div className="alertMessage text-muted ">{this.state.passwordError}</div>}
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <button className="btn btn-primary">Inicia Sesión</button>
                            </Col>
                            <Col>
                              No tienes Usuario?&nbsp;<Link to="/registerUser" className="LinkTo">Registrate</Link>
                            </Col>
                        </Row>
                    </div>
                    </InputGroup>
                </form>

            </div>
        )
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let valid = true;
        if (this.state.userName.length <1 ){
            this.setState({ userNameError: "Por favor digita el nombre de usuario" });
            valid = false;
        }else{
            this.setState({ userNameError: "" });
        }
        if (this.state.password.length <1 ){
            this.setState({ passwordError: "por favor digita la contraseña" });
            valid = false;
        }else{
            this.setState({ passwordError: "" });
        }
 
        this.setState({ submitted: true });
        if (valid) {
            this.authUser(this.state.userName, this.state.password);
        }

    }
    authUser  (userName,password){
        fetch('/api/users/Auth', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName: userName,
                password: Crypto.createHash('sha256').update(password).digest('hex')
            })
        }).then(res => res.json())
        .then(user => {
            console.log(user);
            if(user.length ===0 ){
                store.dispatch(setAuthMessage ("Usuario o Clave Invalido"));
            }else{
                //console.log(res);
                store.dispatch(setAuthMessage ("OK"));
                store.dispatch(setUser (user));
                this.props.history.push("/selectBoard");
            }
        });
    }
}
export default Login;