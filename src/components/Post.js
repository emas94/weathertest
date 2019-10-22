import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PostDetails from "../components/Posts/PostDetails"
import "./App.css"

class Post extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/post:id" exact component={PostDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Post
