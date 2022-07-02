import { useId } from "react";
import c from "classnames";

const DateInput = (props: any) => {
  const elementId = `form-item-${useId()}`;

  const { label, ...rest } = props;
  const { className, ...inputProps } = rest;

  return (
    <div className="form-group">
      <label htmlFor={elementId}>{label}</label>
      <input
        id={elementId}
        {...inputProps}
        className={c("form-control", className)}
      />
    </div>
  )
};

export default DateInput;
