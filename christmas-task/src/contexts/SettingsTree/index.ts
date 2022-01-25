import { useContext } from 'react';
import Context from './Context';
import Provider from './Provider';
import type { SettingsTreeContext } from './Context';

const useSettingsTreeContext = (): SettingsTreeContext => useContext(Context);

export { Provider };
export default useSettingsTreeContext;
