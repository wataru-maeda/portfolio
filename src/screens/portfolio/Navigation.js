import React, { Component } from 'react'
import Radium from 'radium'
import { images } from '../../assets'
import Button from '../../components/Button'
import SideMenu from '../../components/SideMenu'

class Navigation extends Component {
  state = {
    isOpen: false,
  }

  renderHeader = () => {
    const { isOpen } = this.state
    return (
      <nav className="navbar sticky-top" style={styles.headerContainer}>
        <div style={styles.toggleMenuContainer}>
          <div />
          <Button
            style={styles.toggleMenuButton}
            onClick={() => this.setState({ isOpen: !isOpen })}>
            <img src={images.menu} style={styles.toggleIcon} />
          </Button>
        </div>
      </nav>
    )
  }

  renderMenu = () => (
    <div style={styles.menuButtonContainer}>
      <div style={styles.buttonGroupContainer}>
        <a
          className="page-scroll"
          style={styles.menuButton}
          href="#about"
          onClick={() => {
            this.setState({ isOpen: false })
          }}>About</a>
        <a
          className="page-scroll"
          style={styles.menuButton}
          href="#me"
          onClick={() => {
            this.setState({ isOpen: false })
          }}>Profile</a>
        <a
          className="page-scroll"
          style={styles.menuButton}
          href="#projects"
          onClick={() => {
            this.setState({ isOpen: false })
          }}>Portfolio</a>
        <a
          className="page-scroll"
          style={styles.menuButton}
          href="#inquiry"
          onClick={() => {
            this.setState({ isOpen: false })
          }}>Inquiry</a>
      </div>
      <Button
        style={styles.languageButtonContainer}
        onClick={() => {}}>
        <img src={images.usa} style={styles.languageToggleIcon} />
        <aside className="fa fa-long-arrow-right" style={{ padding: '0 4px', fontSize: 18 }}/>
        <img src={images.jp} style={styles.languageToggleIcon} />
      </Button>
    </div>
  )

  renderFooter = () => {
    return (
      <div style={styles.footerContainer}>
        <aside style={styles.copyRightText}>©️ Wataru 2019</aside>
        <div style={styles.snsContainer}>
          <i className="fa fa-linkedin" style={styles.snsIcon}/>
          <i className="fa fa-github" style={styles.snsIcon}/>
          <i className="fa fa-facebook" style={styles.snsIcon}/>
          <i className="fa fa-twitter" style={styles.snsIcon}/>
        </div>
      </div>
    )
  }

  render() {
    const { isOpen } = this.state
    const { children } = this.props
    return (
      <div id="outer-container">
        <SideMenu
          isOpen={isOpen}
          onStateChange={(newState) => {
            this.setState({ isOpen: newState.isOpen })
          }}>
          {this.renderMenu()}
        </SideMenu>
        <div style={styles.container} id="page-wrap">
          {this.renderHeader()}
          {children}
          {this.renderFooter()}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  toggleMenuContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButtonContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px 10px',
  },
  buttonGroupContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    boxShadow: 'none',
    width: '100%',
    color: 'white',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 60px',
    background: '#2c2c2c',
    '@media (max-width: 736px)': {
      flexDirection: 'column',
    },
  },
  snsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  copyRightText: {
    color: 'white',
    fontSize: 16,
    '@media (max-width: 736px)': {
      margin: '0 0 16px',
    },
  },
  snsIcon: {
    fontSize: 20,
    color: 'white',
    padding: 0,
  },
  toggleIcon: {
    width: 24,
    height: 24,
    padding: 0,
  },
  languageToggleIcon: {
    width: 18,
    height: 18,
    padding: 0,
  },
  toggleMenuButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    border: '1px solid lightGray',
    borderRadius: 3,
    width: 50,
    height: 44, 
    margin: '32px 32px 0 0',
  },
  menuButton: {
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#f8f9fa',
    margin: '10px 0',
  }
}


export default Radium(Navigation)