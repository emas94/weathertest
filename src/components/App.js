import React, { Component } from "react"
import Header from "./Header"
import Blog from "./Blog"
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Blog />
      </>
    )
  }
}

export default App
