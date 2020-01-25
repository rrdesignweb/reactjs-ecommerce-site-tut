import React, { useState } from "react";
import { connect } from "react-redux";
import { SignUpContainer, SignUpButtons, SignUpTitle } from "./sign-up.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart } ) => {
  const [newUserCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = newUserCredentials;

  const handleOnSubmit = async event => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({...newUserCredentials, [name]: value });
  };


  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleOnSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="E-Mail"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <SignUpButtons>
          <CustomButton type="submit"> Sign Up </CustomButton>
        </SignUpButtons>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: newUserCredentials => dispatch(signUpStart(newUserCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
