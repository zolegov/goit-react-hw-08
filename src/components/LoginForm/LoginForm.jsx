import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Button, TextField } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
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
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
