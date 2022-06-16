import React from "react";
import { fetchCity } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import City from "../../City/City";
import SavedCityList from "../../SavedCityList/SavedCityList";
import { fetchCities } from "../../../redux/actions/actions";
import { CityState } from "../../../redux/reducer/weatherReducer";

export default function LandingPage() {
  const [city, setCity] = React.useState("");
  const dispatch = useDispatch();
  const fetchedCity = useSelector<CityState, CityState["city"]>(
    (state) => state.city
  );
  const makeApiCall = (str: string) => {
    dispatch(fetchCity(str) as any);
  };

  return (
    <div className="flex items-center justify-start ">
      <div className="flex flex-col">
        <div className="flex justify-start mb-4">
          <input
            className=" focus:outline-none py-2 pl-3 pr-5 rounded-tl-xl rounded-bl-xl w-full  "
            placeholder="Enter a city..."
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={() => makeApiCall(city)}
            className="bg-blue-500 py-2 px-4 text-white rounded-tr-xl rounded-br-xl"
          >
            Buscar
          </button>
        </div>
        <div className="flex flex-col justify-center w-auto h-auto rounded-xl border border-white ">
          {fetchedCity.length === 0 ? (
            <>
              <div
                className="flex flex-col justify-center items-center text-white bg-white py-8 px-8 w-[450px] h-[428px]"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: "0.75rem",
                }}
              >
                <div className="flex flex-col items-center justify-center h-[450px] w-[428px] space-y-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <h2 className="text-5xl text-center">No data available</h2>
                </div>
              </div>
            </>
          ) : (
            <City />
          )}
        </div>
      </div>
      <div>
        <button
          className="py-2 px-4 bg-blue-500 rounded-lg mb-2 ml-16 text-white"
          onClick={() => dispatch(fetchCities() as any)}
        >
          Show Saved Cities
        </button>
        <SavedCityList />
      </div>
    </div>
  );
}
