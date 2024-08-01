import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const visibleContacts = useSelector(selectFilteredContacts);

  if (!visibleContacts) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact
            data={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
