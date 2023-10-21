import Footer from '@components/ui/Footer/Footer';
import Header from '@components/ui/Header/Header';
import React from 'react'
import { Outlet, useLocation } from 'react-router';

const Layout = () => {
	const pathName = useLocation().pathname
	const isPostPage = pathName === '/posts/new' 
	console.log(pathName)
	return (
    <div>
      <Header />
      <Outlet />
      {!isPostPage&& <Footer />}
    </div>
  );
}

export default Layout