import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { StyleRoot } from 'radium'
import { Provider } from 'react-redux'
import store from './redux/store'

import Router from './router'
import * as serviceWorker from './utils/serviceWorker';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <StyleRoot>
        <Router />
      </StyleRoot>
    </Fragment>
  </Provider>
)

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
