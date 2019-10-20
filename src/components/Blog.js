import React, { Component } from "react"
import "./Blog.css"

class Blog extends Component {
  state = {}
  render() {
    return (
      <div className="blog">
        <div className="blog__post">
          <div className="blog__news"></div>
          <div className="blog__news"></div>
          <div className="blog__news"></div>
          <div className="blog__news"></div>
          <div className="blog__news"></div>
        </div>
      </div>
    )
  }
}

export default Blog
