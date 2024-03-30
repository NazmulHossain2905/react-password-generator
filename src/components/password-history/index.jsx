import React, { useState } from "react";
import classes from "./password-history.module.css";
import copy from "../../assets/icons/copy.svg";
import check from "../../assets/icons/check.svg";

const PasswordHistory = ({ passwordHistory, setPasswordHistory }) => {
  const [copied, setCopied] = useState(false);
  const [pass, setPass] = useState("");

  const copyPassword = (text) => {
    setPass(text);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch((e) => {
        console.log("Password Copy Error: " + e.message);
        setCopied(false);
      })
      .finally(() => {
        console.log("I am finally");
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
  };

  return (
    <div className={classes["password-history-container"]}>
      <h3 className={classes["heading-text"]}>Password History</h3>

      {passwordHistory?.length ? (
        <div className={classes["password-history-wrapper"]}>
          {passwordHistory?.map((password) => (
            <div
              key={password}
              onClick={() => copyPassword(password)}
              className={classes["password-history"]}
            >
              <p className={classes["password-text"]}>
                {password?.length > 29
                  ? password.slice(0, 29) + "..."
                  : password}
              </p>
              {copied && pass === password ? (
                <img
                  src={check}
                  alt="Copied-Icon"
                  className={classes["copied-icon"]}
                />
              ) : (
                <img
                  src={copy}
                  alt="Copy-Icon"
                  className={classes["copy-icon"]}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className={classes["empty-history"]}>No History</p>
      )}

      {passwordHistory?.length && (
        <p
          className={classes["clear-history"]}
          onClick={() => setPasswordHistory([])}
        >
          Clear History
        </p>
      )}
    </div>
  );
};

export default PasswordHistory;
