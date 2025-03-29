import React from "react";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div className="">
      <h3>Name: {country.name.common}</h3>
      <img className="h-12 w-16" src={country.flags.png} alt="" />
    </div>
  );
};

export default Country;
