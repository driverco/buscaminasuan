import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterUser.css';

class RegisterUser extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            age:0,
            ageError:"",
            password: '',
            passwordError: '',
            retypePassword: '',
            avatar:"",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render (){
        return(
            <div>
                <h1 className="text-center">Registrate</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='registerForm '>
                        <div>Por favor ingresa tus datos:</div>
                        <div className='form-group row'>
                            <label  className="inputLabel col-sm-3 col-form-label" htmlFor="name">Nombre del Jugador: </label>
                            <div className="col-sm-7">
                                <input type="text" className="inputRegister form-control col-sm-7" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            {this.state.submitted && (this.state.nameError.length>1) && <div className="alertMessage text-muted">{this.state.nameError}</div>}
                        </div>
                        <div className='form-group row'>
                            <label className="inputLabel col-sm-3 col-form-label" htmlFor="email">Correo Electrónico: </label>
                            <div className="col-sm-7">
                                <input type="text" className="inputRegister form-control col-sm-7" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            {this.state.submitted && (this.state.emailError.length>1) && <div className="alertMessage text-muted">{this.state.emailError}</div>}
                        </div>
                        <div className='form-group row'>
                            <label className="inputLabel col-sm-3 col-form-label" htmlFor="age">Edad: </label>
                            <div className="col-sm-7">
                            <input type="range" class="custom-range col-sm-7" min="0" max="99" step="1" id="age" name="age" value={this.state.age} onChange={this.handleChange}></input>{this.state.age}
                            </div>
                            {this.state.submitted && (this.state.ageError.length>1) && <div className="alertMessage text-muted">{this.state.ageError}</div>}
                        </div>
                        <div className='form-group row'>
                            <label className="inputLabel col-sm-3 col-form-label" htmlFor="password">Contraseña: </label>
                            <div className="col-sm-7">
                                <input type="text" className="inputRegister form-control col-sm-7" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            {this.state.submitted && (this.state.passwordError.length>1) && <div className="alertMessage text-muted ">{this.state.passwordError}</div>}
                        </div>
                        <div className='form-group row'>
                            <label className="inputLabel col-sm-3 col-form-label" htmlFor="retypePassword">Confirmar Contraseña: </label>
                            <div className="col-sm-7">
                                <input type="text" className="inputRegister form-control col-sm-7" name="retypePassword" value={this.state.retypePassword} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row text-center">
                            <button className="btn btn-primary">Registrate</button>
                            {/*loggingIn &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            */}
                            &nbsp;ya tienes Usuario?&nbsp;<Link to="/login" className="LinkTo">Inicia sesión</Link>
                            </div>
                    </div>
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
        //if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test($('#email').val())) { /* return true */ }
        if (this.state.name.length <8 ){
            this.setState({ nameError: "El Nombre debe tener al menos 8 caracteres" });
            valid = false;
        }else{
            this.setState({ nameError: "" });
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
        if (this.state.username && this.state.password) {
            //dispatch(userActions.login(this.state.username, this.state.password));
        }

    }
}
export default RegisterUser;