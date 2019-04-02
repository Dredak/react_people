import React from 'react';
import User from './User';
import UserCard from './UserCard';
import Search from './Search';
import Loader from './Loader'


class Main extends React.Component {
    render() {
        const { searchValueUsers, useListLayout, search } = this.props;

        if (!searchValueUsers.length) {
            return  (<>
            <Search search={search} />  
             <Loader />
             </>)
        }

        return (
            <>
                <Search search={search} />
                <div className="clearfix container">
                    {searchValueUsers.map((user, i) => (
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