import React, { Component } from 'react';

class About extends Component {
    render (){
        return(
            <div className="About">
                <h1 className="text-center">Acerca de Buscaminas UAN</h1>
                <h2>Aplicación:</h2>
                <p>Esta aplicación fue realizada como proyecto de: <br /> Ingeniería de Software 2, 2019 I<br /> Universidad Antonio Nariño</p>
                <h2>Tutor:</h2>
                <p>Wilson Javier Romero Forero</p>
                <h2>Aplicación Realizada por :</h2>
                <ul>
                    <li>Diana Paola Rincón Montaña</li>
                    <li>Mónica Alejandra Parra Murcia</li>
                    <li>Juan Sebastián Valencia Londoño</li>
                    <li>Wilmer Rodríguez Camargo</li>
                </ul>
            </div>
        )
    }
}
export default About;