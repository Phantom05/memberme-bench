import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/news">News</Link>
  </div>
);

export default Header;
