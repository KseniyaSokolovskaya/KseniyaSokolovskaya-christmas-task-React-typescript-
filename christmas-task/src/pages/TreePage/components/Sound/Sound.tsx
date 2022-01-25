import React, { useState, useMemo } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import useSettingsTreeContext from '../../../../contexts/SettingsTree';

import './index.scss';

const Sound: React.FC = () => {
  const settings = useSettingsTreeContext();
  const audio = useMemo(() => new Audio('/assets/audio/audio.mp3'), []);
  const [isActive, setIsActive] = useState(!!settings.settingsValues.sound);

  const toggle = useCallback(() => {
    setIsActive((prev) => !prev);
    settings.handleChangeSound(!isActive);
  }, []);

  useEffect(() => {
    window.onclick = () => {
      if (isActive) {
        audio.play();
      }
      window.onclick = null;
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isActive]);

  return <div className={`sound ${isActive ? '' : 'mute'}`} onClick={toggle}></div>;
};

export default React.memo(Sound);
