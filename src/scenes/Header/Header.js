import React from 'react'
import { PropTypes } from 'prop-types'
import Button from 'components/Button'
import Connector from 'utils/connector'
import { styler, colors, breakpoints } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
  },
  menuButton: {
    width: 50,
    height: 50,
    border: `1px solid ${colors.gray}`,
    borderRadius: 10,
    fontSize: 16,
    margin: '30px',
    background: 'white',
    position: 'absolute',
    [breakpoints.phone]: {
      margin: '20px 15px',
    },
  },
})

const Header = ({ actions, isOpen }) => (
  <div className={`sticky-top ${styles.root}`}>
    <Button
      icon="bars"
      className={styles.menuButton}
      onClick={() => actions.toggleSideMenu(!isOpen)}
    />
  </div>
)

Header.propTypes = {
  style: PropTypes.shape({}),
}

Header.defaultProps = {
  style: {},
}

export default props => (
  <Connector>
    {({ actions, state: { app } }) => (
      <Header actions={actions.app} isOpen={app.isOpen} {...props} />
    )}
  </Connector>
)
