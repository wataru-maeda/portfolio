import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { stack as Elastic } from 'react-burger-menu'
import Button from 'components/Button'
import { styler, rem, images, colors } from 'styles'
import Connector from 'utils/connector'

const styles = styler({
  menuButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  langContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  langText: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 10,
  },
  langButton: {
    width: 24,
    height: 24,
    marginRight: 20,
    borderRadius: 12,
  },
})

const menuStyles = rem({
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    display: 'none',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    margin: 8,
  },
  bmCross: {
    background: 'white',
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 0 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: 'black',
  },
  bmItemList: {
    padding: '0.8em',
  },
  bmItem: {
    outline: 0,
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
})

const menus = [
  { name: 'passion.title', to: 'passion' },
  { name: 'profile.title', to: 'profile' },
  { name: 'work.title', to: 'work' },
  { name: 'skills.title', to: 'skills' },
  { name: 'released.title', to: 'released' },
  { name: 'inquiry.title', to: 'inquiry' },
]

const SideMenu = ({ actions, isOpen }) => {
  const { t } = useTranslation()

  // state
  const [enActive, setEnActive] = useState(true)

  // handler
  const handleChangeActiveLang = lang => {
    i18next.changeLanguage(lang)
    setEnActive(lang === 'en')
  }

  // life cycle
  useEffect(() => {
    setEnActive(i18next.language === 'en')
  }, [i18next.language])

  // rendering
  return (
    <Elastic
      left
      isOpen={isOpen}
      styles={menuStyles}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      onStateChange={newState => {
        actions.toggleSideMenu(newState.isOpen)
      }}
    >
      {menus.map(x => (
        <Link key={x.name} to={x.to} smooth>
          <Button
            label={t(x.name)}
            className={styles.menuButton}
            onClick={() => actions.toggleSideMenu(false)}
          />
        </Link>
      ))}
      <div className={styles.langContainer}>
        <aside className={styles.langText}>{t('menu.language')}</aside>
        <Button
          image={images.lang_jp}
          className={styles.langButton}
          style={{ opacity: enActive ? 0.4 : 1 }}
          onClick={() => handleChangeActiveLang('jp')}
        />
        <Button
          image={images.lang_en}
          className={styles.langButton}
          style={{ opacity: enActive ? 1 : 0.4 }}
          onClick={() => handleChangeActiveLang('en')}
        />
      </div>
    </Elastic>
  )
}

SideMenu.propTypes = {
  style: PropTypes.shape({}),
}

SideMenu.defaultProps = {
  style: {},
}

export default props => (
  <Connector>
    {({ actions, state: { app } }) => (
      <SideMenu actions={actions.app} isOpen={app.isOpen} {...props} />
    )}
  </Connector>
)
