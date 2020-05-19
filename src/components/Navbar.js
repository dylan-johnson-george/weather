import React from 'react'
import sunIcon from '../icons/004-sun.png'


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light nav-container">
          <a className="navbar-brand" href="#">
            <img src={sunIcon} width="40" height="40" alt="Sun icon" loading="lazy"/>
          </a>
        </nav>
      </div>
    )
  }
}

export default Navbar