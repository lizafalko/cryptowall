import { createStore } from 'redux'

const reducer = (state = {

  // initial state

}, action) => {
  switch (action.type) {
    //  all actions

    default:
      return state
  }
}

export default () => {
  return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
