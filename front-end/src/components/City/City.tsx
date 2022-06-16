import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CityState } from "../../../src/redux/reducer/weatherReducer";
import { saveCity } from "../../redux/actions/actions";

export default function City() {
  const fetchedCity = useSelector<CityState, CityState["city"]>(
    (state) => state.city
  );

  const [city, setCity] = React.useState({});
  const dispatch = useDispatch();

  const obj = Object.values(fetchedCity);

  return (
    <div
      className="flex flex-col justify-center items-center text-white bg-white py-8 px-8 w-[450px] "
      style={{ background: "rgba(255,255,255,0.5)", borderRadius: "0.75rem" }}
    >
      <h2 className="text-6xl pb-16">
        {typeof obj[11] === "string" ? obj[11] : obj[12]}
      </h2>
      <h2 className="text-4xl pb-8">Temp: {obj[3]?.temp}</h2>
      <div className="flex items-center text-center pb-8">
        <h2 className="text-4xl ">Max temp: {obj[3]?.temp_max}</h2>
        <h2 className="text-4xl ">Min temp: {obj[3]?.temp_min}</h2>
      </div>
      <button
        className="bg-blue-500 py-2 px-4 rounded-lg mb-4"
        onClick={() => dispatch(saveCity(fetchedCity) as any)}
      >
        Save city
      </button>
    </div>
  );
}
