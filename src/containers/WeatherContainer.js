import React, { Component } from 'react'
import './WeatherContainer.css'

export default class WeatherContainer extends Component {

  render() {
    return (
      <div className="weatherContainer">
        {this.props.children}
      </div>
    )
  }
}
