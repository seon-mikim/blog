import NavLink from '@components/ui/NavLink/NavLink'
import React from 'react'

const NavBar = () => {
	return (
		<ul>
			<NavLink destination='/' linkText='Home'/>
			<NavLink destination='/posts' linkText='Post List'/>
			<NavLink destination='/posts/:id' linkText='Post Detail'/>
			<NavLink destination='/posts/new' linkText='Post New'/>
			<NavLink destination='/posts/edit/:id' linkText='Post Edit'/>
			<NavLink destination='/profile' linkText='Profile'/>
		</ul>
	)
}

export default NavBar