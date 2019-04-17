import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {InputGroup, Input, Row, Col } from 'reactstrap';
import Crypto from 'crypto';
import store from '../store';
import {setAuthMessage, setUser} from '../actions/ActionCreatorUser';
import './RegisterUser.css';


class RegisterUser extends Component {

    constructor(props) {
        super(props);


        this.state = {
            userName: '',
            userNameError: '',
            email: '',
            emailError: '',
            age:0,
            ageError:"",
            password: '',
            passwordError: '',
            retypePassword: '',
            avatar:"456317",
            submitted: false,
            authMessage:""
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectAvatar = this.selectAvatar.bind(this);
        this.registrarUser = this.registrarUser.bind(this);

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
                <h1 className="text-center">Registrate</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                <InputGroup>
                    <div className="registerForm">
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
                            <Col><label htmlFor="email">Correo Electrónico: </label></Col>
                            <Col>
                                <Input type="text" placeholder="email@server.com..." name="email" value={this.state.email} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                            {this.state.submitted && (this.state.emailError.length>1) && <div className="alertMessage text-muted">{this.state.emailError}</div>}
                            </Col>
                        </Row>
                        <Row>
                            <Col><label  htmlFor="age">Edad: </label></Col>
                            <Col>
                                <Input type="range" className="custom-range " min="0" max="99" step="1" id="age" name="age" value={this.state.age} onChange={this.handleChange} />{this.state.age}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                            {this.state.submitted && (this.state.ageError.length>1) && <div className="alertMessage text-muted">{this.state.ageError}</div>}
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
                            <Col><label htmlFor="retypePassword">Confirmar Contraseña: </label></Col>
                            <Col >
                                <Input type="password" placeholder="Retytpe Password..." name="retypePassword" value={this.state.retypePassword} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row >
                            <Col><label htmlFor="avatar">Selecciona tu Avatar: </label><img src={"/img/avatar/"+this.state.avatar+".png"} alt="avatar"/></Col>
                        </Row>
                        <Row>
                            <Col span="2">
                                <img src="/img/avatar/456317.png" onClick={()=>this.selectAvatar("456317")} className="imgAvatar" alt="456317"/>
                                <img src="/img/avatar/456318.png" onClick={()=>this.selectAvatar("456318")} className="imgAvatar" alt="456318"/>
                                <img src="/img/avatar/456319.png" onClick={()=>this.selectAvatar("456319")} className="imgAvatar" alt="456319"/>
                                <img src="/img/avatar/456320.png" onClick={()=>this.selectAvatar("456320")} className="imgAvatar" alt="456320"/>
                                <img src="/img/avatar/456321.png" onClick={()=>this.selectAvatar("456321")} className="imgAvatar" alt="456321"/>
                                <img src="/img/avatar/456322.png" onClick={()=>this.selectAvatar("456322")} className="imgAvatar" alt="456322"/>
                                <img src="/img/avatar/456323.png" onClick={()=>this.selectAvatar("456323")} className="imgAvatar" alt="456323"/>
                                <img src="/img/avatar/456324.png" onClick={()=>this.selectAvatar("456324")} className="imgAvatar" alt="456324"/>
                                <img src="/img/avatar/456325.png" onClick={()=>this.selectAvatar("456325")} className="imgAvatar" alt="456325"/>
                                <img src="/img/avatar/456326.png" onClick={()=>this.selectAvatar("456326")} className="imgAvatar" alt="456326"/>
                                <img src="/img/avatar/456327.png" onClick={()=>this.selectAvatar("456327")} className="imgAvatar" alt="456327"/>
                                <img src="/img/avatar/456328.png" onClick={()=>this.selectAvatar("456328")} className="imgAvatar" alt="456328"/>
                                <img src="/img/avatar/456329.png" onClick={()=>this.selectAvatar("456329")} className="imgAvatar" alt="456329"/>
                                <img src="/img/avatar/456330.png" onClick={()=>this.selectAvatar("456330")} className="imgAvatar" alt="456330"/>
                                <img src="/img/avatar/456331.png" onClick={()=>this.selectAvatar("456331")} className="imgAvatar" alt="456331"/>
                                <img src="/img/avatar/456332.png" onClick={()=>this.selectAvatar("456332")} className="imgAvatar" alt="456332"/>
                            </Col>
                        </Row>
                        {this.state.authMessage }
                        <Row >
                            <Col>
                                <button className="btn btn-primary">Registrate</button>
                            </Col>
                            <Col>
                              Ya tienes Usuario?&nbsp;<Link to="/login" className="LinkTo">Inicia sesión</Link>
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
        if (this.state.userName.length <4 ){
            this.setState({ userNameError: "El Nombre debe tener al menos 4 caracteres" });
            valid = false;
        }else{
            if (this.state.userName.length > 10 ){
                this.setState({ userNameError: "El Nombre de usuario no debe tener mas de 10 caracteres" });
                valid = false;
            }else{
                var reName = /^[a-z0-9]+$/i;

                if (!reName.test(this.state.userName)){
                    this.setState({ userNameError: "El Nombre de usuario no debe contener caracteres especiales ni espacios, solo letras y números" });
                    valid = false;
                }else{
                    this.setState({ userNameError: "" });
                }
            }
        }
        if (this.state.email.length <8 ){
            this.setState({ emailError: "El Email es obligatorio" });
            valid = false;
        }else{
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(this.state.email)){
                this.setState({ emailError: "El correo no tiene formato correcto" });
                valid = false;
            }else{
                this.setState({ emailError: "" });
            }
        }
        if (this.state.age <10 ){
            this.setState({ ageError: "Debes Tener al menos 10 años para jugar" });
            valid = false;
        }else{
            this.setState({ ageError: "" });
        }
        if (this.state.password.length <8 ){
            this.setState({ passwordError: "la contraseña debe tener al menos 8 caracteres" });
            valid = false;
        }else{
            if (this.state.retypePassword.length <8 ){
                this.setState({ passwordError: "la confirmacion de la contraseña debe tener al menos 8 caracteres" });
                valid = false;
            }else{
                if (this.state.retypePassword !== this.state.password ){
                    this.setState({ passwordError: "las contraseñas no coinciden" });
                    valid = false;
                }else{
                    this.setState({ passwordError: "" });
                }
            }
        }
 
        this.setState({ submitted: true });
        if (valid) {
            this.registrarUser(this.state.userName, this.state.email, this.state.password, this.state.age, this.state.avatar);
        }

    }
    selectAvatar(avatar){
        this.setState({avatar:avatar});
    }

    registrarUser  (userName, email,password, age, avatar){
        fetch(`/api/users/${userName}`)
        .then(res => res.json())
        .then(user => {
          //console.log(user);
          if(user.length >0 ){
              //console.log("usuario ya existe");
              store.dispatch(setAuthMessage ("El Usuario Ya Existe"));
          }else{
            fetch('/api/users', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName: userName,
                    email: email,
                    password: Crypto.createHash('sha256').update(password).digest('hex'),
                    age: age,
                    avatar: avatar})
            })
            .then(res => res.json())
            .then(res => {
                //console.log(res);
                store.dispatch(setAuthMessage ("OK"));
                store.dispatch(setUser ({ username: userName,
                    email: email,
                    age: age,
                    avatar: avatar})
                );
                this.props.history.push("/selectBoard");
            });
          }
        });
    }
    
}


  
export default RegisterUser;
