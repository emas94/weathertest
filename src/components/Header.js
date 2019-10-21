import React, { Component } from "react"
import Navbar from "./Navbar"

import "./Header.scss"

const key = "38a03d93ba3e4e90330f9abbc73ce3b0"
class Header extends Component {
  state = {
    weather: [],
    city: "",
    error: false
  }

  getWeather = e => {
    console.log(e)
    e.preventDefault()
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${key}`
    fetch(urlAPI)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          throw Error(response.status)
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          weather: [data],
          error: false
        })
      })
      .catch(error => {
        this.setState({
          error: true
        })
        console.log(error)
      })
  }
  handleCityChange = e => {
    console.log("change")
    this.setState({
      city: e.target.value
    })
  }
  // componentDidMount() {
  //   this.getWeather()
  // }
  // // componentWillUnmount() {
  //   clearInterval(this.idI)
  // }
  render() {
    const weathers = this.state.weather.map(weather => (
      <div key={weather.id}>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        {this.state.error ? (
          "Nie znaleziono takiego miasta"
        ) : (
          <div>
            <div>{`Miasto: ${weather.name}`}</div>
            <div>{`Temperatura ${(weather.main.temp - 273.15).toFixed(
              2
            )}°C`}</div>
            <div>{`Temperatura maksymalna ${(
              weather.main.temp_max - 273.15
            ).toFixed(2)}°C`}</div>
          </div>
        )}
      </div>
    ))

    return (
      <div className="home">
        <div className="home__navbar"></div>
        <Navbar />
        <div className="home__name">Przemysław Matkowski</div>
        <div className="home__logo">
          <img src="img/logo.svg" alt="" />
        </div>
        <div className="home__content">
          <h1>Witam w moim Świecie</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="home__rightbar ">
          <div className="home__rightbar__weather">
            <form onSubmit={this.getWeather}>
              <input
                type="text"
                onChange={this.handleCityChange}
                value={this.state.city}
                placeholder="Wpisz maisto"
              />
              <button>Sprawdz pogode</button>
            </form>
            {weathers}
          </div>
        </div>
        {/* <div className="home__bg"></div> */}
        <div className="home__arrow">
          <i className="fas fa-arrow-down"></i>
        </div>
        <div className="home__social">
          <i className="fab fa-facebook-messenger"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    )
  }
}
export default Header
