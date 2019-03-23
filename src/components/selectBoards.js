    import React, { Component }  from 'react';
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
            return (
                <div className="card col-centered ml-4 board p-3"  >
                    <div className=" card-title text-center colorDark">
                        <h2>{board.size}</h2>
                    </div>
                    <div className="card-body text-center">
                        tamaño: {board.width} x {board.height}
                    </div>
                    <div className="row row-centered">
                        <table className="tabledemo">
                            {this.createTable(board.width, board.height)}
                        </table>
                    </div>
                </div>
                
            )
            
          });

        return(
            <div>
                <h1 className=" h1 ">Buscaminas UAN</h1><br />
                <span className="text-center">Primero, Selecciona el tamaño del tablero</span>
                <div className="row row-centered" >
                {boards}
                </div>
            </div>
        )

    }
    createTable = (width, height) => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < height; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < width; j++) {
            children.push(<td className="celldemo"></td>)
          }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table


    }
     showLevels  = (board) =>{
        alert("level"+board.size)
    }

}
export default SelectBoard;