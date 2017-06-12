import React, { Component } from 'react';

class QuotesList extends Component {
  render () {
    var quotes = this.props.quotes.map(function(quote, index) {
      return (
        <tr key={index}>
          <td>{quote.content}</td>
          <td>{quote.author}</td>
        </tr>
      )
    })
    return (
      <table className='table table-striped table-bordered table-condensed table-hover'>
        <tbody>
          {quotes}
        </tbody>
      </table>
    )
  }
}

export default QuotesList;
