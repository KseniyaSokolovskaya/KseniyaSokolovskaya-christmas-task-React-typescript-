import React, { useMemo } from 'react';
import useBasket from '../../../../contexts/Basket';

import { Toy } from '../../../../types';

import './index.scss';

const Card: React.FC<Toy> = ({ num, name, count, year, shape, color, size, favorite }) => {
  const basket = useBasket();

  const isActive = useMemo(() => basket.favToys.includes(num), [basket.favToys, num]);

  return (
    <div
      className="card"
      role="presentation"
      onClick={() => {
        basket.toggleFavToy(num);
      }}
    >
      <h3 className="card-title">{name}</h3>
      <div className="wrapper">
        <img src={`/assets/toys/${num}.png`} className="card-image" alt="toy" />
        <div className="card-description">
          <p>Номер: {num}</p>
          <p>Количество: {count}</p>
          <p>Год: {year}</p>
          <p>Форма: {shape}</p>
          <p>Цвет: {color}</p>
          <p>Размер: {size}</p>
          <p>Любимая: {favorite ? 'да' : 'нет'}</p>
        </div>
      </div>
      <div className={isActive ? 'favorite active' : 'favorite'}> </div>
    </div>
  );
};
export default Card;
