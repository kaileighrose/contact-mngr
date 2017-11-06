//vendor
import React, { Component } from 'react';
//components
import Contacts from './components/Contacts';
//import Show from './components/Show'
//Styles
import './App.css';

class App extends Component {
  render() {
    var rows = [];
    var data = require('./contacts.json');
    for (let i=0; i < data.length; i++) {
            rows.push(<Contacts contact={data[i]} />);
          }
    return (
      <div className="App">
        <h1 className="App-title">Contact-Mngr</h1>
        <a href="#">Add Contact</a>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
          {rows}
        </table>
      </div>
    )
  }
}

export default App;
