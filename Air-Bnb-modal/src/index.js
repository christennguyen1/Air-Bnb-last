import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
// import store from "./redux/store";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/Reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}> 
    <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
