import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Basket from '../../components/Basket';
import Search from '../../components/Search';
import useBasket from '../../contexts/Basket';

import './index.scss';

const Header: React.FC = () => {
  const basket = useBasket();
  const path = useLocation().pathname;

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className={path === '/' ? 'active logo nav-link' : 'logo nav-link'}>
          Home
        </NavLink>
        <NavLink to="/toys" className={path === '/toys' ? ' active nav-link' : 'nav-link'}>
          Toys
        </NavLink>
        <NavLink to="/tree" className={path === '/tree' ? ' active nav-link' : 'nav-link'}>
          Tree
        </NavLink>
        <Basket count={basket.favToys.length} />
        <Search />
      </nav>
    </header>
  );
};

export default Header;
