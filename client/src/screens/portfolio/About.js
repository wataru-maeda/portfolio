import React, { Component } from 'react'
import Radium from 'radium'
import { images } from '../../assets' 
import { about } from '../../localization/pf'

class About extends Component {
  renderItem = (src, desc) => (
    <div style={styles.itemContainer}>
      <img src={src} style={styles.itemImage} />
      <p style={styles.desc}>{desc}</p>
    </div>
  )

  render() {
    const { id, lang } = this.props
    return (
      <div style={styles.container} id={id}>
        <h1 style={styles.title}>About</h1>
        <div style={styles.contentsContainer}>
          {this.renderItem(images.kiss, about.kiss[lang])}
          {this.renderItem(images.fast, about.fast[lang])}
          {this.renderItem(images.design, about.design[lang])}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f2f2f2',
    padding: 60,
    alignItems: 'center',
    '@media (max-width: 736px)': {
      flexDirection: 'column',
      padding: '60px 15px',
    },
  },
  contentsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 736px)': {
      flexDirection: 'column',
    },
  },
  itemContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
  },
  itemImage: {
    width: 60,
    height: 60,
    margin: '0 0 16px',
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
  desc: {
    fontSize: '1em',
    color: '#63636e',
  }
}

export default Radium(About)