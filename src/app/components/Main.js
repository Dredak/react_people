import React from 'react';
import User from './User';
import UserCard from './UserCard';


class Main extends React.Component {
    render() {
        const { users, useListLayout } = this.props;

        if (!users.length) {
            return <h1>Loading......</h1>
        }

        return (
            <div className="clearfix container">
                {users.map((user, i) => (
                    useListLayout
                        ? <User user={user}
                            key={i} />
                        : <UserCard user={user}
                            key={i} />
                ))}
            </div>
        )
    }

}
export default Main