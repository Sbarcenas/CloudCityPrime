import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Home } from "./screens";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Guard from "./utils/Guard";

function App() {
  useEffect(() => {});
  return (
    <Router>
      <Provider store={store}>
        <Guard>
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
        </Guard>
      </Provider>
    </Router>
  );
}

export default App;
