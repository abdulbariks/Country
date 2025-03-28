import React, { use } from "react";
import Country from "./country";

const Countries = ({ countriesPromise }) => {
  //   console.log(countriesPromise);

  const countries = use(countriesPromise);
  //   console.log(countries);

  return (
    <div className="items-center m-10 p-2.5">
      <h2>All countries</h2>
      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
