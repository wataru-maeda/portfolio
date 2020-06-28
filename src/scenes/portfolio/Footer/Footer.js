import React from 'react'
import { PropTypes } from 'prop-types'
import Button from 'components/Button'
import { styler } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: 'black',
    padding: '20px 30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyRight: {
    fontSize: 16,
    fontWeight: 300,
    color: 'white',
  },
  snsIcon: {
    fontSize: 20,
    marginRight: 30,
    color: 'white',
  },
})

const Footer = () => {
  return (
    <div className={styles.root}>
      <p className={styles.copyRight}>@Wataru Maeda</p>
      <div className={styles.container}>
        <Button icon={['fab', 'linkedin-in']} iconClassName={styles.snsIcon} />
        <Button icon={['fab', 'github']} iconClassName={styles.snsIcon} />
        <Button icon={['fab', 'facebook-f']} iconClassName={styles.snsIcon} />
        <Button icon={['fab', 'twitter']} iconClassName={styles.snsIcon} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  style: PropTypes.shape({}),
}

Footer.defaultProps = {
  style: {},
}

export default Footer
