import React, { Component } from 'react';
import store from '../store';
import './Scene.css';

class Scene extends Component {
    constructor(props){
        super(props);

        this.state = {
            board : store.getState().Scene.board,
            size:store.getState().SelectBoard.size,
            width:store.getState().SelectBoard.width,
            height:store.getState().SelectBoard.height,
            bombs:store.getState().SelectBoard.bombs

        }
        store.subscribe( () => {
            this.setState({
                board: store.getState().Scene.board
            })
        });
          this.drawtable = this.drawtable;
        }
        componentDidMount() {
            this.unsubscribe = store.subscribe(() => { });
          }
          componentWillUnmount() {
            this.unsubscribe();
          }

    render (){
        
        return(
            <div className="Scene">
                <h3>Nivel : {this.state.size}({this.state.width} , {this.state.height}).</h3>
                <div className="clockContainer"><div id="clock" className="clock text-center badge badge-info">00:00</div><div id="bombsContainer" className="BombsContainer text-center badge badge-danger"><i className="material-icons icon">brightness_7</i>X<div id="bombs" className="Bombs">{this.state.bombs}</div></div></div>
                <table className="mineBoard"><tbody>
                {this.drawtable(this.state.board)}
                    </tbody></table><br/>
                    <div className="Exit"><button type="button" className="btn btn-danger buttonExit">Abandonar Partida</button></div>
            </div>
        )
    }

    drawtable = (matrix) => {
        let table = []
        for (let i = 0; i < matrix.length ; i++) {
          let children = []
          for (let j = 0; j < matrix[i].length ; j++) {
            children.push(<td className="cell" key={"cell-"+j+"-"+i}><div id ={"cell-"+i+"-"+j}><button type="button" className="btn btn-primary buttonNormal">{/*&nbsp;*/matrix[i][j]}</button></div></td>)
          }
          table.push(<tr key={"row-"+i}>{children}</tr>)
        }
        return table
    }

}
export default Scene;