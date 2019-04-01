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
            users.map((user, i) => (
                useListLayout
                    ? <User name={user.name}
                        surname={user.surname}
                        image={user.image}
                        email={user.email}
                        birthday={user.birthday}
                        key={i} />
                    : <UserCard name={user.name}
                        image={user.image}
                        email={user.email}
                        birthday={user.birthday}
                        key={i} />
            ))
        )
    }

}
export default Main