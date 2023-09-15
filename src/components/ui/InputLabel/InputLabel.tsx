import { ForwardedRef, ChangeEvent, FocusEvent, forwardRef } from 'react';
import Input from '../Input/Input';

interface InputLabelProps {
  value: string;
  type: string;
  validate: string;
  labelText: string;

  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (
    event: FocusEvent<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => void;
}

const InputLabel = forwardRef(
  (
    {
      value,
      labelText,
      type,
      validate,
      name,
      onChange,
      onBlur,
    }: InputLabelProps,
    ref: ForwardedRef<HTMLInputElement | null>
  ) => {
    console.log(validate);
    return (
      <div>
        <label>
          {labelText}
          <Input
            ref={ref}
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            onBlur={(event) => onBlur(event, ref)}
          />
        </label>
        {validate.length > 1 && <p>{validate}</p>}
      </div>
    );
  }
);

export default InputLabel;
