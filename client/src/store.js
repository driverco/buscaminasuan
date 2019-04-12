import { createStore, compose } from 'redux';
import MainReducer from './reducers/MainReducer';
//export default createStore(MainReducer);

export default compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)
//const store = createStore(MainReducer, window.STATE_FROM_SERVER);
