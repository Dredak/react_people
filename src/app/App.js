import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import fetchUsers from '../services/usersApi';

class App extends Component {
  state = {
    users: [],
    useListLayout: true,
    searchValue: ""  //mora biti ova vrednost u state-u kako bi je kasnije izmenili prilikom unosa vrednosti u input
  };

  onToggleLayoutClick = () => { //mora biti anonimna func kad novi state zavisi od prethodnog stanja state-a
    this.setState((prevState) => {
      localStorage.setItem("isList", !this.state.useListLayout); // <= pitati da li je ovo ispravno fitur za local storage
      return {useListLayout: !prevState.useListLayout };
    });
  };

  loadUsers() {
    fetchUsers()
      .then((myUsers) => {
        this.setState({
          users: myUsers,
          useListLayout: JSON.parse(localStorage.getItem("isList"))     //mora parse ici zato sto je vrednost uneta u stringu(false,true)
        })
      })
  }

  onRefreshClick = () => {  //ovde mora biti arrow func, refreshuje usere
    this.loadUsers()
  }

  onSearchType = (e) => { //event argument koji se kreira prilikom unosenja vrednosi u search, func se pokrece na promenu vrednosti  u searchu
    this.setState({searchValue: e.target.value});
  }

  componentDidMount() {   //funkcija koja se aktivira tik pred renderovanje stranice
    this.loadUsers();
  }

  render() {
    
    const { users, useListLayout, searchValue } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.includes(searchValue);
    })
    
    return (
      <>
        <Header onSwitchClick={this.onToggleLayoutClick} useListLayout={useListLayout} refresh={this.onRefreshClick} />
        <Main searchValueUsers={filteredUsers} useListLayout={useListLayout} search={this.onSearchType} />
        <Footer />
      </>);

  }
}

export default App;
