import React from 'react'
import NavLink from '../NavLink/NavLink';

const Footer = () => {
	return (
    <footer>
      <NavLink destination="/posts" linkText="Post List" />
      <NavLink destination="/posts/new" linkText="Post New" />
      <NavLink destination="/profile" linkText="Profile" />
    </footer>
  );
}

export default Footer