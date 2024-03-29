import React, { useEffect, useState } from "react";
import classes from "./switch.module.css";

const Switch = ({ value, label, onChange }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange(!isOn);
  };

  useEffect(() => {
    setIsOn(value);
  }, [value]);

  return (
    <div className={classes["char-control-switch"]}>
      {label && <p className={classes["switch-label"]}>{label}</p>}

      <div
        className={`${classes["custom-switch"]} ${
          isOn ? classes["on"] : classes["off"]
        }`}
        onClick={toggleSwitch}
      >
        <div className={classes["switch-handle"]}></div>
      </div>
    </div>
  );
};

export default Switch;
