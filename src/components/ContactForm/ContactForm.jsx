// import { Field, Form, Formik } from "formik";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
// import css from "./ContactForm.module.css";
// import { addContact } from "../../redux/contacts/contactsOps";
// import { Toaster } from "react-hot-toast";

// const ContactForm = ({ initialValues, onSubmit, isEditing }) => {
//   const dispatch = useDispatch();

//   const FeedbackSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(3, "Too Short!")
//       .max(50, "Too Long!")
//       .required("enter your name"),
//     number: Yup.string().min(10, "Too Short!").required("enter 10 numbers"),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={FeedbackSchema}
//       onSubmit={(values, { resetForm }) => {
//         dispatch(addContact(values));
//         resetForm();
//       }}
//     >
//       console.log('initialValues: ', initialValues);
//       {({ errors, touched }) => (
//         <Form className={css.form}>
//           <div>
//             <Field type="text" name="name" placeholder="Name" />
//             {errors.name && touched.name ? <div>{errors.name}</div> : null}
//           </div>

//           <div>
//             <Field type="text" name="number" placeholder="050 11 11 111" />
//             {errors.number && touched.number ? (
//               <div>{errors.number}</div>
//             ) : null}
//           </div>
//           {isEditing ? (
//             <button type="submit">Edit contact</button>
//           ) : (
//             <button type="submit">Add contact</button>
//           )}
//           <Toaster position="top-center" reverseOrder={false} />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ContactForm;

import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/contactsOps";
import { Toaster } from "react-hot-toast";
import { Button, TextField } from "@mui/material";

const ContactForm = ({ initialValues, onSubmit, isEditing }) => {
  const dispatch = useDispatch();

  // Налаштування початкових значень за замовчуванням
  const defaultInitialValues = {
    name: "",
    number: "",
  };

  // Перевірка, чи initialValues передані, або використовувати значення за замовчуванням
  const formInitialValues = initialValues || defaultInitialValues;

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("enter your name"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Має містити лише цифри")
      .min(10, "Занадто коротко!")
      .required("Введіть 10 цифр"),
  });

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={FeedbackSchema}
      onSubmit={(values, { resetForm }) => {
        if (isEditing) {
          onSubmit(values);
        } else {
          dispatch(addContact(values));
        }
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div>
            {/* <Field type="text" name="name" placeholder="Name" /> */}
            <Field
              id="outlined-contact-name"
              label="Name"
              as={TextField}
              variant="outlined"
              type="text"
              name="name"
              className={css.contactInput}
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>

          <div>
            {/* <Field type="text" name="number" placeholder="050 11 11 111" /> */}
            <Field
              id="outlined-contact-phoneNumber"
              label="Number"
              variant="outlined"
              as={TextField}
              type="text"
              name="number"
              className={css.contactInput}
            />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}
          </div>
          <Button variant="contained" type="submit">
            {isEditing ? "Edit contact" : "Add contact"}
          </Button>
          <Toaster position="top-center" reverseOrder={false} />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
