import React from 'react';
import useCardsListContext from '../../contexts/CardsList';

import './index.scss';

const Search: React.FC = () => {
  const { handleSearchString } = useCardsListContext();

  const handleChange = (event: React.ChangeEvent): void => {
    const element = event.currentTarget as HTMLInputElement;
    handleSearchString(element.value);
  };

  return (
    <div className="search">
      <input type="search" className="search-input" onChange={handleChange} placeholder="Search..." autoFocus />
    </div>
  );
};

export default Search;
