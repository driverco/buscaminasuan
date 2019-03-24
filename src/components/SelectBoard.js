import React, { Component }  from 'react';
import BoardCard from '../components/BoardCard';

// data
import { boards } from '../levels.json';

class SelectBoard extends Component {
    constructor(){
        super();
        this.state = {
            boards
          }
    }
    render(){
  
        const boards = this.state.boards.map((board, i) => {
            return (<BoardCard board={board} />)          
        });
          
        return(
            <div className="text-center" >
                <h1 className=" h1 ">Buscaminas UAN</h1><br />
                <span className="text-center">Primero, Selecciona el tamaño del tablero</span>
                <div className="row row-centered" >
                {boards}
                </div>
            </div>
        )

    }
}
export default SelectBoard;