import React from 'react'

import DynamicHelmet from '../components/DynamicHelmet'
import { LOGOS, LOGO_SIZE } from '../utils/config'

import personal from '../images/personal.jpg'

/**
 * Creates the content displaying all the logos
 * @param logos
 * @param size
 * @returns {Array}
 */
const logoDivs = (logos, size) => {
  const res = []
  logos.forEach((value, key) => {
    res.push(<div key={key} className="column column-img"><img src={value} alt={key} width={size} height={size} /></div>)
  })
  return res
}

/**
 * Triggered on the index route
 */
export default () => (
  <div>
    <DynamicHelmet
      title="Home - Maxence Grosjean"
      description="About Me - Maxence Grosjean"
      keywords="Personal website maxenceng Maxence Grosjean"
    />
    <div className="hero is-dark is-bold">
      <div className="hero-body">
        <h1 className="title">Welcome to my personal website!</h1>
        <div className="columns is-mobile">
          <div className="column hero-column-img">
            <img className="round-img" src={personal} alt="Personal" />
          </div>
          <div className="column">
            <h2 className="subtitle">
              Hello, I am a 22-year-old French student at CPE and I am really interested in web development.<br />
              I like to work on various projects and learn about new technologies in my free time.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h3>Languages I mostly use</h3>
        <div className="columns is-mobile logos">
          {logoDivs(LOGOS, LOGO_SIZE)}
        </div>
        <hr />
      </div>
    </div>
    <div className="section">
      <div className="container">
        If you want to give me advice, do not hesitate to contact me via the button below!
      </div>
    </div>
    <div className="btn-container">
      <form
        style={{ display: 'inline' }}
        action="mailto:maxence.grosjean@cpe.fr"
        method="get"
      >
        <button className="btn">Contact Me</button>
      </form>
    </div>
  </div>
)
