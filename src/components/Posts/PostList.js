import React from "react"
import PostSummary from "./PostSummary"
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import PostDetails from "./PostDetails"

const PostList = () => {
  return (
    <>
      <PostSummary />
      <PostSummary />
      <PostSummary />
      <PostSummary />
    </>
  )
}
export default PostList
