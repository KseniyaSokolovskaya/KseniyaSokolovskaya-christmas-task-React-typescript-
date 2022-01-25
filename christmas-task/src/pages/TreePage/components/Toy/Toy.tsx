import React, { MouseEventHandler } from 'react';
import './index.scss';

interface ToyProps {
  num: string;
  count: string;
}
const Toy: React.FC<ToyProps> = ({ num, count }) => {
  const handleDragStart = () => console.log('t');
  return (
    <div className="toy-item">
      <img src={`/assets/toys/${num}.png`} className="toy-image" draggable onDragStart={handleDragStart} />
      <span className="toy-count">{count}</span>
    </div>
  );
};

export default Toy;
