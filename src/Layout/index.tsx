import Footer from '@components/ui/Footer/Footer';
import Header from '@components/ui/Header/Header';
import React from 'react'
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<div>
			<Header/>
			<Outlet />
			<Footer/>
		</div>
	)
}

export default Layout