import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {allReducers} from "./redux/reducers";
import {store} from "./redux/store";
import {updateUser} from "./redux/actions";

/*const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === 'changeState') {
    return action.payload.newState
  }
  return 'State';
}*/

/*const productReducer = (state = [], action) => {
  return state;
}*/

/*const userReducer = (state = '', action) => {
  switch(action.type) {
    case 'updateUser':
      return action.payload;
    case 'addUser':
      return 'addUser';
  }
  return state;
}*/

/*const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});*/

/*const store =
  createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

// 1. 초기화
// const store =
  // createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store, store.getState());

/*const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}

const updateUser = {
  type: 'updateUser',
  payload: {
    user: 'Tom'
  }
}*/

// 2. 가입
// store.subscribe(() => console.log(store.getState()));

// 3. 액션 디스패치(publish) > reduce가 실행
// store.dispatch(updateUser);

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));

store.dispatch(updateUser('Jane'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
