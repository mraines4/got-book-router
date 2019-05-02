import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Books from './Books';
import Axios from 'axios';
import Book from './Book';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      master: []
    }
  }

  async componentDidMount() {
    const response = await Axios.get('https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/books');
    // console.log(response.data);
    this.setState({
      master: response.data
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>OH HAY, U LIKE GAME OF THRONES?</h1>
          <Link to="/" >HOME</Link>
          <Link to="/books" >BOOKS</Link>
          <Switch>
            <Route path="/books" render={(props) => (
              <Books {...props} booksArray={this.state.master} />
            )} />
          </Switch>
          <Route path="/books/:book" render={(props) => (
              <Book {...props} booksArray={this.state.master} />
            )} />
        </header>
      </div>
    );
  }
}

export default App;
