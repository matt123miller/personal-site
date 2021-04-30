import React, { useState, Fragment } from 'react';
import { Paint, FilterButton, ComplimentaryColours } from './index';

export default PaintsList;

// This should handle various data filtering

const sortOptions = {
  AlphabeticalAsc: true,
  AlphabeticalDesc: false,
  DarkToLight: false,
  LightToDark: false
};

const sortFunctions = {
  AlphabeticalAsc: AlphabeticalAsc,
  AlphabeticalDesc: AlphabeticalDesc,
  DarkToLight: DarkToLight,
  LightToDark: LightToDark
};

function PaintsList(props) {
  const { paintData } = props;

  const [chosenColour, setColour] = useState(null);
  const [selectedSorts, updateSort] = useState(sortOptions);
  const [searchRegex, updateSearchText] = useState(RegExp(''));

  const sortChanged = (e) => {
    const isChecked = (id) => document.getElementById(id)?.checked;
    const updatedValues = {
      AlphabeticalAsc: isChecked('AlphabeticalAsc'),
      AlphabeticalDesc: isChecked('AlphabeticalDesc'),
      DarkToLight: isChecked('DarkToLight'),
      LightToDark: isChecked('LightToDark')
    };

    updateSort((prevState) => {
      return { ...prevState, ...updatedValues };
    });
  };

  const searchTextChanged = (e) => {
    const text = e.target.value;
    const regex = RegExp(text, 'ig');
    updateSearchText(regex);
  };

  const requestedSort = Object.keys(selectedSorts).find((f) => selectedSorts[f]);

  // when filters are added do those first, then sort the results

  let filteredData = paintData.filter((p) => searchRegex.test(p.name));

  if (requestedSort) {
    filteredData = sortFunctions[requestedSort](filteredData);
  }

  return (
    <div>
      <div className="paint-controls mb-8">
        <input
          className="paint-search"
          type="text"
          name="SearchBar"
          id="SearchBar"
          placeholder="Search for a paint"
          onChange={searchTextChanged}
        />

        <div className="filters mt-4">
          <FilterButton
            title="A to Z"
            filterKey="AlphabeticalAsc"
            isActive={selectedSorts.AlphabeticalAsc}
            sortChanged={sortChanged}
          />
          <FilterButton
            title="Z to A"
            filterKey="AlphabeticalDesc"
            isActive={selectedSorts.AlphabeticalDesc}
            sortChanged={sortChanged}
          />
          <FilterButton
            title="Light to Dark"
            filterKey="LightToDark"
            isActive={selectedSorts.LightToDark}
            sortChanged={sortChanged}
          />
          <FilterButton
            title="Dark to Light"
            filterKey="DarkToLight"
            isActive={selectedSorts.DarkToLight}
            sortChanged={sortChanged}
          />
        </div>
      </div>

      {chosenColour && <ComplimentaryColours chosenColour={chosenColour} />}

      <hr />

      <ul className="paint-list mb-8">
        {filteredData.map((paint, i) => {
          return (
            <li>
              <Paint key={`paint${i}`} paint={paint} onPaintClick={setColour} />
            </li>
          );
        })}
      </ul>
    </div>
  );
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
