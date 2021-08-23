import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello',
      monsters: []
    }

  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}));

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {this.state.string}
          </p>
          <CardList> 
          
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
          
          </CardList>
          
        </header>
      </div>
    );
  }
}

export default App;
