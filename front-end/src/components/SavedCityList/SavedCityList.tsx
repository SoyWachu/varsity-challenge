import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CityState } from "../../redux/reducer/weatherReducer";
import { fetchCities } from "../../redux/actions/actions";
import SavedCity from "../SavedCity/SavedCity";

export default function SavedCityList() {
  const fetchedCities = useSelector<CityState, CityState["cities"]>(
    (state) => state.cities
  );
  return (
    <div className="w-[900px] h-[435px] overflow-x-hidden overflow-y-scroll ml-16">
      {fetchedCities?.map((item) => {
        return (
          <div key={item.id}>
            <SavedCity
              city_name={item.city_name}
              temp={item.temp}
              humidity={item.humidity}
              city_id={item.city_id}
            />
          </div>
        );
      })}
    </div>
  );
}
