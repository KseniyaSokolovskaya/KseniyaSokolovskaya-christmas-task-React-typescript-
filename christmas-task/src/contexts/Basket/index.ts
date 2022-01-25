import { useContext } from 'react';
import Context from './Context';
import Provider from './Provider';
import type { BasketContext } from './Context';

const useBasketContext = (): BasketContext => useContext(Context);

export { Provider };
export default useBasketContext;
