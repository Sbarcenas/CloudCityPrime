import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Login, Home} from "./screens";


import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
