import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.username.user}</p>
          <button onClick={() => this.props.updateUser('KIM')}>update</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer,
  username: state.userReducer
});

// 액션을 dispatch 하는 펑션을 props로 내려받기
/*const mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
})*/

export default connect(mapStateToProps, {updateUser})(App);
