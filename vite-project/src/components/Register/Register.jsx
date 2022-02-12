import React from "react";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";

class Register extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <label htmlFor="email">Enter email: </label>
        <input id="email" type="email" placeholder="email" />
        <br></br>
        <label htmlFor="password">Enter password</label>
        <input id="password" type="password" placeholder="password" />
        <br></br>
        <li className={classes.button}>
          <Link to={"/"}>Register</Link>
        </li>
      </div>
    );
  }
}

export default Register;
