import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import BoardCard from '../components/BoardCard';

// data
import { boards } from '../levels.json';

class SelectBoard extends Component {
    constructor(){
        super();
        this.state = {
            boards,
            visible:true
          }
          this.visibleParent = this.visibleParent;
          this.renderBoard = this.renderBoard;
          
    }
    visibleParent = (visible) => {
        this.setState({ visible });
        ReactDOM.render(
            <span />,
            document.getElementById('selectLevel')
          );
    }
    render(){
  
        const boards = this.state.boards.map((board, i) => {
            return (<BoardCard board={board} visibleParent={this.visibleParent } />)          
        });
          
        const { visible } = this.state;
            return(
                <div className="text-center"  >
                    {this.renderBoard(visible, boards)}
                    <div id="selectLevel">
                    </div>
                </div>
            )

    }
    renderBoard = (visible, boards)=>{
        if( visible){
            return ( <div id="selectBoard">
            <h1 className=" h1 ">Buscaminas UAN</h1><br />
            <span className="text-center">Primero, Selecciona el tamaño del tablero</span>
            <div className="row row-centered" >
            {boards}
            </div>
        </div>);
        } else{
            return(
                <button type="button" className="btn btn-primary btn-lg" onClick={()=>this.visibleParent(true)}>Volver a Seleccionar tablero</button>
            );
        }
    }
}
export default SelectBoard;