import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  // console.log(country);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className="">
      <h3>Name: {country.name.common}</h3>
      <img className="h-12 w-16" src={country.flags.png} alt="" />
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
      <p>Population: {country.population}</p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
