import React, { use, useState } from "react";
import Country from "./country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div className="">
      <h2>Total Countries: {countries.length}</h2>
      <h2>Total Visited Countries: {visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-5">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
