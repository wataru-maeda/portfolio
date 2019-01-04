import React, { Component } from 'react'

export default class Navigation extends Component {
  renderMenu = () => {
    render (
      <div>

      </div>
    )
  }

  renderFooter = () => {
    render (
      <div>
        
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
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}