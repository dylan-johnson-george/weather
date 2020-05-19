import React from 'react'


class WeatherCard extends React.Component {
  render() {
    return (
        <div className="card weather-card mx-auto" style={{textAlign: "left"}}>
          <img src={this.props.imgSrc} className="card-img-top weather-card-image" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Forecast: {this.props.title}</h5>
          <p className="card-text">Description: {this.props.description}</p>
          <p>Temperature: {this.props.temperature}C</p>
          <p>Wind Speed: {this.props.windSpeed}</p>
          </div>
        </div>
    )
  }
}

export default WeatherCard