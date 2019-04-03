import React, { Component } from 'react';
import store from '../store';
import {markCell, unmarkCell, activateCell} from '../actions/ActionCreatorScene'
import './Scene.css';
import { LOST,WIN, PLAYING, INIT } from '../reducers/Scene';



class Scene extends Component {
  constructor(props){
    super(props);

    this.state = {
      board : store.getState().Scene.board,
      stateBoard : store.getState().Scene.stateBoard,
      bombsMarked: store.getState().Scene.bombsMarked,
      playingState: store.getState().Scene.playingState,
      size:store.getState().SelectBoard.size,
      width:store.getState().SelectBoard.width,
      height:store.getState().SelectBoard.height,
      bombs:store.getState().SelectBoard.bombs,
      x:0,
      y:0,
      func:""
    }
    store.subscribe( () => {
        this.setState({
          board: store.getState().Scene.board,
          stateBoard: store.getState().Scene.stateBoard,
          bombsMarked: store.getState().Scene.bombsMarked,
          playingState: store.getState().Scene.playingState
        })
    });
    this.drawtable = this.drawtable;
    this.markBomb = this.markBomb;
    this.unmarkBomb = this.unmarkBomb;
    this.prepareMark = this.prepareMark;
    this.prepareUnMark = this.prepareUnMark;
    this.unprepareMark = this.unprepareMark;
    this.activateCell = this.activateCell;
    this.triggerMarkUnmark = this.triggerMarkUnmark;
    this.mensajeEstado = this.mensajeEstado;
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
            <div className="clockContainer">
              <div id="clock" className="clock text-center badge badge-info">00:00</div>
              <div id="bombsContainer" className="BombsContainer text-center badge badge-danger"><i className="material-icons icon">brightness_7</i>X<div id="bombs" className="Bombs">{this.state.bombs - this.state.bombsMarked}</div></div>
              <div className="text-center badge badge-info">Estado:{this.mensajeEstado(this.state.playingState)}</div>
            </div>
            <table className="mineBoard"><tbody>
              {this.drawtable(this.state.board, this.state.stateBoard)}
            </tbody></table><br/>
            <div className="Exit"><button type="button" className="btn btn-danger buttonExit">Abandonar Partida</button></div>
          </div>
      )
  }

  drawtable = (matrix, stateMatrix) => {
      let table = []
      for (let i = 0; i < matrix.length ; i++) {
        let children = [];
        let cell;
        let cellvalue;
        for (let j = 0; j < matrix[i].length ; j++) {
          if (stateMatrix[i][j] === "N"){//celda sin activar
            cell = <button type="button" ref={"button-"+j+"-"+i} id={"button-"+j+"-"+i} className="btn btn-primary buttonNormal"  onKeyDown={(e)=> this.triggerMarkUnmark(this.state.playingState, e,this.state.func, this.state.y, this.state.x)}  onMouseEnter={() => this.prepareMark(this.state.playingState, "button-"+j+"-"+i,i,j)} onMouseLeave={() => this.unprepareMark(this.state.playingState)} onClick={() => this.activateCell(this.state.playingState, i,j)} onContextMenu={(e) => this.markBomb(this.state.playingState, e,i,j) }>&nbsp;</button>;
          }
          if (stateMatrix[i][j] === "M"){//celda Marcada como bomba
            cell = <button type="button"  ref={"button-"+j+"-"+i}  id={"button-"+j+"-"+i} className="btn btn-primary buttonBombMark" onKeyDown={(e)=> this.triggerMarkUnmark(this.state.playingState, e,this.state.func, this.state.y, this.state.x)} onMouseEnter={() => this.prepareUnMark(this.state.playingState, "button-"+j+"-"+i,i,j) } onMouseLeave={() => this.unprepareMark(this.state.playingState)} onContextMenu={(e) => this.unmarkBomb(this.state.playingState, e,i,j)}><i className="material-icons icon">flag</i></button>;
          }
          if (stateMatrix[i][j] === "A"){//celda Activada
            if (matrix[i][j]=== -1){
              cellvalue = <i className="material-icons icon">brightness_7</i>;
            } else if (matrix[i][j]=== 0){
              cellvalue = '\u00A0';
            } else {
              cellvalue = matrix[i][j];
            }
            cell = <div className={"buttonActivated button"+matrix[i][j]}>{ cellvalue }</div>;
          }
          children.push(<td className="cell" key={"cell-"+j+"-"+i}><div id ={"cell-"+i+"-"+j}>{cell}</div></td>)
        }
        table.push(<tr key={"row-"+i}>{children}</tr>)
      }
      return table
  }
  markBomb = (playingState, e, y, x) => {
    if(playingState !== LOST){
      e.preventDefault();
      store.dispatch(markCell(y,x));
    }
  }
  unmarkBomb = (playingState, e, y, x) => {
    if(playingState !== LOST){
      e.preventDefault();
      store.dispatch(unmarkCell(y,x));
    }
  }
  prepareMark = (playingState,element, y, x) => {
    if(playingState !== LOST){
      this.refs[element].focus();
      this.setState({func:"MARK", y:y, x:x})

    }
  }
  unprepareMark = (playingState) => {
    if(playingState !== LOST){
      this.setState({func:" ", y:-1, x:-1})

    }
  }
  prepareUnMark = (playingState,element, y, x) => {
    if(playingState !== LOST){
      this.refs[element].focus();
      this.setState({func:"UNMARK", y, x})

    }
  }
  activateCell = (playingState, y, x) => {
    if(playingState !== LOST){
      store.dispatch(activateCell(y,x));
    }
  }
  triggerMarkUnmark = (playingState, e, func, y, x) => {
    if(e.keyCode===32){
      if(playingState !== LOST){
        if (func === "MARK"){
          this.setState({func:"UNMARK"})
          this.markBomb(playingState,e, y,x);
        }
        if (func === "UNMARK"){
          this.setState({func:"MARK"})
          this.unmarkBomb(playingState,e, y,x);
        }
      }
    }
  }
  mensajeEstado(estado){
    switch(this.state.playingState){
      case INIT: return ("sin iniciar");
      case PLAYING:return ("Jugando");
      case WIN:return ("Gano");
      case LOST:return ("perdio");
    }
  }
}
export default Scene;