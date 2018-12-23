import React, { Component } from 'react'
import { images } from '../../assets' 

export default class Publishments extends Component {
  renderApp = app => {
    return (
      <div style={styles.appContainer}>
        <img src={app.logo} style={styles.appImage}/>
        <div style={styles.appTitleContainer}>
          <h1 style={styles.appTitle}>{app.title}</h1>
          <p style={styles.appSubtitle}>{app.subtitle}</p>
        </div>
        <button className="btn btn-light" style={styles.moreButton}>More</button>
      </div>
    )
  }

  renderPlatform = item => {
    return (
      <div className="shadow-lg p-3 mb-5 bg-white rounded" style={styles.itemContainer}>
        <h1 style={styles.subtitle}>{item.title}</h1>
        {item.apps.map(app => this.renderApp(app))}
      </div>
    )
  }
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Publishing Apps</h1>
        <div style={styles.contentsContainer}>
          {this.renderPlatform(data.ios)}
          {this.renderPlatform(data.android)}
        </div>
        <div style={styles.contentsContainer}>
        {this.renderPlatform(data.ios)}
          {this.renderPlatform(data.android)}
        </div>
      </div>
    )
  }
}

const data = {
  ios: {
    title: 'iOS',
    apps: [
      {
        logo: images.flashcard,
        title: 'Word book to share',
        subtitle: 'share your own cards with your friends',
      },
      {
        logo: images.stickyMemo,
        title: 'Sticky Memo++',
        subtitle: 'colorful stickies',
      },
    ]
  },
  android: {
    title: 'Android',
    apps: [
      {
        logo: images.greattaractive,
        title: 'Greattractive',
        subtitle: 'matching app for creators',
      },
    ]
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    padding: '0 60px',
  },
  contentsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 30,
    margin: '20px 20px 0',
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appTitleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
  subtitle: {
    fontSize: '1.5em',
  },
  appTitle: {
    fontSize: '1em',
  },
  appSubtitle: {
    fontSize: '0.8em',
    color: '#63636e',
  },
  moreButton: {
    margin: 15,
  },
  appImage: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 10,
    margin: 10,
    width: 60,
    height: 60,
  }
}