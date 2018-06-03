import React, { Component } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import './App.css'

class App extends Component {
  componentDidMount () {
    const dispatch = this.props.dispatch

    request
      .post('https://poloniex.com/public')
      .query({ command: "returnCurrencies" })
      .end((err, res) => {
        dispatch({
          type: "GET_COINLIST",
          payload: JSON.parse(res.text)
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          { JSON.stringify(this.props.coinlist) }
        </p>
      </div>
    )
  }
}

export default connect(
  state => state  // mapStateToProps
)(App)
