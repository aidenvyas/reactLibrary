import React, { Component } from "react";
import "./App.css";
import Books from "./components/books";
import { Provider } from "react-redux";
import store from './store/store'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider  store={store}>
          <Books />
        </Provider>
      </div>
    );
  }
}

export default App;
