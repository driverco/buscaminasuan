import { SET_AUTH_MESSAGE, SET_USER } from "../actions/ActionsTypeUser";

const initialState = {
    //user:{"username":"driverco","email":"driverco@gmail.com","age":"35","avatar":"456326"},
    user:{},
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
  