import {START_BOARD} from "../actions/ActionTypesScene";

const initialState = {
  board: null
}

export const reducer = (state = initialState , action )=> {
  if (action.type === START_BOARD ){
    let boardGen = [];
    boardGen = createRandomBoms(createEmptyArrays(action.width, action.height), action.bombs,action.width, action.height);
    return{
         ...state,
         board: boardGen
     }
 }
  return state;
}


function createEmptyArrays  (width, height)  {
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


export default reducer;

  
