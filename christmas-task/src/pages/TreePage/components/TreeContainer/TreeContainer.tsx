import React from 'react';
import useSettingsTreeContext from '../../../../contexts/SettingsTree';
import Garland from '../Garland/Garland';
import Snowfall from '../Snowfall';

import './index.scss';

const TreeContainer: React.FC = () => {
  const settings = useSettingsTreeContext().settingsValues;

  return (
    <div className="tree-container" style={{ backgroundImage: `url(${settings.backgroundTree})` }}>
      <img className="tree" src={settings.tree} />
      {settings.garland ? <Garland color={settings.garland} /> : ''}
      {settings.snow ? <Snowfall /> : ''}
    </div>
  );
};

export default TreeContainer;
