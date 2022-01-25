import React from 'react';
import Toy from '../Toy';
import useBasketContext from '../../../../contexts/Basket';
import toys from '../../../../data';
import './index.scss';

const ToySection: React.FC = () => {
  const favToys = useBasketContext().favToys;
  let toysList;

  if (favToys.length) {
    toysList = toys.filter(({ num }) => favToys.includes(num));
    console.log(toysList);
  } else toysList = toys.slice(0, 20);

  return (
    <div className="toy-section">
      {toysList.map(({ num, count }) => (
        <Toy num={num} count={count} key={num} />
      ))}
    </div>
  );
};

export default ToySection;
