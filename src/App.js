import React, { useState, useEffect } from 'react';
import CountrySelector from './components/CountrySelector';

import Navbar from './components/Navbar';

const App = () => {
  const [countries, setCountries] = useState([]);
  

  

  useEffect(() => {
    // Fetch list of countries from the REST Countries API
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

 

  const handleCountrySelection = (countries) => {
    setSelectedCountries(countries);
  };

  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <CountrySelector onCountrySelection={handleCountrySelection} countries={countries} />
      
    </div>
  );
};

export default App;