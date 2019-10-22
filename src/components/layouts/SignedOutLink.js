import React from "react"
import { NavLink } from "react-router-dom"
import "./Template.scss"

const SignedOutLinks = () => {
  return (
    <>
      <li className="navigation__item">
        <NavLink to="/signin">Signup</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink to="/">Login</NavLink>
      </li>
    </>
  )
}
export default SignedOutLinks
