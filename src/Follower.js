import React from 'react';

class Follower extends React.Component{

    render() {
        const { follower } = this.props;
        return (  
          <a href={follower.html_url}>{follower.login}</a>
        );
    }
}

export default Follower;