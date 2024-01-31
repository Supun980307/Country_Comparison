import React from 'react';

const CountryComparison = ({ countries }) => {
  return (
    <div className="flex flex-col sm:flex-row md:space-x-8 mt-8 ml-6 lg:ml-24 mr-6 lg:mr-24 space-y-4 sm:space-y-0">
      {countries.map((country) => (
        <div key={country.alpha3Code} className="flex-1 p-4 border bg-gradient-to-r from-blue-200 to-purple-200">
          <h2 className="text-xl text-center font-bold mb-2">{country.name}</h2>
          <img className="w-full mb-2 h-52 md:h-60 lg:h-72" src={country.flags.svg} alt={`${country.name} flag`} />
          <div className=''>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Area:</strong> {country.area} sq km
          </p>
          <p>
            <strong>Languages:</strong> {country.languages.map((lang) => lang.name).join(', ')}
          </p>
          <p>
            <strong>Currencies:</strong> {country.currencies.map((curr) => curr.name).join(', ')}
          </p>
          </div>
        </div>
      ))}
          
    </div>
  );
};

export default CountryComparison;
