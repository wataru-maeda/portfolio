import React, { Component } from 'react'
import { images } from '../../assets'
import './Home.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={images.logo} className="App-logo" alt="logo" />
          <h5 style={{ fontSize: '2em' }}>React Boilerplate</h5>
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
