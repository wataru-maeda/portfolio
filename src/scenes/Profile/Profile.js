import React from 'react'
import { PropTypes } from 'prop-types'
import { Element } from 'react-scroll'
import Button from 'components/Button'
import { useTranslation } from 'react-i18next'
import { styler, images, breakpoints } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 60px',
    [breakpoints.phone]: {
      padding: '40px 30px',
    },
  },
  profile: {
    width: 400,
    height: 400,
    objectFit: 'cover',
    overflow: 'none',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: 10,
    [breakpoints.phone]: {
      display: 'none',
    },
  },
  profileMobile: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'none',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: 50,
    marginBottom: 40,
    display: 'none',
    [breakpoints.phone]: {
      display: 'block',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 80,
    width: 400,
    [breakpoints.phone]: {
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'left',
    [breakpoints.phone]: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 300,
    marginBottom: 40,
    [breakpoints.phone]: {
      fontSize: 16,
      width: '100%',
      textAlign: 'center',
    },
  },
  desc: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 30,
  },
  snsContainer: {
    display: 'flex',
    [breakpoints.phone]: {
      justifyContent: 'center',
      paddingLeft: 30,
    },
  },
  snsIcon: {
    fontSize: 20,
    marginRight: 30,
  },
})

const Profile = () => {
  const { t } = useTranslation()
  return (
    <Element name="profile">
      <div className={styles.root}>
        <img src={images.profile} className={styles.profile} alt="me" />
        <div className={styles.container}>
          <h3 className={styles.title}>{t('profile.title')}</h3>
          <aside className={styles.subtitle}>{t('profile.subtitle')}</aside>
          <img src={images.profile} className={styles.profileMobile} alt="me" />
          <p className={styles.desc}>{t('profile.description')}</p>
          <div className={styles.snsContainer}>
            <Button
              icon={['fab', 'linkedin-in']}
              iconClassName={styles.snsIcon}
            />
            <Button icon={['fab', 'github']} iconClassName={styles.snsIcon} />
            <Button
              icon={['fab', 'facebook-f']}
              iconClassName={styles.snsIcon}
            />
            <Button icon={['fab', 'twitter']} iconClassName={styles.snsIcon} />
          </div>
        </div>
      </div>
    </Element>
  )
}

Profile.propTypes = {
  style: PropTypes.shape({}),
}

Profile.defaultProps = {
  style: {},
}

export default Profile
