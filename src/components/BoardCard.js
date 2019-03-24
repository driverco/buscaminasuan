import React, { Component }  from 'react';
import './BoardCard.css';

class BoardCard extends Component {

    render(){
        return(
            <div className="card col-centered ml-4 boardcard p-3"  >
                <div className=" card-title text-center colorDark">
                    <h2>{this.props.board.size}</h2>
                </div>
                <div className="card-body text-center">
                    tamaño: {this.props.board.width} x {this.props.board.height}
                </div>
                <div className="row row-centered">
                    <table className="tabledemo">
                        {this.createTable(this.props.board.width, this.props.board.height)}
                    </table>
                </div>
            </div>
        )
    }

    /* Crear tabla de muestra*/
    createTable = (width, height) => {
        let table = []
        for (let i = 0; i < height; i++) {
          let children = []
          for (let j = 0; j < width; j++) {
            children.push(<td className="celldemo"></td>)
          }
          table.push(<tr>{children}</tr>)
        }
        return table
    }
}

export default BoardCard;
