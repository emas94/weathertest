import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Template from "./layouts/Template"
import Navbar from "./layouts/Navbar"

import "./App.css"
import "./layouts/Template.scss"
import SignIn from "./auth/SignIn"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Template} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App
