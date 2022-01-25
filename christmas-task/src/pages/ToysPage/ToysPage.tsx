import React from 'react';
import CardsList from './components/CardsList';
import FilterCards from './components/FilterCards';
import toys from '../../data';
import './index.scss';

const ToysPage: React.FC = () => (
  <div className="toys-container content">
    <FilterCards />
    <CardsList cardsList={toys} />
  </div>
);

export default ToysPage;
