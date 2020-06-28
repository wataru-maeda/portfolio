import React, { useState } from 'react'
import Button from 'components/Button'
import InView from 'components/InView'
import { styler, colors, images } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
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
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 50px',
  },
  appHeaderContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 45px 45px',
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
  },
  appDetailsContainer: {
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
  },
  appMoreButton: {
    padding: '15px 20px',
    background: colors.lightGray,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 300,
  },
  appScreenShotsContainer: {
    display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '0 45px',
  },
  appScreenShot: {
    objectFit: 'cover',
    borderRadius: 10,
    marginRight: 10,
    maxWidth: '32%',
    width: 'auto',
    height: 'auto',
  },
})

const types = [
  { label: 'All', value: 'all' },
  { label: 'iOS', value: 'ios' },
  { label: 'Android', value: 'android' },
  { label: 'Web', value: 'web' },
  { label: 'Hybrid', value: 'hybrid' },
]

const items = [
  {
    name: 'iOS',
    type: 'ios',
    apps: [
      {
        logo: images.flash_card_logo,
        name: 'Word book to share',
        details: 'Share your own cards with your friends',
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
        name: 'Sticky Memo++',
        details: 'Colorful stickies',
        screenShots: [
          images.sticky_memo_ss_en_1,
          images.sticky_memo_ss_en_2,
          images.sticky_memo_ss_en_3,
        ],
      },
    ],
  },
  {
    name: 'Android',
    type: 'android',
    apps: [
      {
        logo: images.greattaractive_logo,
        name: 'Greattractive',
        details: 'Matching app for creators',
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
    name: 'Web',
    type: 'web',
    apps: [
      {
        logo: images.ios_class_for_beginners_logo,
        name: 'iOS Class for Beginners',
        details: 'Tutors for iOS development beginners',
        screenShots: [
          images.ios_class_for_beginners_ss_en_1,
          images.ios_class_for_beginners_ss_en_2,
          images.ios_class_for_beginners_ss_en_3,
        ],
      },
    ],
  },
  {
    name: 'Hybrid Apps',
    type: 'hybrid',
    apps: [
      {
        logo: images.coming_soon,
        name: 'Coming soon...',
        details: 'In progress...',
        screenShots: [
          images.tourism_challenge_ss_jp_1,
          images.tourism_challenge_ss_jp_2,
          images.tourism_challenge_ss_jp_3,
        ],
      },
    ],
  },
]

const App = ({ logo, name, details, screenShots }) => (
  <div className={styles.app}>
    <div className={styles.appHeaderContainer}>
      <div className={styles.appInfoContainer}>
        <img src={logo} className={styles.appLogo} alt={name} />
        <div className={styles.appDetailsContainer}>
          <aside className={styles.appTitle}>{name}</aside>
          <p className={styles.appDesc}>{details}</p>
        </div>
      </div>
      <Button label="More" className={styles.appMoreButton} />
    </div>
    <div className={styles.appScreenShotsContainer}>
      {screenShots.map(x => (
        <img src={x} className={styles.appScreenShot} alt="screenshot" />
      ))}
    </div>
  </div>
)

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

const Section = ({ name, apps, index }) => (
  <InView
    className={styles.section}
    variants={getVariants({
      x: index % 2 === 0 ? 30 : -30,
      delay: 0.3,
    })}
  >
    <h4 className={styles.sectionTitle}>{name}</h4>
    {apps.map(x => (
      <App {...x} />
    ))}
  </InView>
)

const Released = () => {
  const [type, setType] = useState('all')
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Released Apps</h2>
      <aside className={styles.subtitle}>Released Personal Projects</aside>
      <div className={styles.menu}>
        {types.map(x => (
          <Button
            label={x.label}
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
            <Section {...x} index={i} />
          ) : null,
        )}
      </div>
    </div>
  )
}

Released.propTypes = {}

Released.defaultProps = {}

export default Released
