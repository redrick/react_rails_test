import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import QuotesList from './QuotesList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      quotes: []
    }
    this.getQuotes = this.getQuotes.bind(this)
  }
  componentDidMount () {
    this.getQuotes()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getQuotes () {
    this.fetch('api/quotes.json')
      .then(quotes => {
        this.setState({quotes: quotes})
      })
  }
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <PageHeader>Somewhat famous quotes here!</PageHeader>
        </div>
        <QuotesList quotes={this.state.quotes} />
      </div>
    )
  }
}

export default App;
