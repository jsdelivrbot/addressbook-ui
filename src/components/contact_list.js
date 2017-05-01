import React from 'react';
import ContactItem from './contact_item';

const ContactList = ({searchResults}) => {
  if (searchResults === null) {
    return <div></div>;
  }

  const contactItems = searchResults.map(contact => {
    return (
      <ContactItem
        contact={contact}
        key={contact.id} />
    );
  });

  if (searchResults.length === 0) {
    return (
      <div className="alert alert-info col-md-8" role="alert">
        No results matched your search
      </div>
    );
  } else {
    return (
      <ul className="list-group col-md-8">
        {contactItems}
      </ul>
    );
  }
}

export default ContactList;
