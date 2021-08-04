import React from 'react';

class Card extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.user.avatar_url} alt='user profile picture'/>
                <h1>{this.props.user.name}</h1>
                <h2>Username: {this.props.user.login}</h2>
                <p>{this.props.user.location}</p>
                <p>Profile: {this.props.user.url}</p>
                <p>Followers: X</p>
                <p>Following: X</p>
                <p> {this.props.user.bio}</p>
            </div>
        );
    }
}

export default Card;