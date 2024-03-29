import React, { useState } from "react";
import classes from "./password-form.module.css";

import copy from "../../assets/icons/copy.svg";

const PasswordForm = ({ password, setPassword, handlePassword }) => {
  // const [isCopied, setIsCopied] = useState(false);

  const handleCopyPassword = async () => {
    await navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className={classes["password-input-wrapper"]}>
        <input
          type="text"
          className={classes["password-input"]}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <img
          src={copy}
          alt="Copy-Icon"
          className={classes["input-copy-icon"]}
          onClick={handleCopyPassword}
        />
      </div>

      <div className={classes["password-strength-meter-container"]}>
        <div className={classes["password-strength-meter"]}></div>
      </div>

      <button onClick={handlePassword} className={classes["generate-button"]}>
        Generate Password
      </button>

      {/* {isCopied && (
        <div className={classes["alert-container"]}>
          <div className={classes["alert"]}>Copied Successfully</div>
        </div>
      )} */}
    </>
  );
};

export default PasswordForm;
