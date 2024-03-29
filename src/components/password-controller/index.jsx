import React, { useState } from "react";
import classes from "./password-controller.module.css";

import control from "../../assets/icons/control.svg";
import Switch from "../switch";

const PasswordController = ({ controllers, handleController }) => {
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
              value={controllers.length}
              onChange={(e) =>
                handleController("length", Number(e.target.value))
              }
            />
            <p className={classes["length-count"]}>{controllers.length}</p>
          </div>
        </div>

        <Switch
          label="Uppercase Letters"
          value={controllers.upper}
          onChange={(value) => handleController("upper", value)}
        />
        <Switch
          label="Lowercase Letters"
          value={controllers.lower}
          onChange={(value) => handleController("lower", value)}
        />
        <Switch
          label="Numbers"
          value={controllers.number}
          onChange={(value) => handleController("number", value)}
        />
        <Switch
          label="Symbols"
          value={controllers.symbol}
          onChange={(value) => handleController("symbol", value)}
        />
      </div>
    </div>
  );
};

export default PasswordController;
