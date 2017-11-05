//vendor
import React, { Component } from 'react';
//components
import Contacts from './components/Contacts';
import Show from './components/Show'
//Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Contact-Mngr</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
          for(var i = 0; i <= this.records.length; i++) {
          <Contacts contact={this.records[i]} />
         }
        </table>
      </div>
    );
  }
}

export default App;



class Show extends Component {
  render() {
    return(

    )
  }
}
