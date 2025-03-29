import React, { use } from "react";
import Country from "./country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <div className="">
      <h2>Total Countries: {countries.length}</h2>
      <div className="flex flex-wrap gap-5">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
