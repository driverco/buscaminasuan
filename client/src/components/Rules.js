import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Rules extends Component {
    render (){
        return(
            <div className="text-center">

                <h1> Reglas de Juego</h1>
                <p><b>OBJETIVO:</b><br/> El objetivo del juego es encontrar todas las minas activando todas las casillas que no tienen mina antes que termine el tiempo.
                    <img src ="/img/sample3.PNG" alt="sample3" />
                </p>
                <p><b>CONTADOR DE TIEMPO:</b><br/> El tiempo empieza a contar una vez das el primer clic sobre el tablero, y para ganar debes terminar antes que el conteo llegue a cero <img src ="/img/clock.PNG" alt="clock" /></p>
                <p><b>MARCACION DE MINAS:</b><br/> Con clic derecho marcas las casillas que crees que tienen mina<img src ="/img/marked.PNG" alt="marked" />, esto reducirá el contador de minas,<img src ="/img/counter.PNG" alt="counter" /> pero ten cuidado, puede que tu casilla marcada no sea realmente una mina, las casillas marcadas se desmarcan con clic derecho</p>
                <p><b>CASILLAS ACTIVADAS:</b><br/> las casillas que activas pueden tener tres posibles opciones: 
                <br />1-Casilla en blanco: <img src ="/img/empty.PNG" alt="empty"/> En este caso las casillas que la rodean se activarán automaticamente.
                <br />2-Casilla con bomba cerca: <img src ="/img/nearby.PNG" alt="nearby"/> En este caso aparecerá un número que indica la cantidad de bombar que esta casilla tiene alrededor. 
                <br />3-Casilla con bomba: <img src ="/img/bomb.PNG" alt="bomb"/> perderás el juego. 
                </p>
                <p> Regresar al <Link to="/">inicio</Link></p>
            </div>
        )
    }
}

export default Rules;