import React from 'react'
import { Element } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import FontIcon from 'components/FontIcon'
import InView from 'components/InView'
import { styler, colors, breakpoints } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    background: colors.lightGray,
    [breakpoints.phone]: {
      fontSize: 24,
      padding: '40px 15px',
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
    [breakpoints.phone]: {
      fontSize: 24,
      marginBottom: 20,
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
    [breakpoints.phone]: {
      fontSize: 16,
      marginBottom: 50,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    [breakpoints.phone]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    [breakpoints.phone]: {
      width: '100%',
      marginBottom: 30,
    },
  },
  itemIcon: {
    fontSize: 40,
    marginBottom: 15,
    [breakpoints.phone]: {
      fontSize: 30,
    },
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    [breakpoints.phone]: {
      fontSize: 14,
      marginBottom: 15,
    },
  },
  itemDesc: {
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'center',
    [breakpoints.phone]: {
      maxWidth: '70%',
    },
  },
})

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const getVariants = ({ delay }) => ({
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      ...transition,
    },
  },
})

const items = [
  {
    title: 'passion.first.title',
    icon: 'layer-group',
    desc: 'passion.first.description',
  },
  {
    title: 'passion.second.title',
    icon: 'mobile-alt',
    desc: 'passion.second.description',
  },
  {
    title: 'passion.third.title',
    icon: 'book-reader',
    desc: 'passion.third.description',
  },
]

const Passions = () => {
  const { t } = useTranslation()
  return (
    <Element name="passion">
      <div className={styles.root}>
        <h2 className={styles.title}>{t('passion.title')}</h2>
        <aside className={styles.subtitle}>{t('passion.subtitle')}</aside>
        <div className={styles.container}>
          {items.map((x, i) => (
            <InView
              key={i.toString()}
              className={styles.itemContainer}
              variants={getVariants({ delay: 0.3 * i })}
            >
              <FontIcon icon={x.icon} className={styles.itemIcon} />
              <h3 className={styles.itemTitle}>{t(x.title)}</h3>
              <aside className={styles.itemDesc}>{t(x.desc)}</aside>
            </InView>
          ))}
        </div>
      </div>
    </Element>
  )
}

Passions.propTypes = {}
Passions.defaultProps = {}

export default Passions
