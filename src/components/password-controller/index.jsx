import React, { useState } from "react";
import classes from "./password-controller.module.css";

import control from "../../assets/icons/control.svg";
import Switch from "../switch";

const PasswordController = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={classes["password-controller-wrapper"]}>
      <button onClick={handleShow} className={classes["control-button"]}>
        More Controls
        <img
          src={control}
          alt="Control Icon"
          className={classes["control-icon"]}
        />
      </button>

      <div
        style={{ display: show ? "flex" : "none" }}
        className={classes["controller-wrapper"]}
      >
        <div className={classes["length-control"]}>
          <p className={classes["length-text"]}>Length</p>
          <div className={classes["length-slider-wrapper"]}>
            <input
              type="range"
              min={"1"}
              max={"64"}
              className={classes["length-slider"]}
            />
            <p className={classes["length-count"]}>12</p>
          </div>
        </div>

        <Switch
          label="Uppercase Letters"
          onChange={(v) => {
            console.log(v);
          }}
        />
        <Switch label="Lowercase Letters" value={true} onChange={() => {}} />
        <Switch label="Numbers" onChange={() => {}} />
        <Switch label="Symbols" onChange={() => {}} />
      </div>
    </div>
  );
};

export default PasswordController;
