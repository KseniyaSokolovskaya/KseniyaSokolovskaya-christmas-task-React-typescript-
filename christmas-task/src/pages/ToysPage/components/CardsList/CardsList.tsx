import React, { useMemo } from 'react';
import useCardsList from '../../../../contexts/CardsList';
import Card from '../Card';
import { Toy } from '../../../../types';

import './index.scss';

interface CardsListProps {
  cardsList: Toy[];
}

const CardsList: React.FC<CardsListProps> = ({ cardsList }) => {
  const cardsListFilterState = useCardsList();

  const filterCardsList = useMemo(() => {
    const cardListFiltered = cardsList
      .filter((card) => {
        if (+card.count >= cardsListFilterState.startCountValue && +card.count <= cardsListFilterState.endCountValue) {
          return true;
        }
        return false;
      })
      .filter((card) => {
        if (+card.year >= cardsListFilterState.startYearValue && +card.year <= cardsListFilterState.endYearValue) {
          return true;
        }
        return false;
      })
      .filter((card) => {
        if (card.favorite === cardsListFilterState.filterByValue.favorite.includes('favorite-1')) {
          return true;
        }
        return false;
      })
      .filter((card) => {
        if (cardsListFilterState.filterByValue.size.length === 0) {
          return true;
        }
        if (cardsListFilterState.filterByValue.size.includes('size-1') && card.size === 'большой') {
          return true;
        }
        if (cardsListFilterState.filterByValue.size.includes('size-2') && card.size === 'средний') {
          return true;
        }
        if (cardsListFilterState.filterByValue.size.includes('size-3') && card.size === 'малый') {
          return true;
        }
        return false;
      })
      .filter((card) => {
        if (cardsListFilterState.filterByValue.color.length === 0) {
          return true;
        }
        if (cardsListFilterState.filterByValue.color.includes('color-1') && card.color === 'белый') {
          return true;
        }
        if (cardsListFilterState.filterByValue.color.includes('color-2') && card.color === 'желтый') {
          return true;
        }
        if (cardsListFilterState.filterByValue.color.includes('color-3') && card.color === 'красный') {
          return true;
        }
        if (cardsListFilterState.filterByValue.color.includes('color-4') && card.color === 'синий') {
          return true;
        }
        if (cardsListFilterState.filterByValue.color.includes('color-5') && card.color === 'зелёный') {
          return true;
        }
        return false;
      })
      .filter((card) => {
        if (cardsListFilterState.filterByValue.shape.length === 0) {
          return true;
        }
        if (cardsListFilterState.filterByValue.shape.includes('shape-1') && card.shape === 'колокольчик') {
          return true;
        }
        if (cardsListFilterState.filterByValue.shape.includes('shape-2') && card.shape === 'шар') {
          return true;
        }
        if (cardsListFilterState.filterByValue.shape.includes('shape-3') && card.shape === 'шишка') {
          return true;
        }
        if (cardsListFilterState.filterByValue.shape.includes('shape-4') && card.shape === 'снежинка') {
          return true;
        }
        if (cardsListFilterState.filterByValue.shape.includes('shape-5') && card.shape === 'фигурка') {
          return true;
        }
        return false;
      })
      .filter((card) => card.name.toLowerCase().includes(cardsListFilterState.searchString.toLowerCase()));
    return cardListFiltered.sort((a, b) => {
      if (cardsListFilterState.sortValue === 'sort-year-min-to-max') {
        return +a.year - +b.year;
      }
      if (cardsListFilterState.sortValue === 'sort-year-max-to-min') {
        return +b.year - +a.year;
      }
      if (cardsListFilterState.sortValue === 'sort-name-min-to-max') {
        if (a.name < b.name) {
          return -1;
        }
      }
      if (cardsListFilterState.sortValue === 'sort-name-max-to-min') {
        if (a.name > b.name) {
          return -1;
        }
      }
      return 0;
    });
  }, [
    cardsList,
    cardsListFilterState.searchString,
    cardsListFilterState.sortValue,
    cardsListFilterState.startCountValue,
    cardsListFilterState.endCountValue,
    cardsListFilterState.startYearValue,
    cardsListFilterState.endYearValue,
    cardsListFilterState.filterByValue.favorite,
    cardsListFilterState.filterByValue.size,
    cardsListFilterState.filterByValue.color,
    cardsListFilterState.filterByValue.shape,
  ]);
  return (
    <div className="cards-list">
      {filterCardsList.map((card) => (
        <Card
          key={card.num}
          num={card.num}
          name={card.name}
          count={card.count}
          year={card.year}
          shape={card.shape}
          color={card.color}
          size={card.size}
          favorite={card.favorite}
        />
      ))}
    </div>
  );
};

export default CardsList;
