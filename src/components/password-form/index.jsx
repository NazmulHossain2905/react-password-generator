import React, { useEffect, useState } from "react";
import classes from "./password-form.module.css";

import { checkPasswordStrength } from "../../utils/checkPasswordStrength";

import copy from "../../assets/icons/copy.svg";
import check from "../../assets/icons/check.svg";

const PasswordForm = ({ password, setPassword, handlePassword }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [strength, setStrength] = useState(0);

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

  const handlePasswordStrength = () => {
    const strength = checkPasswordStrength(password);
    setStrength(strength);
  };

  useEffect(() => {
    handlePasswordStrength();
  }, [password]);

  const meterColor =
    password !== "Select any option" &&
    (strength < 25
      ? "var(--danger-color)"
      : strength < 50
      ? "var(--warning-color)"
      : strength < 75
      ? "var(--info-color)"
      : "var(--success-color)");

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
        <div
          style={{
            width: `${strength}%`,
            backgroundColor: meterColor,
          }}
          className={classes["password-strength-meter"]}
        ></div>
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
