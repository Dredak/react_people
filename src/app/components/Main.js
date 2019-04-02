import React from 'react';
import User from './User';
import UserCard from './UserCard';
import Search from './SearchBar';


class Main extends React.Component {
    render() {
        const { users, useListLayout, search } = this.props;

        if (!users.length) {
            // return <Loader />
        }

        return (
            <>
                <Search search={search} />
                <div className="clearfix container">
                    {users.map((user, i) => (
                        useListLayout
                            ? <User user={user} key={i} />
                            : <UserCard user={user} key={i} />
                    ))}
                </div>
            </>
        )
    }

}
export default Main