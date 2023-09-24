import React ,{MouseEvent } from 'react'
interface Props extends React.HTMLProps<HTMLButtonElement> {}
interface ButtonProps {
	name: string,
  onClick: (evnet: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
const Button = ({name,onClick ,children}: ButtonProps) => {
	return (
		<button name={name } onClick={onClick}>{children }</button>
	)
}

export default Button