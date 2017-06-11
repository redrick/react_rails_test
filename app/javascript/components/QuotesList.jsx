import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class QuotesList extends Component {
  render () {
    console.log(this.props)
    var quotes = this.props.quotes.map(function(quote, index) {
      return (
        <tr key={index}>
          <td>{quote.content}</td>
          <td>{quote.author}</td>
        </tr>
      )
    })
    return (
      <Table striped bordered condensed hover>
        <tbody>
          {quotes}
        </tbody>
      </Table>
    )
  }
}

export default QuotesList;
