import React from 'react';

import './index.scss';

type GarlandProps = {
  color: string;
};

const Garland: React.FC<GarlandProps> = ({ color }) => (
  <div className={`garland-${color}`}>
    <ul className="garland-line">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
    <ul className="garland-line garland-line-1">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
    <ul className="garland-line garland-line-2">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
    <ul className="garland-line garland-line-3">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
    <ul className="garland-line garland-line-4">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
    <ul className="garland-line garland-line-5">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
    <ul className="garland-line garland-line-6">
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
      <li className="garland-item"></li>
    </ul>
  </div>
);

export default Garland;
