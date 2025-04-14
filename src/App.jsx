import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";
import SideBar from "./components/SideBar/SideBar";

// const countriesPromise = fetch("countries.json").then((res) => res.json());

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto mb-auto grid grid-cols-2 my-5">
          <SideBar></SideBar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
