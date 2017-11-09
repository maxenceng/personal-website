import React from 'react'
import Link from 'gatsby-link'

import { LOCAL_ROUTES, REMOTE_ROUTES } from '../../utils/config'

/**
 * Creates the content displaying all the routes in the navigation bar
 * @param local
 * @param remote
 * @returns {Array}
 */
const routesHeader = (local, remote) => {
  const res = []
  local.forEach((value, key) => {
    res.push(<Link key={key} className="navbar-item" to={value}>{key}</Link>)
  })
  remote.forEach((value, key) => {
    res.push(<a className="navbar-item" key={key} href={value} target="_blank">{key}</a>)
  })
  return res
}

/**
 * Base header to display
 */
export default () => (
  <header>
    <nav className="navbar" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <button
            className="navbar-burger navbar-toggle"
            data-target="navMenu"
            onClick={() => {
              const toggle = document.querySelector('.navbar-toggle')
              const menu = document.querySelector('.navbar-menu')
              toggle.classList.toggle('is-active')
              menu.classList.toggle('is-active')
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          {routesHeader(LOCAL_ROUTES, REMOTE_ROUTES)}
        </div>
      </div>
    </nav>
  </header>
)
