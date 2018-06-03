import { createStore } from 'redux'

const reducer = (state = {
  // initial state
  filters: {
    from: null,
    to: null
  },
  trades: [],
  coinlist: []

}, action) => {
  switch (action.type) {
    //  all actions
    case 'GET_COINLIST':
      let newState = Object.assign({}, state)
      let coinlist = action.payload
      let filteredCoinlist = []

      for (let item in coinlist) {
        if (!coinlist[item].delisted) {
          filteredCoinlist.push({
            abbr: item,
            ...coinlist[item]
          })
        }
      }
      newState.coinlist = filteredCoinlist
      return newState

    default:
      return state
  }
}

export default () => {
  return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
