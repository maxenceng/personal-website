import React from 'react'
import PropTypes from 'prop-types'


import Header from './partials/Header'

import '../styles/main.sass'

/**
 * Base wrapper created by GatsbyJS with the addition of the Header component
 * @param children
 * @constructor
 */
const TemplateWrapper = ({
  children,
}) => (
  <div>
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

/**
 * Definition of the prop types
 * @type {{children: *}}
 */
TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
