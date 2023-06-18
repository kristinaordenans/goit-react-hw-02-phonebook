import { PropTypes } from "prop-types";


export const ContactItem = ({ name, id, onDeliteContact, tel }) => {
    return (<li>
        <p>{name}: <span>{tel}</span></p>
        <button type = "button" onClick={() => {onDeliteContact(id)}}>delete</button>
   </li>)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    onDeliteContact: PropTypes.func.isRequired,
}