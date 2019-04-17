import React, { Component }  from 'react';
import store from '../store';
import BoardCard from './BoardCard';
import BoardLevels from './BoardLevels';

// data
import { boards } from '../levels.json';

class SelectBoard extends Component {
    constructor(){
        super();
        this.state = {
            boards,
            size:"none",
            showLevels:false,
            authMessage:""
          }
          
    }
    componentDidMount() {
        if(store.getState().User.authMessage!=="OK"){
            this.props.history.push("/home");

        }

        this.setState({
            showLevels: store.getState().SelectBoard.showLevels,
            size:store.getState().SelectBoard.size,
            authMessage: store.getState().User.authMessage
        });

        

        store.subscribe( () => {
            this.setState({
                showLevels: store.getState().SelectBoard.showLevels,
                size:store.getState().SelectBoard.size,
                authMessage: store.getState().User.authMessage
            })
        });
        this.unsubscribe = store.subscribe(() => { });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
    render(){
  
        const boards = this.state.boards.map((board, i) => {
            return (< BoardCard board={board} visibleParent={this.visibleParent } key ={"Board"+board.size} />)          
        });
          
            return(
                <div className="text-center">
                    <div id="selectBoard">

                        <h1 className=" h1 ">Buscaminas UAN</h1><br />
                        {!this.state.showLevels &&<span className="text-center">Primero, Selecciona el tamaño del tablero</span>}
                        {this.state.showLevels &&<span className="text-center">Seleccionaste tablero <span className="badge badge-info">{this.state.size}</span><br /> Ahora Selecciona El Nivel</span>}
                        <div className="row row-centered" >
                            {boards}
                        </div>
                    </div>

                    <div id="selectLevel">
                        <BoardLevels />
                    </div>
                </div>
            )

    }
}


export default SelectBoard;