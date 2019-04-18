import React from 'react'
import './spinner.css'

export default ({
  title,
  style = {},
}) => (
  <div style={{ ...styles.container, ...style }}>
    <div style={styles.contentsContainer}>
      <i className="fa fa-spinner spinner" />
      {title && <aside style={styles.title}>{title}</aside>}
    </div>
  </div>
)

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '8px 0px',
    color: '#f58153',
    fontSize: 12,
    textAlign: 'center',
  },
}