import React from "react";
import classes from "./password-form.module.css";

import copy from "../../assets/icons/copy.svg";

const PasswordForm = () => {
  return (
    <>
      <div className={classes["password-input-wrapper"]}>
        <input
          type="text"
          className={classes["password-input"]}
          placeholder="Password"
          value={"Pn7$e(4iL2kPn7$e(4iL2k"}
        />

        <img
          src={copy}
          alt="Copy-Icon"
          className={classes["input-copy-icon"]}
        />
      </div>

      <div className={classes["password-strength-meter-container"]}>
        <div className={classes["password-strength-meter"]}></div>
      </div>

      <button className={classes["generate-button"]}>Generate Password</button>
    </>
  );
};

export default PasswordForm;
