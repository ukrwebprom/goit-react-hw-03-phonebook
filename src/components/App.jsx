import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      /*       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }, */
    ],
    filter: '',
  };
  removeContact = id => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(item => item.id !== id),
      };
    });
  };

  componentDidMount() {
    const storedData = localStorage.getItem('contacts');
    if (storedData)
      this.setState({
        contacts: JSON.parse(storedData),
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleFormSubmit = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(state => {
      return {
        contacts: [...state.contacts, newContact],
      };
    });
  };

  handleFilter = data => {
    this.setState(data);
  };

  render() {
    const contacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleFormSubmit} />

        <SubTitle>Contacts</SubTitle>
        <Filter callback={this.handleFilter} />
        <ContactList data={contacts} removeCallback={this.removeContact} />
      </Container>
    );
  }
}
