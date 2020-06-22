import React from 'react'
import { PropTypes } from 'prop-types'
import Button from 'components/Button'
import { styler, images } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 60px',
  },
  profile: {
    width: 400,
    height: 400,
    objectFit: 'cover',
    overflow: 'none',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 80,
    width: 400,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 300,
    marginBottom: 40,
  },
  desc: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 30,
  },
  snsContainer: {
    display: 'flex',
  },
  snsIcon: {
    fontSize: 20,
    marginRight: 30,
  },
})

const Profile = () => {
  return (
    <div className={styles.root}>
      <img src={images.profile} className={styles.profile} alt="me" />
      <div className={styles.container}>
        <h3 className={styles.title}>Profile</h3>
        <aside className={styles.subtitle}>Professional All-rounder</aside>
        <p className={styles.desc}>
          Hello, my name is Wataru who is developing various services for
          customers since 2014. I will be able to help you with all of the
          processes from design to release. I can build iOS app
          (Swift/Objective-C), hybrid app (react native), and web app (reactjs).
          Also, I’m able to develop backend with complete MERN Stack to provide
          RESTful API. Please do not hesitate to contact me if you are looking
          for someone who can help your business grow.
        </p>
        <div className={styles.snsContainer}>
          <Button
            icon={['fab', 'linkedin-in']}
            iconClassName={styles.snsIcon}
          />
          <Button icon={['fab', 'github']} iconClassName={styles.snsIcon} />
          <Button icon={['fab', 'facebook-f']} iconClassName={styles.snsIcon} />
          <Button icon={['fab', 'twitter']} iconClassName={styles.snsIcon} />
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  style: PropTypes.shape({}),
}

Profile.defaultProps = {
  style: {},
}

export default Profile
