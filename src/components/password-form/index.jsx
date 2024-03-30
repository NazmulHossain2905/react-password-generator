import React, { useState } from "react";
import classes from "./password-form.module.css";

import copy from "../../assets/icons/copy.svg";
import check from "../../assets/icons/check.svg";

const PasswordForm = ({ password, setPassword, handlePassword }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
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

        {isCopied ? (
          <img
            src={check}
            alt="Copied-Icon"
            className={classes["copied-icon"]}
          />
        ) : (
          <img
            src={copy}
            alt="Copy-Icon"
            className={classes["input-copy-icon"]}
            onClick={handleCopyPassword}
          />
        )}
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
