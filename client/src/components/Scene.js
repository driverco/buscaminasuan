import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import store from '../store';
import {markCell, unmarkCell, activateCell, setRemainingSecs, lostGame, playingGame} from '../actions/ActionCreatorScene'
import './Scene.css';
import { LOST,WIN, PLAYING, INIT } from '../reducers/Scene';
import { isNull } from 'util';



class Scene extends Component {
  constructor(props){
    super(props);

    this.state = {
      board : [],
      stateBoard : [],
      bombsMarked: 0,
      playingState: INIT,
      size:0,
      width:0,
      height:0,
      bombs:0,
      secs:0,
      remainingSecs:0,
      x:0,
      y:0,
      func:"",
      gameId:0
    }
    this.drawtable = this.drawtable.bind(this);
    this.markBomb = this.markBomb.bind(this);
    this.unmarkBomb = this.unmarkBomb.bind(this);
    this.prepareMark = this.prepareMark.bind(this);
    this.prepareUnMark = this.prepareUnMark.bind(this);
    this.unprepareMark = this.unprepareMark.bind(this);
    this.activateCell = this.activateCell.bind(this);
    this.triggerMarkUnmark = this.triggerMarkUnmark.bind(this);
    this.mensajeEstado = this.mensajeEstado.bind(this);
    this.calcularColor = this.calcularColor.bind(this);
    this.playingGame = this.playingGame.bind(this);
    this.abandonarPartida = this.abandonarPartida.bind(this);
    
  }
  componentDidMount() {
    if(isNull(store.getState().Scene.board) ){
      this.props.history.push("/selectBoard");
    }


  this.setState({
    board : store.getState().Scene.board,
    stateBoard : store.getState().Scene.stateBoard,
    bombsMarked: store.getState().Scene.bombsMarked,
    playingState: store.getState().Scene.playingState,
    size:store.getState().SelectBoard.size,
    width:store.getState().SelectBoard.width,
    height:store.getState().SelectBoard.height,
    bombs:store.getState().SelectBoard.bombs,
    secs:store.getState().SelectBoard.secs,
    remainingSecs:store.getState().Scene.remainingSecs,
    gameId:store.getState().Scene.gameId
  });
  store.subscribe( () => {
    this.setState({
      board: store.getState().Scene.board,
      stateBoard: store.getState().Scene.stateBoard,
      bombsMarked: store.getState().Scene.bombsMarked,
      playingState: store.getState().Scene.playingState,
      remainingSecs:store.getState().Scene.remainingSecs,
      gameId:store.getState().Scene.gameId
    })
});




    this.unsubscribe = store.subscribe(() => { });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render (){
      
      return(
          <div className="Scene">
            <h3>Nivel : {this.state.size}({this.state.width} , {this.state.height}), id: {this.state.gameId}</h3>
            <div className="clockContainer">
              <div id="clock" className="clock text-center badge badge-info" style={{backgroundColor:this.calcularColor()}} ><i className="material-icons icon">access_time</i>X 
              {this.state.playingState===PLAYING && <Counter onExit={() => this.setState({timerState:false})} />}
              {!(this.state.playingState===PLAYING) && this.state.remainingSecs}
              
              </div>
              <div id="bombsContainer" className="BombsContainer text-center badge badge-danger"><i className="material-icons icon">brightness_7</i>X<div id="bombs" className="Bombs">{this.state.bombs - this.state.bombsMarked}</div></div>
              <div className="text-center badge badge-info">Estado:{this.mensajeEstado(this.state.playingState)}</div>
            </div>
            <table className="mineBoard"><tbody>
              {this.drawtable(this.state.board, this.state.stateBoard)}
            </tbody></table><br/>
            <div className="Exit"><button type="button" className="btn btn-danger buttonExit" onClick={()=>this.abandonarPartida()}>Abandonar Partida</button></div>
          </div>
      )
  }

  drawtable = (matrix, stateMatrix) => {
    if(!isNull(matrix)){

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
  }
  markBomb = (playingState, e, y, x) => {
    if(playingState !== LOST&&playingState !== WIN){
      e.preventDefault();
      store.dispatch(markCell(y,x));
      this.playingGame();
    }
  }
  unmarkBomb = (playingState, e, y, x) => {
    if(playingState !== LOST&&playingState !== WIN){
      e.preventDefault();
      store.dispatch(unmarkCell(y,x));
    }
  }
  prepareMark = (playingState,element, y, x) => {
    if(playingState !== LOST&&playingState !== WIN){
      this.refs[element].focus();
      this.setState({func:"MARK", y:y, x:x})

    }
  }
  unprepareMark = (playingState) => {
    if(playingState !== LOST&&playingState !== WIN){
      this.setState({func:" ", y:-1, x:-1})

    }
  }
  prepareUnMark = (playingState,element, y, x) => {
    if(playingState !== LOST&&playingState !== WIN){
      this.refs[element].focus();
      this.setState({func:"UNMARK", y, x})

    }
  }
  activateCell = (playingState, y, x) => {
    if(playingState !== LOST&&playingState !== WIN){
      store.dispatch(activateCell(y,x));
      this.playingGame();
    }
  }
  triggerMarkUnmark = (playingState, e, func, y, x) => {
    if(e.keyCode===32){
      if(playingState !== LOST&&playingState !== WIN){
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
      default:return("none");
    }
  }
  calcularColor(){
    let color = "#";
    //para verde = 0 128 0, para rojo 128 0 0
    let colorNumber = Math.ceil(128*this.state.remainingSecs/this.state.secs);
    color = color + ("00"+(128 - colorNumber).toString(16)).substr(-2);
    color = color + ("00"+colorNumber.toString(16)).substr(-2);
    color = color + "00";
    return (color);
  }
  playingGame(){
    store.dispatch(playingGame());
  }
  abandonarPartida(){
    store.dispatch(lostGame());
    this.props.history.push("/selectBoard");
  }
}
export default withRouter(Scene);




class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingSecs: 0
    };
  }
    
  componentDidMount() {
    this.setState({
      remainingSecs:store.getState().Scene.remainingSecs
    })
    store.subscribe( () => {
      this.setState({
        remainingSecs:store.getState().Scene.remainingSecs
      })
    });

    this.interval = setInterval(() => {
      console.log(this.state.remainingSecs)
      if (this.state.remainingSecs -1 <= 0 ){
        store.dispatch(lostGame());
      }
      store.dispatch(setRemainingSecs(this.state.remainingSecs - 1));
    }, 1000);
    this.unsubscribe = store.subscribe(() => { });
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
    this.unsubscribe();
  }
  
  render() {
    return (
      <span>
        {this.state.remainingSecs}
      </span>
    )
  }
}
