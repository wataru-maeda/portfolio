import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faLayerGroup,
  faMobileAlt,
  faBookReader,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// TODO: add icons here...
export const loadFontIcons = () =>
  library.add(
    faBars,
    faLayerGroup,
    faMobileAlt,
    faBookReader,
    faLinkedinIn,
    faGithub,
    faFacebookF,
    faTwitter,
  )

const FontIcon = ({ icon, className, style }) => (
  <FontAwesomeIcon icon={icon} className={className} style={style} />
)

FontIcon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
}

FontIcon.defaultProps = {
  icon: '',
  className: '',
  style: {},
}

export default FontIcon
