import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact, editContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  if (!visibleContacts) {
    return <p>No contacts found</p>;
  }

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={css.listItem}>
            <Contact
              data={contact}
              onEdit={() => dispatch(editContact(contact.id))}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
