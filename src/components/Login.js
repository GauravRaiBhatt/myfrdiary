import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./styling/login.css";

import { signUpAPI, loginAPI } from "../redux/actions";

function Login() {
  const [loginActive, setLoginActive] = useState(true);
  const [signUpActive, setSignUpActive] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const toggleLogin = () => {
    setLoginActive(true);
    setSignUpActive(false);
  };
  const toggleSignUp = () => {
    setLoginActive(false);
    setSignUpActive(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      userEmail,
      userPassword,
    };
    resetToDefault();
    loginAPI(dispatch, userData);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = {
      userEmail,
      userName,
      userPassword,
      userConfirmPassword,
    };
    resetToDefault();
    signUpAPI(dispatch, userData);
  };

  const resetToDefault = () => {
    setUserEmail("");
    setUserPassword("");
    setUserConfirmPassword("");
  };

  return (
    <section id="Login__body" className="forms-section">
      {userData && <Redirect to="/home" />}

      <h1 className="section-title">My Financial Records Diary</h1>
      <div className="forms">
        <div className={loginActive ? "form-wrapper is-active" : ""}>
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => toggleLogin()}
          >
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="abc@tgrb.org"
                  autoComplete="username"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="current-password"
                  autoComplete="current-password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="btn-login"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </form>
        </div>
        <div className={signUpActive ? "form-wrapper is-active" : ""}>
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => toggleSignUp()}
          >
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <fieldset>
              <legend>
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-userName">Name</label>
                <input
                  id="signup-userName"
                  type="text"
                  placeholder="Gaurav Rai Bhatt"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="abc@tgrb.org"
                  autoComplete="username"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">
                  Confirm password
                </label>
                <input
                  id="signup-password-confirm"
                  type="password"
                  placeholder="confirm-password"
                  autoComplete="current-password"
                  value={userConfirmPassword}
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="btn-signup"
              onClick={(e) => handleSignUp(e)}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
