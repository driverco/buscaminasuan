import {TOGGLE_LEVELS, SET_BOMBS } from "../actions/ActionTypesSelectBoard";


const initialState = {
  showLevels: false,
  size:"none",
  width:0,
  height:0,
  levels: [],
  bombs: 0,
  secs: 0
}

export const reducer = (state = initialState , action )=> {
  if (action.type === TOGGLE_LEVELS ){
      return{
         ...state,
         showLevels: !state.showLevels,
         size: action.size,
         width: action.width,
         height: action.height,
         levels: action.levels

     }
 }
 if (action.type === SET_BOMBS ){
    return{
          ...state,
          showLevels: false,
          bombs: action.bombs,
          secs: action.secs
     }
  }
  return state;
}


export default reducer;

  
