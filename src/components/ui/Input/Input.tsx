import { ForwardedRef, forwardRef } from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input = (
  {  ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return <input  {...props} ref={ref} />;
};

export default forwardRef<HTMLInputElement, InputProps>(Input);