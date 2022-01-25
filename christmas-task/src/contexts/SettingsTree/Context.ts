import React from 'react';

export interface SettingsTreeContext {
  settingsValues: {
    backgroundTree: string;
    tree: string;
    garland: string;
    sound: boolean;
    snow: boolean;
  };
  handleChangeBackgroundTree(backgroundTree: string): void;
  handleChangeTree(backgroundTree: string): void;
  handleChangeGarland(color: string): void;
  handleChangeSound(isActive: boolean): void;
  handleChangeSnow(isActive: boolean): void;
}

const defaultContext: SettingsTreeContext = {
  settingsValues: {
    backgroundTree: '',
    tree: '',
    garland: '',
    sound: false,
    snow: false,
  },
  handleChangeBackgroundTree: () => {
    //
  },
  handleChangeTree: () => {
    //
  },
  handleChangeGarland: () => {
    //
  },
  handleChangeSound: () => {
    //
  },
  handleChangeSnow: () => {
    //
  },
};

const SettingsTreeContext = React.createContext<SettingsTreeContext>(defaultContext);

export default SettingsTreeContext;
