import React from 'react';
import useSettingsTreeContext from '../../../../contexts/SettingsTree';

import './index.scss';

const Snow: React.FC = () => {
  const settings = useSettingsTreeContext();
  const isActive = settings.settingsValues.snow;

  return <div className={`snow ${isActive ? '' : 'mute'}`} onClick={() => settings.handleChangeSnow(!isActive)}></div>;
};

export default Snow;
