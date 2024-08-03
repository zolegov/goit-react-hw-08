import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

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
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label} htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
        <p>zazubik78@gmail.com</p>
      </Form>
    </Formik>
  );
}
