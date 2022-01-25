import React from 'react';
import './index.scss';

type MenuItemProps = {
  src: string;
  className: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ src, className }) =>
  className === 'garland' ? (
    <li className={`menu-item ${className}`} data-color={src} style={{ backgroundColor: `${src}` }}></li>
  ) : (
    <li className={`menu-item ${className}`} data-src={src} style={{ backgroundImage: `url('${src}')` }}></li>
  );

export default MenuItem;
