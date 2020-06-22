import React from 'react'
import FontIcon from 'components/FontIcon'
import { styler, colors } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    background: colors.lightGray,
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
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
  },
  itemIcon: {
    fontSize: 40,
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  itemDesc: {
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },
})

const items = [
  {
    title: 'Keen to UI/UX',
    icon: 'layer-group',
    desc:
      'Details on design, Keen to performance. Important thing is that the users percept the information without stress.',
  },
  {
    title: 'Mobile & Web development',
    icon: 'mobile-alt',
    desc:
      'Created 10 iOS apps, 1 android app, 2 react native apps, 6 react web apps for clients from scratch.',
  },
  {
    title: 'Share knowledge & Learn from others',
    icon: 'book-reader',
    desc:
      'Life is all about Learning. Learned from professionals around us. Love to share knowledge/skills to others.',
  },
]

const Passion = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Passions</h2>
      <aside className={styles.subtitle}>Build Great Service in Team</aside>
      <div className={styles.container}>
        {items.map(x => (
          <div className={styles.itemContainer}>
            <FontIcon icon={x.icon} className={styles.itemIcon} />
            <h3 className={styles.itemTitle}>{x.title}</h3>
            <aside className={styles.itemDesc}>{x.desc}</aside>
          </div>
        ))}
      </div>
    </div>
  )
}

Passion.propTypes = {}

Passion.defaultProps = {}

export default Passion
