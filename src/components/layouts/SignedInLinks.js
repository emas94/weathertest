import React from "react"
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom"
import "./Template.scss"

const SignedInLinks = () => {
  return (
    <>
      <li className="navigation__item">
        <NavLink to="/">New post</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          PM
        </NavLink>
      </li>
    </>
  )
}
export default SignedInLinks
