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
      <div className="content">
        <h1>My App</h1>
        <Card user={this.state.user} />
      </div>
    );
  }
}

export default App;
