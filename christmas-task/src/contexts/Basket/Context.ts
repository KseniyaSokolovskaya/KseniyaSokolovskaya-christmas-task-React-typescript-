import React from 'react';

export interface BasketContext {
  favToys: string[];
  toggleFavToy(fav: string): void;
}

const defaultContext: BasketContext = {
  favToys: [],
  toggleFavToy: () => {
    //
  },
};

const BasketContext = React.createContext<BasketContext>(defaultContext);

export default BasketContext;
