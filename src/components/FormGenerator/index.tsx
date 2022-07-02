import { useState, useEffect } from "react";
import style from "./index.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { selectFormItems, selectFormTitle, setItems, setTitle } from "../../stores/forms/formsSlice";
import ButtonsCreator from "../ButtonsCreator";

const FormGenerator = () => {
  const dispatch = useAppDispatch();
  const formTitle = useAppSelector(selectFormTitle);
  const defaultItems = useAppSelector(selectFormItems);

  const [error, setError] = useState("");
  const [value, setValue] = useState(JSON.stringify(defaultItems));
  const [isShowExample, setIsShowExample] = useState(false);

  useEffect(() => {
    try {
      const arr = JSON.parse(value);
      if (!Array.isArray(arr)) {
        setError("Items should be wrapped in array");
        return;
      }

      dispatch(setItems(arr))
      setError("");
    } catch (e) {
      setError("JSON is invalid. Please input valid JSON.");
    }
  }, [dispatch, value]);


  return (
    <div className={style.formGenerator}>
      <div className={style.form}>
        <input
          type="text"
          onChange={ev => dispatch(setTitle(ev.target.value))}
          value={formTitle}
          placeholder="Form Title"
          className={style.formTitle}
        />

        <textarea
          className={style.textarea}
          placeholder="Paste JSON here"
          value={value}
          onChange={ev => setValue(ev.target.value)}
        />
        {error !== "" && value !== "" ? <div className={style.error}>{error}</div> : ""}
      </div>

      <div className={style.buttonsCreator}>
        <ButtonsCreator />
      </div>


      <div className={style.example}>
        <div className={style.header}>
          Example JSON
          <button onClick={() => setIsShowExample(prevValue => !prevValue)}>{isShowExample ? "Hide" : "Show"}</button>
        </div>
        {isShowExample && (
          <pre>{`[{
  "type": "number",
  "name": "testNumber",
  "label": "Number label"
}, {
  "type": "text",
  "name": "testTex",
  "label": "Text label"
}, {
  "type": "textarea",
  "name": "testTextarea",
  "label": "Text area label"
}, {
  "type": "date",
  "name": "testDate",
  "label": "Date input label"
}, {
  "type": "checkbox",
  "name": "testCheckbox",
  "label": "Checkbox label"
}, {
  "type": "radio",
  "label": "Radio label",
  "name": "testRadio",
  "items": [{
    "label": "check 1",
    "value": 1
  },{
    "label": "check 2",
    "value": 2
  },{
    "label": "check 3",
    "value": 3
  }]
}]`}
        </pre>
        )}
      </div>
    </div>
  );
}

export default FormGenerator;
