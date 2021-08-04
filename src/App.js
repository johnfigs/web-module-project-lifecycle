import React from 'react';
import axios from 'axios';
import './App.css';

import Card from './Card';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/johnfigs')
      .then(res => {
        this.setState({
          ...this.state,
          user:res.data
        })
      })
      .catch(err=> {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Git User</h1>
        </header>
        <div className="card">
          <Card user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
