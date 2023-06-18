import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';


export class App extends Component {

  state = {
      contacts: [],
      filter: '',
  }
  
  formSubmitHandler = (data) => {
    const contact = { ...data };
    contact.id = nanoid();
    this.setState(prevState => ({
      contacts:[contact, ...prevState.contacts]
    }))
  }

  deliteContact = (contactId) => {
    this.setState(prevState => ({
         contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)
       }
    ))
  }

  filtreInputChange = (e) => {
     this.setState({filter: e.currentTarget.value})
  }

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeToLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizeToLowerCase))
} 
  

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = this.filterContacts();
    const contactsLength = contacts.length;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} contacts={contacts} />
        <h1>Contacts</h1>
        {contactsLength !== 0 && <Filter value={filter} filterInputChange={this.filtreInputChange} />}
        <ContactList contacts={filtredContacts}
          onDeliteContact={this.deliteContact} /> 
    </div>
  );}
};
