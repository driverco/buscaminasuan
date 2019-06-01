import {START_BOARD, MARK_CELL, UNMARK_CELL, ACTIVATE_CELL, SET_REMAINING_SECS, LOST_GAME} from "../actions/ActionTypesScene";

export const INIT = 0;
export const PLAYING = 1;
export const WIN = 2;
export const LOST = 10;


const initialState = {
  board: null,
  stateBoard: null,
  bombsMarked: 0,
  playingState: INIT,
  remainingSecs:0
}

export const reducer = (state = initialState , action )=> {
  if (action.type === START_BOARD ){
    let boardGen = [];
    let boardGenFilled = [];
    let boardState = [];
    boardGen = createRandomBoms(createEmptyArrays(action.width, action.height,0), action.bombs,action.width, action.height);
    boardGenFilled = FillBoard(boardGen, action.width, action.height);
    boardState = createEmptyArrays(action.width, action.height,"N");
    return{
      ...state,
      board: boardGenFilled, 
      stateBoard: boardState,
      bombsMarked: 0,
      remainingSecs: action.remainingSecs,
      playingState: INIT
    
    }
  }
  if (action.type === MARK_CELL ){
    let boardState =  state.stateBoard;
    boardState[action.y][action.x]= "M";
    let bombsMark = state.bombsMarked + 1;
    return{
      ...state,
      stateBoard: boardState,
      bombsMarked: bombsMark
    }
  }
  if (action.type === UNMARK_CELL ){
    let boardState =  state.stateBoard;
    boardState[action.y][action.x]= "N";
    let bombsMark = state.bombsMarked - 1;
    return{
      ...state,
      stateBoard: boardState,
      bombsMarked: bombsMark
    }
  }
  if (action.type === ACTIVATE_CELL ){
    let boardState =  state.stateBoard;
    let brd =  state.board;
    let playState =state.playingState;
    actCell(brd, boardState,action.y,action.x);
    if( brd[action.y][action.x] === -1){
      playState = LOST;
    }else{
      playState = validateBoard(brd, boardState);
    }
    return{
      ...state,
      stateBoard: boardState,
      board: brd,
      playingState:playState
    }
  }
  if (action.type === SET_REMAINING_SECS ){
    return{
      ...state,
      remainingSecs: action.remainingSecs
    }
  }
  if (action.type === LOST_GAME ){
    return{
      ...state,
      playingState: action.playingState
    }
  }

  return state;
}


function createEmptyArrays  (width, height,value)  {
  let matrix = []
  for (let i = 0; i < height; i++) {
    let children = []
    for (let j = 0; j < width; j++) {
      children.push(value);
    }
    matrix.push(children)
  }
  return matrix
}
function createRandomBoms  (matrix, bombs, width, height) {
  let x, y;
  for (let i = 0; i < bombs; i++) {
      x = Math.floor(Math.random()*width);
      y = Math.floor(Math.random()*height);
      if (matrix[y][x] === 0 ){
          matrix[y][x] = -1;
      }else{
          i--;
      }
  }
  return matrix
}
function FillBoard  (matrix, width, height) {
  let x, y, bombs;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] !== -1 ){
        bombs = 0;
        for (let celda=1;celda <9;celda++){
          switch(celda){
            case 1: y = i-1; x = j-1;break;
            case 2: y = i-1; x = j;break;
            case 3: y = i-1; x = j+1;break;
            case 4: y = i; x = j-1;break;
            case 5: y = i; x = j+1;break;
            case 6: y = i+1; x = j-1;break;
            case 7: y = i+1; x = j;break;
            case 8: y = i+1; x = j+1;break;
            default: break;
          }
          if (x>=0 && x < width && y>=0 && y < height){
            if (matrix[y][x]=== -1 ) {
              bombs++;
            }
          }
        }
        matrix[i][j] = bombs;
      }
    }
  }
  return matrix
}
function actCell (matrix, stateMatrix, yarg, xarg){
  stateMatrix[yarg][xarg] = "A";
  if (matrix[yarg][xarg]=== 0 ){
    let x, y;
    for (let celda=1;celda <9;celda++){
      switch(celda){
        case 1: y = yarg-1; x = xarg-1;break;
        case 2: y = yarg-1; x = xarg;break;
        case 3: y = yarg-1; x = xarg+1;break;
        case 4: y = yarg; x = xarg-1;break;
        case 5: y = yarg; x = xarg+1;break;
        case 6: y = yarg+1; x = xarg-1;break;
        case 7: y = yarg+1; x = xarg;break;
        case 8: y = yarg+1; x = xarg+1;break;
        default: break;
      }
      if (x>=0 && x < matrix[0].length && y>=0 && y < matrix.length){
        if(stateMatrix[y][x]==="N"){
          actCell(matrix,stateMatrix,y,x);
        }
      }
    }
  }
}

function validateBoard (matrix, stateMatrix){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (stateMatrix[i][j] === "A" && matrix[i][j]=== -1) {
        //this.guardarDatos (77181305,LOST,this.initialState.remainingSecs,this.initialState.stateBoard,this.initialState.board);
        
        fetch(`guardarPartida/${77181305},${LOST},${this.initialState.remainingSecs},${this.initialState.stateBoard},${this.initialState.board}`,{
        //  fetch(`guardarPartida/77181305,LOST,this.initialState.remainingSecs,this.initialState.stateBoard,this.initialState.board`,{
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(user => {
      
          });

        //
        return LOST;
      }
      if (stateMatrix[i][j] === "N" && matrix[i][j]>-1){
        return PLAYING;
      }
    }
  }
  //this.guardarDatos (77181305,WIN,this.initialState.remainingSecs,this.initialState.stateBoard,this.initialState.board);

  
  fetch(`guardarPartida/77181305,LOST,this.initialState.remainingSecs,this.initialState.stateBoard,$this.initialState.board`,{
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(user => {

      });


  //
  return WIN;
}

function guardarDatos (iduser,estado,tiempo,dificultad,tipoTablero)
{

    fetch(`guardarPartida/${iduser},${estado},${tiempo},${dificultad},${tipoTablero}`,{
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json())
    .then(user => {

    });

}

export default reducer;

  
