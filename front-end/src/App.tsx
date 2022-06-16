import React from "react";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import "../src/app.css";

function App() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-6xl text-white mb-16 mt-16">Weather App</h1>
      </div>
      <div className="flex justify-center items-center bg-indigo-500">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
