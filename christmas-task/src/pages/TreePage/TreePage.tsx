import React from 'react';
import TreeAside from './components/TreeAside';
import TreeContainer from './components/TreeContainer';
import TreeSettings from './components/TreeSettings/TreeSettings';

import './index.scss';

const TreePage: React.FC = () => (
  <div className="tree-page">
    <TreeSettings />
    <TreeContainer />
    <TreeAside />
  </div>
);

export default TreePage;
