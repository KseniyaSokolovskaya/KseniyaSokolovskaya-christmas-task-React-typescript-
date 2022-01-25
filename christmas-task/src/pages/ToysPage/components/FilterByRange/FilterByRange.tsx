import React from 'react';
import useCardsList from '../../../../contexts/CardsList';
import Slider from '../Slider';
import { SLIDER_DEFAULTS } from '../../../../constans';

import './index.scss';

const FilterByRange: React.FC = () => {
  const cardsListFilter = useCardsList();
  return (
    <div className="filter filter-range">
      <h2 className="filter-title"> Фильтры по диапазону</h2>
      <h3>Количество экземпляров: </h3>
      <div className="slider-range">
        <div className="slider-range-count">
          <span className="start-value">{cardsListFilter.startCountValue}</span>
          <Slider
            onChange={cardsListFilter.handleCountSlider}
            range={{ min: SLIDER_DEFAULTS.count.min, max: SLIDER_DEFAULTS.count.max }}
            start={[cardsListFilter.startCountValue, cardsListFilter.endCountValue]}
          />
          <span className="end-value">{cardsListFilter.endCountValue}</span>
        </div>
      </div>
      <div className="slider-range">
        <h3>Год приобретения: </h3>
        <div className="slider-range-year">
          <span className="start-value">{cardsListFilter.startYearValue}</span>
          <Slider
            onChange={cardsListFilter.handleYearSlider}
            range={{ min: SLIDER_DEFAULTS.year.min, max: SLIDER_DEFAULTS.year.max }}
            start={[cardsListFilter.startYearValue, cardsListFilter.endYearValue]}
          />
          <span className="end-value">{cardsListFilter.endYearValue}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterByRange;
