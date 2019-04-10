import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {
    render (){
        return(
            <div className="home">
                <h1>Bienvenidos a Buscaminas UAN</h1>
                <p>Recuerdas el clásico juego de los 90's, lo hemos revivido!</p>
                <img src ="/img/sample1.PNG"  width="15%" alt="sample1"/>
                <img src ="/img/sample2.PNG" width="15%" alt="sample2"/>
                <img src ="/img/sample3.PNG"  width="15%" alt="sample3"/>
                <p>Tienes Diferentes niveles para elegir, estas son las <Link className="LinkTo" to="/rules">Reglas de juego</Link></p>
                <img src ="/img/sample1.PNG"  width="12%" alt="sample1"/>
                <img src ="/img/sample4.PNG"  width="14%" alt="sample4"/>
                <img src ="/img/sample5.PNG"  width="16%" alt="sample5"/>
                <p>No tienes usuario?, eso no es problema, puedes <Link className="LinkTo" to="/registerUser">Registrarte</Link>
                    , o si ya estas en nuestra plataforma simplemente <Link className="LinkTo" to="/login">inicia Sesión</Link>
                </p>
            </div>
        )
    }
}
export default Home;