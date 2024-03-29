import React from "react";
import classes from "./password-generator.module.css";

import PasswordForm from "../password-form";
import PasswordController from "../password-controller";
import PasswordHistory from "../password-history";

const RandomPasswordGenerator = () => {
  return (
    <div className={`${classes["password-generator"]} container`}>
      <h1 className={classes["head-title"]}>Password Generator</h1>

      <div className={classes["content-wrapper"]}>
        <div className={classes["generate-password-container"]}>
          <PasswordForm />

          <PasswordController />
        </div>
        <PasswordHistory />
      </div>
    </div>
  );
};

export default RandomPasswordGenerator;
