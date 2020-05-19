import React from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'

class WeatherSearch extends React.Component{
  constructor(props) {
    super(props)

    this.state= {
      searchTerm: '',
      data: {},
      searchError: false,
      renderCard: false

    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({searchTerm: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchTerm}&units=metric&appid=57a2f79a5b1a8d0c4373429c09f4b6fa`)
    .then(res => {
      const data = res.data
      this.setState({data: data,
        searchError: false,
        renderCard: true
      })
    })
    .catch(err => console.log(err),
    this.setState({searchError: true,
    renderCard: false}))
}

  render() {
    const {data} = this.state
    return (
      <div className="search-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Insert city name" className=".form-control search-input" name="" onChange={this.onChange}></input>
          <button type="submit" className="btn btn-primary">Search</button>
          {this.state.searchError ? <p className="error">Location not found please try again</p> : null}
        </form>
          {this.state.renderCard ? 
          <WeatherCard 
           title={data.weather[0].main}
           imgSrc={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
           description={data.weather[0].description}
           temperature={data.main.temp}
           windSpeed={data.wind.speed}
           /> : null}
      </div>
    )
  }
}

export default WeatherSearch