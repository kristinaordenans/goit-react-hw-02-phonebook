export const ContactItem = ({ name, id, onDeliteContact, tel }) => {
    return (<li>
        <p>{name}: <span>{tel}</span></p>
        <button type = "button" onClick={() => {onDeliteContact(id)}}>delete</button>
   </li>)
}