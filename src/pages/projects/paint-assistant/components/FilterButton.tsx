/// <reference path='../types.d.ts' />

import React from 'react';

export default FilterButton;

function FilterButton({ filterKey, title, isActive, sortChanged }) {
  console.log(filterKey, title);

  return (
    <button className={`filter-button ${isActive && 'active'}`}>
      <input type="radio" name="SortGroup" id={filterKey} onChange={sortChanged} />
      <label htmlFor={filterKey}>{title}</label>
    </button>
  );
}
