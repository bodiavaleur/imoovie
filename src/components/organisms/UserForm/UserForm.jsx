import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { UserFormUI } from "./UserFormUI";
import { Button, Input, TextSmall } from "../../atoms";
import { signUpUser, signInUser } from "../../../firebase/firebaseApi";
import { setUser } from "../../../redux/actionCreators";
import { Redirect } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  switch (true) {
    case !values.email:
      errors.email = "Email is required!";
      break;
    case !values.password:
      errors.password = "Password is required!";
      break;
    case values.password.length < 6:
      errors.password = "Password should contain 6 or more symbols";
      break;
    case !emailRegexp.test(values.email):
      errors.email = "Invalid Email address!";
      break;
    default:
      break;
  }

  return errors;
};

export function UserForm({ signUp, signIn }) {
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  // Show content depending on mode (sign up or sign in)
  const signMode = (sup, sin) => (signUp ? sup : signIn ? sin : null);

  const doneFn = (data) => {
    // If sign up or sign in was successful - use this function
    dispatch(setUser(data.user));
    setIsSuccess(true);
  };

  const submitSignUpFn = (values) => {
    signUpUser(values.email, values.password)
      .then(doneFn)
      .catch((err) => setError(err.message));
  };

  const submitSignInFn = (values) => {
    signInUser(values.email, values.password)
      .then(doneFn)
      .catch((err) => setError(err.message));
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: signMode(submitSignUpFn, submitSignInFn),
  });

  const emailError = formik.errors.email;
  const passwordError = formik.errors.password;

  return (
    <>
      <UserFormUI onSubmit={formik.handleSubmit}>
        <Input
          placeholder='Email'
          type='email'
          name='email'
          error={emailError}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {emailError && <TextSmall error>{emailError}</TextSmall>}
        <Input
          placeholder='Password'
          type='password'
          name='password'
          error={passwordError}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {passwordError && <TextSmall error>{passwordError}</TextSmall>}
        <Button type='submit'>{signMode("Sign Up", "Sign In")}</Button>

        {error && <TextSmall error>{error}</TextSmall>}
      </UserFormUI>

      {isSuccess && <Redirect to='/' />}
    </>
  );
}
