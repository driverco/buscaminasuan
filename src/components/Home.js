import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {
    render (){
        return(
            <div className="home">
                <h1>Bienvenidos a Buscaminas UAN</h1>
                <p>Recuerdas el clásico juego de los 90's, lo hemos revivido!</p>
                <img src ="/img/sample1.PNG"  width="15%"/>
                <img src ="/img/sample2.PNG" width="15%"/>
                <img src ="/img/sample3.PNG"  width="15%"/>
                <p>Tienes Diferentes niveles para elegir, intentalo ahora</p>
                <img src ="/img/sample1.PNG"  width="12%"/>
                <img src ="/img/sample4.PNG"  width="14%"/>
                <img src ="/img/sample5.PNG"  width="16%"/>
                <p>No tienes usuario?,mm eso no es problema, puedes <Link className="LinkTo" to="/registerUser">Registrarte</Link>
                    , o si ya estas en nuestra plataforma simplemente <Link className="LinkTo" to="/login">inicia Sesión</Link>
                </p>
            </div>
        )
    }
}
export default Home;