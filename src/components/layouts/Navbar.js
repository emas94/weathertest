import React, { Component } from "react"
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLink from "./SignedOutLink"
import "./Template.scss"

class Navbar extends Component {
  state = {
    isActive: false
  }

  handleNavClick = () => {
    const hamburger = document.querySelector(".hamburger")
    const nav = document.querySelector(".navigation")
    if (!this.state.isActive) {
      hamburger.classList.add("hamburger--active")
      nav.classList.add("navigation--active")
      this.setState({
        isActive: !this.state.isActive
      })
    } else if (this.state.isActive) {
      hamburger.classList.remove("hamburger--active")
      nav.classList.remove("navigation--active")
      this.setState({
        isActive: !this.state.isActive
      })
    }
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <button onClick={this.handleNavClick} className="hamburger">
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>

          <BrowserRouter>
            <div className="navigation">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <Link to="/" activeClassName="active">
                    Home
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link to="/blog">Blog</Link>
                </li>
                <SignedOutLink />
                <SignedInLinks />
              </ul>
            </div>
          </BrowserRouter>
        </nav>
      </>
    )
  }
}

export default Navbar
