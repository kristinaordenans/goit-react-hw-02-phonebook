import { Component } from "react";
import { PropTypes } from "prop-types";

export class Form extends Component {

    state = {
        nmae: '',
        number: ''
    }

    handleInputChange = (e) => {
      const { name, value } = e.currentTarget;
      this.setState({
        [name]: value
      })
    }
    
    handlrAddToContactList = (e) => {
        const { onSubmit, contacts } = this.props;
        const includesName = contacts.find(({ name }) => name === this.state.name);
        const includesNumber = contacts.find(({ number }) => number === this.state.number);
        e.preventDefault();

        if(includesName) {
            alert(`'${this.state.name}'is alredy in contacts`)
        } else if(includesNumber) {
            alert(`'${this.state.number}'is alredy in contacts`)
        } else {
            onSubmit(this.state);
            this.setState({ name: '', number: '' })
        }

        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
    render() {
        const { name, number } = this.state;
        return (<form onSubmit={this.handlrAddToContactList}>
          <label>Name</label>
          <input type="text"
                 value={name}
                 onChange={this.handleInputChange}
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
        />
          <label>Phone</label>
          <input type="tel"
                 value={number}
                 onChange={this.handleInputChange}
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required />
          <button type="submit">Add contact</button>
        </form>)}
}

Form.propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })).isRequired,
        onSubmit: PropTypes.func.isRequired, 
    }