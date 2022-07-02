interface IRadioItem {
  label: string;
  value: any;
}

const Radio = (props: any) => {
  const { items, name, label } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <div>
        {items.map((item: IRadioItem, index: number) => {
          const elementId = `radio-${name}-${index + 1}`;
          return (
            <div key={index}>
              <input name={name} id={elementId} type="radio" {...item} />
              <label htmlFor={elementId}>{label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
