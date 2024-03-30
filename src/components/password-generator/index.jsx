import React, { useEffect, useState } from "react";
import classes from "./password-generator.module.css";

import PasswordForm from "../password-form";
import PasswordController from "../password-controller";
import PasswordHistory from "../password-history";

import { generatePassword } from "../../utils/generatePassword";

const RandomPasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordHistory, setPasswordHistory] = useState([]);
  const [controllers, setControllers] = useState({
    length: 12,
    upper: true,
    lower: true,
    number: true,
    symbol: true,
  });

  const handleController = (key, value) => {
    setControllers({ ...controllers, [key]: value });
  };

  const handleGeneratePassword = () => {
    const { length, upper, lower, number, symbol } = controllers;
    const pass = generatePassword(length, upper, lower, number, symbol);
    setPassword(pass);
    handlePasswordHistory(pass);
  };

  const handlePasswordHistory = (value) => {
    if (
      value === undefined ||
      value === null ||
      value === "Select any option"
    ) {
      return;
    }
    if (passwordHistory.length >= 5) {
      const copyHistory = [...passwordHistory];
      copyHistory.pop();

      // Another
      // copyHistory.unshift(value);
      // setPasswordHistory(copyHistory);

      setPasswordHistory([value, ...copyHistory]);
    } else {
      setPasswordHistory((prev) => [value, ...prev]);
    }
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [controllers]);

  return (
    <div className={`${classes["password-generator"]} container`}>
      <h1 className={classes["head-title"]}>Password Generator</h1>

      <div className={classes["content-wrapper"]}>
        <div className={classes["generate-password-container"]}>
          <PasswordForm
            password={password}
            setPassword={setPassword}
            handlePassword={handleGeneratePassword}
          />

          <PasswordController
            handleController={handleController}
            controllers={controllers}
          />
        </div>
        <PasswordHistory
          passwordHistory={passwordHistory}
          setPasswordHistory={setPasswordHistory}
        />
      </div>
    </div>
  );
};

export default RandomPasswordGenerator;
