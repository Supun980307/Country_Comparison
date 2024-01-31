import React, { useState, useEffect } from 'react';
import CountryDropdown from './CountryDropdown';
import CountryComparison from './CountryComparison';

const CountrySelector = ({ countries }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
 

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-center p-4 space-y-4 sm:space-y-0">
        <CountryDropdown
          countries={countries}
          selectedCountry={selectedCountries[0]}
          onCountryChange={(country) =>
            setSelectedCountries([country, selectedCountries[1]])
          }
        />
        <CountryDropdown
          countries={countries}
          selectedCountry={selectedCountries[1]}
          onCountryChange={(country) =>
            setSelectedCountries([selectedCountries[0], country])
          }
        />
        
      </div>
      {selectedCountries[0] && selectedCountries[1] ? (
        <div>
          <h2 className="text-2xl text-center font-bold mb-2">Selected Countries</h2>
          {selectedCountries.length === 2 && (
        <CountryComparison countries={selectedCountries} />
      )}
        </div>
      ) : (
        <p className='text-center text-lg text-red-400'>Select two countries to compare...</p>
      )}
    </div>
  );
};

export default CountrySelector;