import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity } from "../../redux/actions/actions";
import { CityState } from "../../redux/reducer/weatherReducer";

interface City {
  city_name: string;
  temp: string;
  humidity: string;
  city_id: number;
}

export default function SavedCity(props: City) {
  const fetchedCities = useSelector<CityState, CityState["cities"]>(
    (state) => state.cities
  );
  const dispatch = useDispatch();

  return (
    <div>
      {fetchedCities?.length === undefined ? (
        "no data"
      ) : (
        <div className="flex flex-col pr-16">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table
                  className="min-w-full "
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {props.city_name}
                      </td>
                      <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {props.temp}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {props.humidity}
                      </td>
                      <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          onClick={() =>
                            dispatch(deleteCity(props.city_id) as any)
                          }
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
