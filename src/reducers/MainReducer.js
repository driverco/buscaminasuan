import { combineReducers } from 'redux';
import SelectBoard from './SelectBoard';
import Scene from './Scene';
import User from './User';


export default combineReducers({   
    User ,
    SelectBoard ,
    Scene
})