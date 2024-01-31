import React, { useState } from 'react';

const CountryDropdown = ({ countries, selectedCountry, onCountryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (country) => {
    onCountryChange(country);
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-96 p-4">
      <div
        className="border bg-blue-300 p-2 rounded cursor-pointer"
        onClick={handleToggleDropdown}
      >
        {selectedCountry ? selectedCountry.name : 'Select Country'}
      </div>

      {isOpen && (
        <div className="absolute top-10 left-0 bg-blue-50 border p-2 rounded w-full max-h-[90vh] overflow-auto">
          <div className="mb-2 sticky top-0 bg-white z-10">
            <input
              type="text"
              className="border bg-blue-200 p-2 rounded w-full"
              placeholder="Search Country"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {filteredCountries.length > 0 ? (
            <ul>
              {filteredCountries.map((country) => (
                <li
                  key={country.alpha2Code}
                  onClick={() => handleSelectChange(country)}
                  className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                >
                  {country.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-red-600'>No matching countries found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
