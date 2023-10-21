import React ,{MouseEvent } from 'react'
interface Props extends React.HTMLProps<HTMLButtonElement> {}
interface ButtonProps {
	name: string,
	buttonName: string
	className: string
  onClick?: (evnet: MouseEvent<HTMLButtonElement>) => void;

}
const Button = ({name,buttonName,className, onClick }: ButtonProps) => {
	return (
		<button name={name} className={className } onClick={onClick}>{buttonName }</button>
	)
}

export default Button