import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({ contacts, onDeliteContact }) => {
    return (
    <div>
        <ul>
           {contacts.map(({ name, number, id })=>{
               return (
                   <ContactItem key={id}
                        id={id}
                        name={name}
                        tel={number}
                        onDeliteContact={onDeliteContact} />
                )
             })
           }     
       </ul>
    </div>
    )
};