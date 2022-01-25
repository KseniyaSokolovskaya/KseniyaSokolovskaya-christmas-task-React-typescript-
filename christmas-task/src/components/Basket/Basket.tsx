import React from 'react';

import './index.scss';

const Basket: React.FC<{ count: number }> = ({ count }) => <div className="basket">{count}</div>;
export default Basket;
