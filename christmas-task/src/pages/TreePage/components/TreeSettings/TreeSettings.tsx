import React from 'react';
import MenuSection from '../MenuSection';
import Sound from '../Sound';
import Snow from '../Snow';
import { TREES, BG_TREES, GARLAND_COLORS } from '../../../../constans';

import './index.scss';

const TreeSettings: React.FC = () => (
  <div className="tree-settings">
    <Snow />
    <Sound />
    <MenuSection title="Выберите елку:" name="tree" list={TREES.map((src) => `/assets/tree/${src}.png`)} />
    <MenuSection title="Выберите фон:" name="background" list={BG_TREES.map((src) => `/assets/bg/${src}.jpg`)} />
    <MenuSection title="Гирлянда:" name="garland" list={GARLAND_COLORS} />
  </div>
);

export default TreeSettings;
