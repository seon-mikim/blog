import { ForwardedRef, ChangeEvent, FocusEvent, forwardRef } from 'react';
import Input from '../Input/Input';

interface InputLabelProps {
  value: string;
  type: string;
  validate: string;
  labelText: string;
  className: string;

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
      className,
      value,
      labelText,
      type ='text',
      name,
      onChange,
      onBlur,
    }: InputLabelProps,
    ref: ForwardedRef<HTMLInputElement | null>
  ) => {
    return (
      <label className={className}>
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
    );
  }
);

export default InputLabel;
