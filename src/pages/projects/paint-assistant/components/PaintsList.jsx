import React, { useState, Fragment } from 'react';
import { Paint, ThemePicker } from './index';
import FilterButton from './FilterButton';

export default PaintsList;

// This should handle various data filtering

const sortOptions = {
  AlphabeticalAsc: false,
  AlphabeticalDesc: false,
  DarkToLight: false,
  LightToDark: false
}

const sortFunctions = {
  AlphabeticalAsc: AlphabeticalAsc,
  AlphabeticalDesc: AlphabeticalDesc,
  DarkToLight: DarkToLight,
  LightToDark: LightToDark
}

function PaintsList(props) {

  const { paintData, onPaintClick } = props;

  const [selectedFilters, updateFilters] = useState(sortOptions);
  const [searchRegex, updateSearchText] = useState(RegExp(''));



  const isChecked = (id) => document.getElementById(id)?.checked;

  const sortChanged = (e) => {
    const updatedValues = {
      AlphabeticalAsc: isChecked('AlphabeticalAsc'),
      AlphabeticalDesc: isChecked('AlphabeticalDesc'),
      DarkToLight: isChecked('DarkToLight'),
      LightToDark: isChecked('LightToDark'),
    };

    updateFilters(prevState => { return { ...prevState, ...updatedValues } });
  }

  const searchTextChanged = (e) => {
    const text = e.target.value;
    const regex = RegExp(text, 'ig')

    updateSearchText(regex);
  }


  const requestedSort = Object.keys(selectedFilters).find(f => selectedFilters[f]);

  // when filters are added do those first, then sort the results

  let filteredData = paintData.filter(p => searchRegex.test(p.name));


  if (requestedSort) {
    filteredData = sortFunctions[requestedSort](filteredData);
  }



  return (
    <div>
      <div className="paint-controls">
        <input className="paint-search" type="text" name="SearchBar" id="SearchBar" placeholder="Search for a paint" onChange={searchTextChanged} />
        {/* <ThemePicker /> */}
      </div>

      <div className="filters">

        <FilterButton title="A to Z" filterKey="AlphabeticalAsc" isActive={selectedFilters.AlphabeticalDesc} sortChanged={sortChanged}/>
        <FilterButton title="Z to A" filterKey="AlphabeticalDesc" isActive={selectedFilters.AlphabeticalAsc} sortChanged={sortChanged}/>
        <FilterButton title="Light to Dark" filterKey="LightToDark" isActive={selectedFilters.LightToDark} sortChanged={sortChanged}/>
        <FilterButton title="Dark to Light" filterKey="DarkToLight" isActive={selectedFilters.DarkToLight} sortChanged={sortChanged}/>

      </div>

      <ul className="paint-list">
        {
          filteredData.map((paint, i) => {
            return <li>

              <Paint key={`paint${i}`} paint={paint} onPaintClick={onPaintClick} />
            </li>
          })
        }
      </ul>
    </div>
  )
}

function AlphabeticalAsc(data) {
  return data.sort((a, b) => a.name > b.name);
}

function AlphabeticalDesc(data) {
  return data.sort((a, b) => a.name < b.name);
}

function DarkToLight(data) {
  return data.sort((a, b) => a.hexCode > b.hexCode);
}

function LightToDark(data) {
  return data.sort((a, b) => a.hexCode < b.hexCode);
}