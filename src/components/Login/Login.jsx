import React from "react";
import { Field, reduxForm } from "redux-form";
import FormFiled from "../Form/FormFiled";
import s from "./login.module.css";

const required = (value) => (value ? undefined : "Required!");

const minValue = (min) => (value) =>
  min > value.length ? "Must be minimum 8 symbols" : undefined;

const minValue8 = minValue(8);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Email"}
        name={"email"}
        type={"email"}
        component={FormFiled}
        label={"Email"}
        validate={required}
        className={s.loginInput}
      />
      <Field
        type={"password"}
        component={FormFiled}
        label={"Password"}
        name={"pass"}
        validate={[required, minValue8]}
      />
      <Field name={"checkbox"} type={"checkbox"} component={"input"} /> Remember me
      <div>
        <button disabled={props.submitting}>Submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.authorithation(formData.email, formData.pass, formData.checkbox);
  };

  return (
    <div className={s.loginPage}>
      <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Login;
