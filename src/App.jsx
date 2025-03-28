import "./App.css";

import Countries from "./components/countries";

const countriesPromise = fetch("https://restcountries.com/v3.1/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <h1>Country</h1>
      <Countries countriesPromise={countriesPromise}></Countries>
    </>
  );
}

export default App;
