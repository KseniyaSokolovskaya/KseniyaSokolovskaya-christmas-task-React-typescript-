import React from 'react';
import './index.scss';

interface SelectProps {
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const Select: React.FC<SelectProps> = ({ onChange }) => (
  <select className="sort-select" onChange={onChange}>
    <option defaultValue="sort-name-min-to-max">По названию от «А» до «Я»</option>
    <option value="sort-name-max-to-min">По названию от «Я» до «А»</option>
    <option value="sort-year-min-to-max">По году покупки по возрастанию</option>
    <option value="sort-year-max-to-min">По году покупки по убыванию</option>
  </select>
);

export default Select;
