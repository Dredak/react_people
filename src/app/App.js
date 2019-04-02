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

  onToggleLayoutClick = () => { //mora biti anonimna func kad novi state zavisi od prethodnog stanja state-a
    this.setState((prevState) => {
      return { useListLayout: !prevState.useListLayout };
    });
  };

  loadUsers() {
    fetchUsers()
      .then((myUsers) => {
        this.setState({
          users: myUsers
        })
      })
  }

  onRefreshClick = () => {  //ovde mora biti anfn func, refreshuje usere
    this.loadUsers()
  }

  componentDidMount() {   //funkcija koja se aktivira tik pred renderovanje stranice
    this.loadUsers()
  }

  render() {
    const { users, useListLayout } = this.state;

    return (
      <>
        <Header onSwitchClick={this.onToggleLayoutClick} useListLayout={useListLayout} refresh={this.onRefreshClick} />
        <Main users={users} useListLayout={useListLayout} />
        <Footer />
      </>);

  }
}

export default App;
