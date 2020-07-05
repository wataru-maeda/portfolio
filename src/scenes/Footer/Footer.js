import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import Button from 'components/Button'
import { styler, breakpoints } from 'styles'

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
    [breakpoints.phone]: {
      fontSize: 14,
    },
  },
  snsIcon: {
    fontSize: 20,
    marginRight: 30,
    color: 'white',
  },
})

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.root}>
      <p className={styles.copyRight}>{`${t(
        'footer.copyright',
      )} ${new Date().getFullYear()}`}</p>
      <div className={styles.container}>
        <Button
          icon={['fab', 'linkedin-in']}
          iconClassName={styles.snsIcon}
          onClick={() =>
            window.open('https://www.linkedin.com/in/wtr0716/', '_blank')
          }
        />
        <Button
          icon={['fab', 'github']}
          iconClassName={styles.snsIcon}
          onClick={() =>
            window.open('https://github.com/WataruMaeda', '_blank')
          }
        />
        <Button
          icon={['fab', 'facebook-f']}
          iconClassName={styles.snsIcon}
          onClick={() =>
            window.open(
              'https://www.facebook.com/profile.php?id=100011319736559',
              '_blank',
            )
          }
        />
        <Button
          icon={['fab', 'twitter']}
          iconClassName={styles.snsIcon}
          onClick={() => window.open('https://twitter.com/wmaeda_ca', '_blank')}
        />
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
