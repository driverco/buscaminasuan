import { SET_AUTH_MESSAGE, SET_USER } from "../actions/ActionsTypeUser";

const initialState = {
    user:null,
    authMessage: ""
};

export const reducer = (state = initialState , action )=> {
    if (action.type === SET_AUTH_MESSAGE ){
        return{
           ...state,
           authMessage:action.authMessage
       }
   }
   if (action.type === SET_USER ){
        return{
            ...state,
            user:action.user
        }
    }
    return state;
}
  
export default reducer;
  