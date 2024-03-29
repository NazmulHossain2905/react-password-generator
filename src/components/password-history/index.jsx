import React from "react";
import classes from "./password-history.module.css";
import copy from "../../assets/icons/copy.svg";

const PasswordHistory = () => {
  return (
    <div className={classes["password-history-container"]}>
      <h3 className={classes["heading-text"]}>Password History</h3>

      <div className={classes["password-history-wrapper"]}>
        <div className={classes["password-history"]}>
          <p className={classes["password-text"]}>Pn7$e(4iL2kPn7$e(4iL2k</p>
          <img src={copy} alt="Copy-Icon" className={classes["copy-icon"]} />
        </div>
        <div className={classes["password-history"]}>
          <p className={classes["password-text"]}>Pn7$e(4iL2kPn7$e(4iL2k</p>
          <img src={copy} alt="Copy-Icon" className={classes["copy-icon"]} />
        </div>
        <div className={classes["password-history"]}>
          <p className={classes["password-text"]}>Pn7$e(4iL2kPn7$e(4iL2k</p>
          <img src={copy} alt="Copy-Icon" className={classes["copy-icon"]} />
        </div>
      </div>

      <p className={classes["clear-history"]}>Clear History</p>
    </div>
  );
};

export default PasswordHistory;
