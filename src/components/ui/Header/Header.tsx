import NavBar from '@components/NavBar/NavBar';
import React from 'react';
import NavLink from '../NavLink/NavLink';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <NavLink destination="/" linkText="My Blog" />
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
