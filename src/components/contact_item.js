import React from 'react';
import dateFns from 'date-fns';

const ContactItem = ({contact}) => {
  const formattedBirthday = contact.birthday ?
    dateFns.format(contact.birthday, 'DD MMM YYYY') : 'Not Provided';

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-8">
          <h4 className="list-group-item-heading">{contact.lastName}, {contact.firstName}</h4>
          <p className="list-group-item-text">Phone: {contact.phoneNum}</p>
          <p className="list-group-item-text">Email: {contact.email ? contact.email : 'Not Provided'}</p>
          <p className="list-group-item-text">Birthday: {formattedBirthday}</p>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-primary edit-buttons">Edit</button>
          <button type="button" className="btn btn-danger edit-buttons">Delete</button>
        </div>
      </div>
    </li>
  );
};

export default ContactItem;

/*
*/
