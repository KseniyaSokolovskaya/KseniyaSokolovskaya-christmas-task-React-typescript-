import React from 'react';
import useCardsList from '../../../../contexts/CardsList';
import './index.scss';

const FilterByValue: React.FC = () => {
  const cardsListFilter = useCardsList();

  return (
    <form className=" filter-form filter-values" onChange={(event) => cardsListFilter.handleFilterChange(event)}>
      <h2 className="filter-title"> Фильтры по значению</h2>
      <div className="filter-line">
        <p className="line-title">Форма: </p>
        <div className="line-options">
          <input
            type="checkbox"
            name="shape"
            className="shape-input"
            value="1"
            id="shape-1"
            defaultChecked={cardsListFilter.filterByValue.shape.includes('shape-1')}
          />
          <label htmlFor="shape-1" className="label label-shape label-shape-1" />
          <input
            type="checkbox"
            className="shape-input"
            name="shape"
            value="2"
            id="shape-2"
            defaultChecked={cardsListFilter.filterByValue.shape.includes('shape-2')}
          />
          <label htmlFor="shape-2" className="label label-shape label-shape-2" />
          <input
            type="checkbox"
            className="shape-input"
            name="shape"
            value="3"
            id="shape-3"
            defaultChecked={cardsListFilter.filterByValue.shape.includes('shape-3')}
          />
          <label htmlFor="shape-3" className="label label-shape label-shape-3" />
          <input
            type="checkbox"
            className="shape-input"
            name="shape"
            value="4"
            id="shape-4"
            defaultChecked={cardsListFilter.filterByValue.shape.includes('shape-4')}
          />
          <label htmlFor="shape-4" className="label label-shape label-shape-4" />
          <input
            type="checkbox"
            className="shape-input"
            name="shape"
            value="5"
            id="shape-5"
            defaultChecked={cardsListFilter.filterByValue.shape.includes('shape-5')}
          />
          <label htmlFor="shape-5" className="label label-shape label-shape-5" />
        </div>
      </div>
      <div className="filter-line">
        <p className="line-title">Цвет: </p>
        <div className="line-options">
          <input
            type="checkbox"
            className="color-input"
            name="color"
            value="1"
            id="color-1"
            defaultChecked={cardsListFilter.filterByValue.color.includes('color-1')}
          />
          <label htmlFor="color-1" className="label label-color label-color-1" />
          <input
            type="checkbox"
            className="color-input"
            name="color"
            value="2"
            id="color-2"
            defaultChecked={cardsListFilter.filterByValue.color.includes('color-2')}
          />
          <label htmlFor="color-2" className="label label-color label-color-2" />
          <input
            type="checkbox"
            className="color-input"
            name="color"
            value="3"
            id="color-3"
            defaultChecked={cardsListFilter.filterByValue.color.includes('color-3')}
          />
          <label htmlFor="color-3" className="label label-color label-color-3" />
          <input
            type="checkbox"
            className="color-input"
            name="color"
            value="4"
            id="color-4"
            defaultChecked={cardsListFilter.filterByValue.color.includes('color-4')}
          />
          <label htmlFor="color-4" className="label label-color label-color-4" />
          <input
            type="checkbox"
            className="color-input"
            name="color"
            value="5"
            id="color-5"
            defaultChecked={cardsListFilter.filterByValue.color.includes('color-5')}
          />
          <label htmlFor="color-5" className="label label-color label-color-5" />
        </div>
      </div>
      <div className="filter-line">
        <p className="line-title">Размер: </p>
        <div className="line-options">
          <input
            type="checkbox"
            name="size"
            className="size-input"
            value="1"
            id="size-1"
            defaultChecked={cardsListFilter.filterByValue.size.includes('size-1')}
          />
          <label htmlFor="size-1" className="label label-size label-size-1" />
          <input
            type="checkbox"
            name="size"
            className="size-input"
            value="2"
            id="size-2"
            defaultChecked={cardsListFilter.filterByValue.size.includes('size-2')}
          />
          <label htmlFor="size-2" className="label label-size label-size-2" />
          <input
            type="checkbox"
            name="size"
            className="size-input"
            value="3"
            id="size-3"
            defaultChecked={cardsListFilter.filterByValue.size.includes('size-3')}
          />
          <label htmlFor="size-3" className="label label-size label-size-3" />
        </div>
      </div>
      <div className="filter-line">
        <p className="line-title">Только любимые: </p>
        <div className="line-options">
          <input
            type="checkbox"
            name="favorite"
            className="favorite-input"
            value="1"
            id="favorite-1"
            defaultChecked={cardsListFilter.filterByValue.favorite.includes('favorite-1')}
          />
          <label htmlFor="favorite-1" className="label label-favorite" />
        </div>
      </div>
    </form>
  );
};

export default FilterByValue;
