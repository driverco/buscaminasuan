import React, { Component } from 'react';
import StatsBox from './StatsBox';
import StatsRakings from './StatsRaking';
import StatsJugadores from './StatsJugadores';


class Stats extends Component {
    constructor(props){
        super(props);

        this.state = {
            id_usr:'',
            login:'',
            puntuacion:'',
            tiempo_jugado:''
        }
    }

    render (){
        return(
        <div>

            <div className="container">
                <div className ="row mt-5">
                    <StatsBox titulo="Mejores puntajes" col1="Puntuacion" col2 ="Dificultad" modo = "puntajes"/>
                    <StatsRakings titulo="Mejores Partidas" col1="Puntuacion" col2 ="tiempo jugado" modo = "raking"/>
                    <StatsJugadores titulo="Ranking jugadores" col1="nombre" col2 ="total puntos"  modo = "jugadores"/>
                </div>
            </div>   
        
            

        </div>
        )
    }

    
}

     

export default Stats;