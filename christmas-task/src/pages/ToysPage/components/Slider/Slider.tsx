import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import './index.scss';

interface SliderProps {
  onChange(sliderVal: string[]): void;
  range: { min: number; max: number };
  start: number[];
}

const Slider: React.FC<SliderProps> = ({ onChange, range, start }) => (
  <Nouislider start={start} range={range} step={1} onChange={onChange} connect />
);

export default Slider;
