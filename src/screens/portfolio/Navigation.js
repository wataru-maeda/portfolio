import React, { Component } from 'react'

export default class Navigation extends Component {
  renderMenu = () => {
    return (
      <div />
    )
  }

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
    const { children } = this.props
    return (
      <div style={styles.container}>
        {this.renderMenu()}
        {children}
        {this.renderFooter()}
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#2c2c2c',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 60px',
  },
  snsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 176,
  },
  copyRightText: {
    color: 'white',
    fontSize: 16,
  },
  snsIcon: {
    fontSize: 24,
    color: 'white',
    padding: 0,
  },
}