import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { boards } from '../levels.json';

import './Scene.css';

class Scene extends Component {
    constructor(props){
        super(props);
       
        let boardWidth;
        let boardHeight;
        boards.map((board, i) => {
            if(board.size === this.props.size){
                boardWidth = board.width;
                boardHeight = board.height;
            }
        });

        let matrixData = this.createEmptyArrays(boardWidth,boardHeight);
        matrixData = this.createRandomBoms(matrixData, this.props.bombs, boardWidth, boardHeight);

        this.state = {
            boardWidth : boardWidth,
            boardHeight : boardHeight,
            matrix : matrixData
          }
          
          this.drawtable = this.drawtable;
          this.createEmptyArrays = this.createEmptyArrays;
          this.createRandomBoms = this.createRandomBoms;
        }
    static propTypes = {
        size: PropTypes.string.isRequired,
        bombs: PropTypes.number.isRequired
      };
    

    render (){
        
        return(
            <div className="Scene">
                <h3>Nivel : {this.props.size}({this.state.boardWidth} , {this.state.boardHeight}).</h3>
                <div className="clockContainer"><div id="clock" className="clock text-center badge badge-info">00:00</div><div id="bombsContainer" className="BombsContainer text-center badge badge-danger"><i className="material-icons icon">brightness_7</i>X<div id="bombs" className="Bombs">{this.props.bombs}</div></div></div>
                <table className="mineBoard"><tbody>
                {this.drawtable(this.state.matrix)}
                    </tbody></table><br/>
                    <div className="Exit"><button type="button" className="btn btn-danger buttonExit">Abandonar Partida</button></div>
            </div>
        )
    }

    createEmptyArrays = (width, height) => {
        let matrix = []
        for (let i = 0; i < height; i++) {
          let children = []
          for (let j = 0; j < width; j++) {
            children.push(0);
          }
          matrix.push(children)
        }
        return matrix
    }
    createRandomBoms = (matrix, bombs, boardWidth, boardHeight) => {
        let x, y;
        //matrix[4][4]= 1;
        for (let i = 0; i < bombs; i++) {
            x = Math.floor(Math.random()*boardWidth);
            y = Math.floor(Math.random()*boardHeight);
            if (matrix[y][x] == 0 ){
                matrix[y][x] = -1;
            }else{
                i--;
            }
        }
        return matrix
    }
    drawtable = (matrix) => {
        let table = []
        for (let i = 0; i < matrix.length ; i++) {
          let children = []
          for (let j = 0; j < matrix[i].length ; j++) {
            children.push(<td className="cell"><div id ={"cell-"+i+"-"+j}><button type="button" className="btn btn-primary buttonNormal">{/*&nbsp;*/matrix[i][j]}</button></div></td>)
          }
          table.push(<tr>{children}</tr>)
        }
        return table
    }

}
export default Scene;