import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

/**
 * Creates the array of meta tags
 * @param description
 * @param keywords
 */
const metaTags = (description, keywords) =>
  [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
  ]

/**
 * Adds the meta content in the head tag
 * @param props
 * @constructor
 */
const DynamicHelmet = props =>
  <Helmet title={props.title} meta={metaTags(props.description, props.keywords)} />

/**
 * Definition of the prop types
 * @type {{title: shim, description: shim, keywords: shim}}
 */
DynamicHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}

/**
 * Definition of the default props
 * @type {{title: string, description: string, keywords: string}}
 */
DynamicHelmet.defaultProps = {
  title: '',
  description: '',
  keywords: '',
}

export default DynamicHelmet
