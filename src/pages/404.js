import React from 'react'

import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Triggered when the user is on a page that does not exist
 */
export default () => (
  <div>
    <DynamicHelmet
      title="Not Found - Maxence Grosjean"
      description="404 Page Not Found"
      keywords="404 Page Not Found"
    />
    <div className="hero is-warning">
      <div className="hero-body">
        <h1 className="title">404 NOT FOUND</h1>
        <h2 className="subtitle">
          Sorry, this page does not exist!
        </h2>
      </div>
    </div>
  </div>
)

