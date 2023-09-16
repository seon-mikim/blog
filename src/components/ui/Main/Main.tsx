import React from 'react';

interface MainProps {
	className: string,
	children: React.ReactNode,
}

const Main = ({ className,children }: MainProps) => {
	return <main className={className }>{children}</main>;
};

export default Main;
