import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  destination: string;
  linkText: string;
}

const NavLink = ({ destination, linkText }: NavLinkProps) => {
  return (
    <>
      <Link to={destination}>{linkText}</Link>
    </>
  );
};

export default NavLink;
