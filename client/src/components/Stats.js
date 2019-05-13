import React, { Component } from 'react';
import Link from 'react-router-dom';

import StatsBox from './StatsBox';

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
                    <StatsBox titulo="Raking" col1="Puntuacion" col2 ="tiempo jugado" idUsuario = "77181305"/>
                    <StatsBox titulo="Partidas" col1="Puntuacion" col2 ="tiempo jugado" idUsuario = "77181305"/>
                    <StatsBox titulo="Totales" col1="Puntuacion" col2 ="tiempo jugado" idUsuario = "77181305"/>
                </div>
                
            </div>   
        
            

        </div>
        )
    }

    
}
export default Stats;