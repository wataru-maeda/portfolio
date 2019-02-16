import * as types from '../types'
import store from '../store'
import { LANG_EN, LANG_JP } from '../../utils/const'

// MARK - Getter

export const getCurrentLanguage = () => {
  const state = store.getState()
  return state.lang.now
};

// MARK - Setter

export const switchLanguage = () => {
  const lang = getCurrentLanguage()
  store.dispatch(storeCurrentLanguage(
    lang === LANG_EN ? LANG_JP: LANG_EN
  ))
};

// MARK - Actions

const storeCurrentLanguage = lang => {
  return dispatch => {
    dispatch({
      type: types.LANG_CURRENT,
      payload: lang,
    })
  }
}