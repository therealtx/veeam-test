import React from "react";
import { IButton } from "../../../../stores/forms/formsSlice";

const ButtonItem = React.memo((props: IButton) => (
  <button
    style={{
      background: props.color
    }}
  >
    {props.label}
  </button>
));

export default ButtonItem;
