import axios from 'axios';
import React from 'react';

import Follower from './Follower';

class Card extends React.Component{
    state = {
        followers: []
      }
    
    componentDidMount() {
        axios.get('https://api.github.com/users/johnfigs/followers')
        .then(res => {
            this.setState({
                ...this.state,
                followers: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div>
                <img src={this.props.user.avatar_url} alt='user profile picture'/>
                <h1>{this.props.user.name}</h1>
                <h2>Username: {this.props.user.login}</h2>
                <p>{this.props.user.location}</p>
                <p>Profile: {this.props.user.url}</p>
                <p> {this.props.user.bio}</p>
                <p>Followers: </p>
                {this.state.followers.map(follower => (
                    <Follower follower={follower}/>
                ))}
            </div>
        );
    }
}

export default Card;