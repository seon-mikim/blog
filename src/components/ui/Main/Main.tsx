import React from 'react';

interface MainProps {
  className: string
	children: React.ReactNode
}

const Main = ({ children, className }: MainProps) => {
	return <main className={className }>{children}</main>;
};

export default Main;
