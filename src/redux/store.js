import {createStore} from 'redux';
// import thunkMiddleWare from 'redux-thunk';
import Reducers from './reducers/index';

const store = createStore(Reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
// have to apply thunk middleware