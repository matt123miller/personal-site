import React, { useState, Fragment } from 'react';

export default FilterButton;


function FilterButton({filterKey, title, isActive, sortChanged}) {
  console.log(filterKey, title);
  return <>
    <span className={`filter-button ${isActive && 'active'}`}>
      <input type="radio" name="SortGroup" id={filterKey} onChange={sortChanged} />
      <label htmlFor={filterKey}>{title}</label>
    </span>
  </>;
}
