import NavLink from '@components/ui/NavLink/NavLink'
import React from 'react'

const NavBar = () => {
	return (
		<>
			<NavLink destination='/posts' linkText='Post List'/>
			<NavLink destination='/posts/new' linkText='Post New'/>
			<NavLink destination='/profile' linkText='Profile'/>
		</>
	)
}

export default NavBar