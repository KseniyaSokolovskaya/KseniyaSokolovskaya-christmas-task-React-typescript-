import toys from './data';
import { Toy } from './types';

const rangeCount = new Set<number>(toys.map((toy: Toy) => +toy.count));
const rangeYear = new Set<number>(toys.map((toy: Toy) => +toy.year));

export const SLIDER_DEFAULTS = {
  year: { min: Math.min(...rangeYear), max: Math.max(...rangeYear) },
  count: { min: Math.min(...rangeCount), max: Math.max(...rangeCount) },
};

export const TREES: string[] = ['1', '2', '3', '4', '5', '6'];
export const BG_TREES: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
export const GARLAND_COLORS: string[] = ['red', 'blue', 'yellow', 'purple', 'orange', 'multicolor', 'none'];
