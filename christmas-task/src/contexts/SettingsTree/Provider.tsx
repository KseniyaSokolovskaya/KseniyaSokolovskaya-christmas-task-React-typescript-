import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Context from './Context';

interface SettingsTree {
  backgroundTree: string;
  tree: string;
  garland: string;
  sound: boolean;
  snow: boolean;
}
const settingTreeDefaultValue = {
  backgroundTree: '/assets/bg/1.jpg',
  tree: '/assets/tree/1.png',
  garland: '',
  sound: false,
  snow: false,
};

const Provider: React.FC = ({ children }) => {
  const storageSettings = localStorage.getItem('settings');
  const [settingsTree, setSettingsTree] = useState<SettingsTree>(
    storageSettings ? JSON.parse(storageSettings) : settingTreeDefaultValue
  );

  const handleChangeBackgroundTree = useCallback(
    (backgroundTree: string) =>
      setSettingsTree((prevState) => {
        return { ...prevState, backgroundTree };
      }),
    [setSettingsTree]
  );
  const handleChangeTree = useCallback(
    (tree: string) =>
      setSettingsTree((prevState) => {
        return { ...prevState, tree };
      }),
    [setSettingsTree]
  );
  const handleChangeGarland = useCallback(
    (garland: string) =>
      setSettingsTree((prevState) => {
        return { ...prevState, garland };
      }),
    [setSettingsTree]
  );
  const handleChangeSound = useCallback(
    (sound: boolean) =>
      setSettingsTree((prevState) => {
        return { ...prevState, sound };
      }),
    [setSettingsTree]
  );

  const handleChangeSnow = useCallback(
    (snow: boolean) =>
      setSettingsTree((prevState) => {
        return { ...prevState, snow };
      }),
    [setSettingsTree]
  );

  const contextValue = useMemo(
    () => ({
      settingsValues: settingsTree,
      handleChangeBackgroundTree,
      handleChangeTree,
      handleChangeGarland,
      handleChangeSound,
      handleChangeSnow,
    }),
    [
      settingsTree,
      handleChangeBackgroundTree,
      handleChangeTree,
      handleChangeGarland,
      handleChangeSound,
      handleChangeSnow,
    ]
  );

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settingsTree));
  }, [settingsTree]);

  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
