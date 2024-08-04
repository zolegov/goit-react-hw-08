import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Button, TextField } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor="name">
          <Field
            name="name"
            type="text"
            as={TextField}
            id="outlined-name"
            label="Name"
            variant="outlined"
          />
        </label>
        <label className={css.label} htmlFor="email">
          <Field
            name="email"
            type="email"
            as={TextField}
            id="outlined-number"
            label="Email"
            variant="outlined"
          />
        </label>
        <label className={css.label} htmlFor="password">
          <Field
            name="password"
            type="password"
            as={TextField}
            id="outlined-password"
            label="Password"
            variant="outlined"
          />
        </label>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Form>
    </Formik>
  );
}
