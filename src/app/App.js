import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import fetchUsers from '../services/usersApi';

class App extends Component {
  state = {
    users: [],
    useListLayout: true
  };

  onToggleLayoutClick = () => {
    this.setState((state) => {
      return { useListLayout: !state.useListLayout };
    });
  };

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
    const { users, useListLayout } = this.state;

    return (
      <>
        <Header onSwitchClick={this.onToggleLayoutClick} useListLayout={useListLayout} />
        <Main users={users} useListLayout={useListLayout} />
        <Footer />
      </>);

  }
}

export default App;
