class Contacts extends Component {
  render() {
    return (
      <tr>
        <td><a href="#">{contact.name.first} {contact.name.last}</a></td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>Edit Delete</td>
      </tr>
      )
  }
}