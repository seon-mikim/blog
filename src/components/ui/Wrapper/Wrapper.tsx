import React from 'react'
interface WrapperProps {
	onClick?: () => void
	className: string
	children: React.ReactNode
}
const Wrapper = ({className,children, onClick }:WrapperProps) => {
	return (
		<div onClick={onClick } className={ className}>{children }</div>
	)
}

export default Wrapper