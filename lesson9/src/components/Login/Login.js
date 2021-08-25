import { Button, TextField } from "@material-ui/core";
import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signUpWithFB, loginWithFB } from "../../store/profile/actions";
import { selectProfileError } from "../../store/profile/selectors";
import { useInput } from '../../utils/useInput';


export const Login = ({isSignUp}) => {
    const dispatch = useDispatch();
  const error = useSelector(selectProfileError);

  const {
    value: email,
    handleChange: handleChangeEmail,
    reset: resetEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handleChangePassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    if (isSignUp) {
      dispatch(signUpWithFB(email, password));
    } else {
      dispatch(loginWithFB(email, password));
    }
    resetEmail();
    resetPassword();
  };

    return (
        <div>
            <h2>{isSignUp ? "SIGN UP" : "LOGIN"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                    id="outlined-basic" variant="outlined"
                    label="Type email"
                    name='email'
                    type='email'
                    onChange={handleChangeEmail}
                    value={email}/>
                </div>
                <div>
                <TextField
                    id="outlined-basic" variant="outlined"
                    label="Type password"
                    name='password'
                    onChange={handleChangePassword}
                    value={password}/>
                </div>
                <div>
                    {error && <span>{error}</span>}
                    <Button
                    type="submit" 
                    variant="contained" color="primary">Login</Button>
                </div>
            </form>
            <Link to={`${isSignUp ? "/login" : "/signup"}`}>
        {!isSignUp ? "SIGN UP" : "LOGIN"}
      </Link>
        </div>
    );
}