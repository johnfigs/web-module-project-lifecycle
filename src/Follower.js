import React from 'react';

class Follower extends React.Component{

    render() {
        const { follower } = this.props;
        return (  
          <a href={follower.url}>{follower.login}</a>

        );
    }
}

export default Follower;