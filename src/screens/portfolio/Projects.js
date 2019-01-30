import React, { Component } from 'react'
import { images } from '../../assets'
import Button from '../../components/Button'

const ALL = 'All'
const IOS = 'iOS'
const ANDROID = 'Android'
const HYBRID = 'Hybrid'
const WEB = 'Web'

export default class Projects extends Component {
  state = {
    selected: ALL,
  }

  renderApp = app => {
    return (
      <div style={styles.appContainer}>
        <div style={styles.appContentsContainer}>
          <img src={app.logo} style={styles.appImage}/>
          <div style={styles.appTitleContainer}>
            <h1 style={styles.appTitle}>{app.title}</h1>
            <p style={styles.appSubtitle}>{app.subtitle}</p>
          </div>
          <button className="btn btn-light" style={styles.moreButton}>More</button>
        </div>
        <div style={styles.ssContainer}>
          {app.ss.map(imgUrl => (
            <img
              src={imgUrl}
              style={styles.ssImage}
              alt="ScreenShots"
            />
          ))}
        </div>
      </div>
    )
  }

  renderButtons = () => {
    const { selected } = this.state
    const { button, buttonSelected } = styles
    const items = [ALL, IOS, ANDROID, HYBRID, WEB]
    return (
      <div style={styles.buttonContainer}>
        {items.map(item => (
          <Button
            title={item}
            className="btn-light"
            style={selected === item ? buttonSelected : button}
            onClick={() => this.setState({ selected: item })}
          />
        ))}
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
    const { selected } = this.state
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Publishing Apps</h1>
        {this.renderButtons()}
        {(selected === ALL || selected === IOS) && this.renderPlatform(data.ios)}
        {(selected === ALL || selected === ANDROID) && this.renderPlatform(data.android)}
        {(selected === ALL || selected === WEB) && this.renderPlatform(data.web)}
        {(selected === ALL || selected === HYBRID) && this.renderPlatform(data.hybrid)}
      </div>
    )
  }
}

const data = {
  ios: {
    title: 'iOS',
    apps: [
      {
        logo: images.flashcard.icon,
        title: 'Word book to share',
        subtitle: 'share your own cards with your friends',
        ss: images.flashcard.ss.en
      },
      {
        logo: images.stickyMemo.icon,
        title: 'Sticky Memo++',
        subtitle: 'colorful stickies',
        ss: images.stickyMemo.ss.en
      },
    ]
  },
  android: {
    title: 'Android',
    apps: [
      {
        logo: images.greattaractive.icon,
        title: 'Greattractive',
        subtitle: 'matching app for creators',
        ss: images.greattaractive.ss.en
      },
    ]
  },
  web: {
    title: 'Web',
    apps: [
      {
        logo: images.iosClassForBeginners.icon,
        title: 'iOS Class for Beginners',
        subtitle: 'Tutors for iOS development beginners',
        ss: images.iosClassForBeginners.ss.en
      },
    ]
  },
  hybrid: {
    title: 'Hybrid App',
    apps: [
      {
        logo: images.comingSoon.icon,
        title: 'Coming soon...',
        subtitle: 'In progress',
        ss: images.comingSoon.ss.en
      },
    ]
  },
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    padding: 60,
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
    width: '100%',
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  appContentsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ssContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  appTitleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: '0 60px',
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
  },
  ssImage: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 10,
    margin: 10,
    display: 'inline-block',
    maxWidth: '30%',
    width: 'auto',
    height: 'auto',
  },
  button: {
    background: '#f8f9fa',
    color: '#63636e',
    fontSize: 18,
    padding: '8px 16px',
    margin: '0 4px',
  },
  buttonSelected: {
    background: 'black',
    color: 'white',
    fontSize: 18,
    padding: '8px 16px',
    margin: '0 2px',
  },
}