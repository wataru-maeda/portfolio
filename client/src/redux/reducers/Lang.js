import * as types from '../types'
import { LANG_EN } from '../../utils/const'

const initialState = {
  now: LANG_EN,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LANG_CURRENT:
      return {
        ...state,
        status: action.type,
        now: action.payload,
      };
    default:
      return state;
  }
}
