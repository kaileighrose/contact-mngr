import React, {Component} from 'react';

class Contacts extends Component {

  render() {
    var row = this.props.contact;
    return (
      <tr>
        <td><a href="#">{row.name.first} {row.name.last}</a></td>
        <td>{row.phone}</td>
        <td>{row.email}</td>
        <td>Edit Delete</td>
      </tr>
      )
  }
}

export default Contacts;