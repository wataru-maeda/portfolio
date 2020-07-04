// ------------------------------------
// Constants
// ------------------------------------

const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'

const initialState = {
  isOpen: false,
}

// ------------------------------------
// Actions
// ------------------------------------

const toggleSideMenu = isOpen => dispatch =>
  dispatch({
    type: TOGGLE_SIDE_MENU,
    isOpen,
  })

export const actions = {
  toggleSideMenu,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_SIDE_MENU]: (state, { isOpen }) => ({
    ...state,
    isOpen,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
