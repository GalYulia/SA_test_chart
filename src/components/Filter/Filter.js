import React from 'react';
import styles from './styles.css';

const Filter = ({ onChangeSelect, filterOptions = [] }) => (
  <select className={styles.dropdown} onChange={e => onChangeSelect(e.target.value)}>
    {filterOptions.map((product, i) => <option key={i}>{product}</option>)}
  </select>
);

export default Filter;
