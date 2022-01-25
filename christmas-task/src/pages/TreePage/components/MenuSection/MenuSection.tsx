import React, { ReactNode } from 'react';
import MenuItem from '../MenuItem';
import useSettingsTreeContext from '../../../../contexts/SettingsTree';

import './index.scss';

type MenuSectionProps = {
  title: string;
  list: string[];
  name: string;
};

const MenuSection: React.FC<MenuSectionProps> = ({ title, list, name }) => {
  const settingsTree = useSettingsTreeContext();
  console.log('settingsTree');
  return (
    <div className="menu-section">
      <h2 className="menu-title">{title}</h2>
      <ul
        className="menu-items"
        onClick={(event) => {
          const elem = event.target as HTMLElement;
          if (elem.classList.value.includes('background')) {
            settingsTree.handleChangeBackgroundTree(elem.dataset.src || '');
          }
          if (elem.classList.value.includes('tree')) {
            settingsTree.handleChangeTree(elem.dataset.src || '');
          }
          if (elem.classList.value.includes('garland')) {
            settingsTree.handleChangeGarland(elem.dataset.color || '');
          }
        }}
      >
        {list.map(
          (item, index): ReactNode => (
            <MenuItem src={item} key={index} className={name} />
          )
        )}
      </ul>
    </div>
  );
};

export default MenuSection;
