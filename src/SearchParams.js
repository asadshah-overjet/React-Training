import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './UseDropdown';

const SearchParam = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, steBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown(
    'Animal',
    'dog',
    ANIMALS,
  );
  const [breed, BreedDropDown] = useDropdown('Breed', '', breeds);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropDown />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParam;
