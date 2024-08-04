// import React, { useState } from "react";
// import Modal from "react-modal";
// import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
// import { Toaster } from "react-hot-toast";
// import ContactForm from "../ContactForm/ContactForm";
// import { editContact } from "../../redux/contacts/contactsOps";
// import css from "./Contact.module.css";

// Modal.setAppElement("#root");

// const Contact = ({ data, onDelete }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const dispatch = useDispatch();

//   const toggleEdit = () => {
//     setIsEditing((prevState) => !prevState);
//   };

//   const handleEditSubmit = (values) => {
//     dispatch(editContact({ id: data.id, ...values })); // Надіслати дані для редагування на сервер
//     toggleEdit();
//   };

//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     // subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     // <div className={css.contact}>
//     <>
//       <p className={css.contactData}>
//         {data.name}: {data.number}
//       </p>
//       {isEditing ? (
//         <>
//           <ContactForm
//             initialValues={{ name: data.name, number: data.number }}
//             onSubmit={handleEditSubmit}
//             isEditing
//           />
//           <button onClick={openModal}>Delete</button>
//         </>
//       ) : (
//         <>
//           <div className={css.btnGroup}>
//             <Button variant="contained" onClick={toggleEdit}>
//               Edit
//             </Button>
//             {/* <button onClick={toggleEdit}>Edit</button> */}
//             <Button variant="outlined" color="error" onClick={openModal}>
//               Delete
//             </Button>
//           </div>
//           {/* <button onClick={openModal}>Delete</button> */}
//           <div className={css.reactModal__Overlay}>
//             <Modal
//               isOpen={modalIsOpen}
//               onAfterOpen={afterOpenModal}
//               onRequestClose={closeModal}
//               // style={customStyles}
//               contentLabel="Example Modal"
//               className={css.modal}
//             >
//               <p>Do you want delete this contact? </p>
//               <div>
//                 <button onClick={onDelete}>Yes</button>
//                 <button onClick={closeModal}>No</button>
//               </div>
//             </Modal>
//           </div>
//         </>
//       )}
//       <Toaster position="top-center" reverseOrder={true} />
//       {/* </div> */}
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import { editContact } from "../../redux/contacts/contactsOps";
import css from "./Contact.module.css";

Modal.setAppElement("#root");

const Contact = ({ data, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleEditSubmit = (values) => {
    dispatch(editContact({ id: data.id, ...values })); // Надіслати дані для редагування на сервер
    toggleEdit();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <p className={css.contactData}>
        {data.name}: {data.number}
      </p>
      {isEditing ? (
        <>
          <ContactForm
            initialValues={{ name: data.name, number: data.number }}
            onSubmit={handleEditSubmit}
            isEditing
          />
          <Button
            variant="outlined"
            color="error"
            onClick={openModal}
            className={css.contactBtnDelete}
          >
            Delete
          </Button>
        </>
      ) : (
        <div className={css.btnGroup}>
          <Button variant="contained" onClick={toggleEdit}>
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={openModal}
            className={css.contactBtnDelete}
          >
            Delete
          </Button>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Contact"
        className={css.modal}
        overlayClassName={css.ReactModal__Overlay}
      >
        <p>Do you want to delete this contact?</p>
        <div className={css.modalBtn}>
          <Button variant="contained" color="error" onClick={onDelete}>
            Yes
          </Button>
          <Button variant="outlined" onClick={closeModal}>
            No
          </Button>
        </div>
      </Modal>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default Contact;
