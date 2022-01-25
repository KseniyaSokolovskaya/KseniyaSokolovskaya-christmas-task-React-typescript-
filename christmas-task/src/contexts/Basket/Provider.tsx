import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Context from './Context';

const Provider: React.FC = ({ children }) => {
  const storageBasket = localStorage.getItem('basket');
  const [favToys, setFavToys] = useState<string[]>(storageBasket ? JSON.parse(storageBasket) : []);

  const toggleFavToy = useCallback(
    (newFavToy: string) => {
      setFavToys((prevFavToys) => {
        if (prevFavToys.includes(newFavToy)) {
          return prevFavToys.filter((item) => item !== newFavToy);
        }
        if (prevFavToys.length < 20) {
          return [...prevFavToys, newFavToy];
        }
        if (prevFavToys.length >= 20) {
          // eslint-disable-next-line no-alert
          alert('Извините, все слоты заполнены');
        }
        return [...prevFavToys];
      });
    },
    [setFavToys]
  );

  const contextValue = useMemo(() => ({ favToys, toggleFavToy }), [favToys, toggleFavToy]);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(favToys));
  }, [favToys]);

  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
