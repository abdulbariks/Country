import React from "react";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>{country.borders}</p>
      <button>{country.borders}</button>
      <img src={country.flags.png} alt="" />
    </div>
  );
};

export default Country;
