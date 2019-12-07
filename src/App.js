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
import {currentService, locationCitiesCategoriesService, login, usersService} from "./services/feathers";
import {app} from "./services/feathers/conf";


function App() {

  login('s@s.s','333333').then(async (el)=>{
      console.log(localStorage)
      currentService.find()
  })




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
