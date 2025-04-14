import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  console.log(country);
  const { name, flag, region, population } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className="">
      <img className="h-12 w-16" src={flag} alt="" />
      <h3>Name: {name}</h3>
      <p>Region: {region}</p>
      <p>Population: {population}</p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
