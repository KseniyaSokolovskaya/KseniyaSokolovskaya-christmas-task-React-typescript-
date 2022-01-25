import { useContext } from 'react';
import Context from './Context';
import Provider from './Provider';
import type { CardsListContext } from './Context';

const useCardsListContext = (): CardsListContext => useContext(Context);

export { Provider };
export default useCardsListContext;
