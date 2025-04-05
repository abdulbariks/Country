import { Suspense } from "react";
import "./App.css";

import Countries from "./components/countries";
import Navbar from "./components/Navbar/Navbar";

const countriesPromise = fetch("countries.json").then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Countries Loading........</h3>}>
        <Navbar></Navbar>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
