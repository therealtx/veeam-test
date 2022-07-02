import { Fragment } from "react";
import { TextArea, Input, CheckBox, Radio, DateInput } from "../Forms"

import styles from "./index.module.scss";
import { useAppSelector } from "../../hooks/hooks";
import { IButton, selectFormButtons, selectFormItems, selectFormTitle } from "../../stores/forms/formsSlice";
import ButtonItem from "../ButtonsCreator/components/ButtonItem";

interface IFormItem {
  label: string;
  type: string;
  values: [] | null
}

enum allowedTypes {
  text = "text",
  number = "number",
  textarea = "textarea",
  date = "date",
  radio = "radio",
  checkbox = "checkbox",
}

const allowedTypesArray = Object.keys(allowedTypes);

const FormGeneratedResult = () => {
  const items = useAppSelector(selectFormItems);
  const title = useAppSelector(selectFormTitle)
  const buttons = useAppSelector(selectFormButtons)

  const getFormItem = (item: IFormItem) => {
    const { type, ...formProps } = item;
    if (!allowedTypesArray.includes(type)) return null;

    switch (item.type) {
      case allowedTypes.text:
      case allowedTypes.number:
        return <Input type={type} {...formProps} />;
      case allowedTypes.date:
        return <DateInput type={type} {...formProps} />;
      case allowedTypes.textarea:
        return <TextArea {...formProps} />;
      case allowedTypes.checkbox:
        return <CheckBox {...formProps} />;
      case allowedTypes.radio:
        return <Radio {...formProps} />;
    }

    return null;
  };

  return (
    <div className={styles.FormGeneratedResult}>
      {items.length ? (
        <>
          <h1>{title}</h1>
          <div className={styles.items}>
            {items.map((item: any, index: number) => (
              <Fragment key={index}>
                {getFormItem(item)}
              </Fragment>
            ))}
          </div>
          <div className={styles.buttons}>
            {buttons.map((item: IButton, index) => (
              <ButtonItem key={index} {...item} />
            ))}
          </div>
        </>
      ) : <div>Please config first</div>}
    </div>
  )
};

export default FormGeneratedResult;
