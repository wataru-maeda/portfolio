import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'components/Button'
import InView from 'components/InView'
import { styler, colors, images, breakpoints } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    [breakpoints.phone]: {
      padding: '40px 30px',
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
    [breakpoints.phone]: {
      fontSize: 24,
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
    [breakpoints.phone]: {
      fontSize: 16,
    },
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  menuButton: {
    background: colors.lightGray,
    padding: '20px 25px',
    borderRadius: 5,
    margin: '0 5px',
    fontSize: 16,
    fontWeight: 300,
    [breakpoints.phone]: {
      padding: '15px 20px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxShadow: '6px 3px 20px #0000001A',
    borderRadius: 5,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    margin: '45px 45px 15px',
    [breakpoints.phone]: {
      fontSize: 20,
      margin: '30px 30px 10px',
    },
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 50px',
    [breakpoints.phone]: {
      margin: '0 0 40px',
    },
  },
  appHeaderContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 45px 45px',
    [breakpoints.phone]: {
      margin: '0 30px 30px',
    },
  },
  appInfoContainer: {
    display: 'flex',
  },
  appLogo: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 10,
    objectFit: 'cover',
    overflow: 'hidden',
    [breakpoints.phone]: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 5,
    },
  },
  appDetailsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 16,
  },
  appDesc: {
    fontSize: 16,
    fontWeight: 300,
    [breakpoints.phone]: {
      fontSize: 14,
    },
  },
  appMoreButton: {
    padding: '15px 20px',
    background: colors.lightGray,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 300,
    [breakpoints.phone]: {
      fontSize: 14,
      padding: '10px 15px',
    },
  },
  appScreenShotsContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '0 45px',
    [breakpoints.phone]: {
      padding: '0 30px',
    },
  },
  appScreenShot: {
    objectFit: 'contain',
    borderRadius: 10,
    marginRight: 10,
    maxWidth: '32%',
    width: 'auto',
    height: 'auto',
  },
})

const types = [
  { label: 'released.all.name', value: 'all' },
  { label: 'released.ios.name', value: 'ios' },
  { label: 'released.android.name', value: 'android' },
  { label: 'released.web.name', value: 'web' },
  { label: 'released.hybrid.name', value: 'hybrid' },
]

const items = [
  {
    name: 'released.ios.name',
    type: 'ios',
    apps: [
      {
        logo: images.flash_card_logo,
        name: 'released.flash_card.name',
        details: 'released.flash_card.description',
        screenShots: [
          images.flash_card_ss_en_1,
          images.flash_card_ss_en_2,
          images.flash_card_ss_en_3,
          images.flash_card_ss_en_4,
          images.flash_card_ss_en_5,
        ],
      },
      {
        logo: images.sticky_memo_logo,
        name: 'released.sticky_memo.name',
        details: 'released.sticky_memo.description',
        screenShots: [
          images.sticky_memo_ss_en_1,
          images.sticky_memo_ss_en_2,
          images.sticky_memo_ss_en_3,
        ],
      },
    ],
  },
  {
    name: 'released.android.name',
    type: 'android',
    apps: [
      {
        logo: images.greattaractive_logo,
        name: 'released.greattaractive.name',
        details: 'released.greattaractive.description',
        screenShots: [
          images.greattaractive_ss_en_1,
          images.greattaractive_ss_en_2,
          images.greattaractive_ss_en_3,
          images.greattaractive_ss_en_4,
          images.greattaractive_ss_en_5,
        ],
      },
    ],
  },
  {
    name: 'released.web.name',
    type: 'web',
    apps: [
      {
        logo: images.ios_class_for_beginners_logo,
        name: 'released.ios_class_for_beginner.name',
        details: 'released.ios_class_for_beginner.description',
        screenShots: [
          images.ios_class_for_beginners_ss_en_1,
          images.ios_class_for_beginners_ss_en_2,
          images.ios_class_for_beginners_ss_en_3,
        ],
      },
    ],
  },
  {
    name: 'released.hybrid.name',
    type: 'hybrid',
    apps: [
      {
        logo: images.coming_soon,
        name: 'released.tourism_challenge.name',
        details: 'released.tourism_challenge.description',
        screenShots: [
          images.tourism_challenge_ss_jp_1,
          images.tourism_challenge_ss_jp_2,
          images.tourism_challenge_ss_jp_3,
        ],
      },
    ],
  },
]

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const getVariants = ({ x, delay }) => ({
  hidden: { x, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      ...transition,
    },
  },
})

const App = ({ logo, name, details, screenShots }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.app}>
      <div className={styles.appHeaderContainer}>
        <div className={styles.appInfoContainer}>
          <img src={logo} className={styles.appLogo} alt={t(name)} />
          <div className={styles.appDetailsContainer}>
            <aside className={styles.appTitle}>{t(name)}</aside>
            <p className={styles.appDesc}>{t(details)}</p>
          </div>
        </div>
        <Button label="More" className={styles.appMoreButton} />
      </div>
      <div className={styles.appScreenShotsContainer}>
        {screenShots.map(x => (
          <img
            key={x}
            src={x}
            className={styles.appScreenShot}
            alt="screenshot"
          />
        ))}
      </div>
    </div>
  )
}

const Section = ({ name, apps, index }) => {
  const { t } = useTranslation()
  return (
    <InView
      className={styles.section}
      variants={getVariants({
        x: index % 2 === 0 ? 30 : -30,
        delay: 0.3,
      })}
    >
      <h4 className={styles.sectionTitle}>{t(name)}</h4>
      {apps.map(x => (
        <App key={x.name} {...x} />
      ))}
    </InView>
  )
}

const Released = () => {
  const { t } = useTranslation()
  const [type, setType] = useState('all')
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{t('released.title')}</h2>
      <aside className={styles.subtitle}>{t('released.subtitle')}</aside>
      <div className={styles.menu}>
        {types.map(x => (
          <Button
            key={x.label}
            label={t(x.label)}
            className={styles.menuButton}
            style={{
              background: type === x.value ? 'black' : colors.lightGray,
              color: type === x.value ? 'white' : 'black',
            }}
            onClick={() => setType(x.value)}
          />
        ))}
      </div>
      <div className={styles.container}>
        {items.map((x, i) =>
          x.type === type || type === 'all' ? (
            <Section key={x.name} {...x} index={i} />
          ) : null,
        )}
      </div>
    </div>
  )
}

Released.propTypes = {}
Released.defaultProps = {}

export default Released
