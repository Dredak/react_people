import React from 'react';
import User from './User';
import fetchUsers from '../../services/usersApi';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    setUsers() {
        fetchUsers()
            .then((myUsers) => {
                this.setState({
                    users: myUsers
                })
            })
    }

    componentDidMount() {
        this.setUsers()
    }


    render() {
        const users = this.state.users;
        if (!users.length) {
            return <h1>Loading......</h1>
        }
        return (
            users.map((params, i) => (
                <User name={params.name} surname={params.surname} image={params.image} email={params.email} birthday={params.birthday} key={i} />

            )
            )
        )
    }

}
export default Main