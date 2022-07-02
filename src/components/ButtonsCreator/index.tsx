import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectFormButtons, setFormButtons, IButton } from "../../stores/forms/formsSlice";

import styles from "./index.module.scss";
import ButtonItem from "./components/ButtonItem";

const ButtonsCreator = () => {
  const dispatch = useAppDispatch();
  const buttons = useAppSelector(selectFormButtons);
  const [buttonLabel, setButtonLabel] = useState("");
  const [buttonColor, setButtonColor] = useState("");

  const handleCreate = useCallback(() => {
    dispatch(setFormButtons([
      ...buttons,
      {
        label: buttonLabel,
        color: buttonColor
      }
    ]))
    setButtonLabel("");
    setButtonColor("");
  }, [buttonColor, buttonLabel, buttons, dispatch]);

  return (
    <div className={styles.buttonCreator}>
      <div className={styles.items}>
        {buttons.map((item: IButton, index) => (
          <ButtonItem key={index} {...item} />
        ))}
      </div>

      <div className={styles.form}>
        <input
          className={styles.label}
          type="text"
          value={buttonLabel}
          placeholder="Add new button label"
          onChange={ev => setButtonLabel(ev.target.value)}
        />
        <input
          className={styles.color}
          type="color"
          value={buttonColor}
          onChange={ev => setButtonColor(ev.target.value)}
        />
        <button onClick={handleCreate} className={styles.button}>Add</button>
      </div>
    </div>
  )


};

export default ButtonsCreator;
