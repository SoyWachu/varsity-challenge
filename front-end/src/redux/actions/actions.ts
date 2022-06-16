import { Dispatch } from "redux";
import axios from "axios";
import { url, apiKey } from "../../utils/utils";

import { ACTION_TYPES } from "../actionTypes/actionTypes";

const fetchCityRequest = () => {
  return {
    type: ACTION_TYPES.FETCH_CITY_REQUEST,
  };
};

const fetchCitySuccess = (city: any[]) => {
  return {
    type: ACTION_TYPES.FETCH_CITY_SUCCESS,
    payload: city,
  };
};

const fetchCityFailure = (error: string) => {
  return {
    type: ACTION_TYPES.FETCH_CITY_FAILURE,
    payload: error,
  };
};

const fetchCitiesSuccess = (cities: any[]) => {
  return {
    type: ACTION_TYPES.FETCH_CITIES_SUCCESS,
    payload: cities,
  };
};

const deleteOneCity = (id: number) => {
  return {
    type: ACTION_TYPES.DELETE_ONE_CITY,
    payload: id,
  };
};

export const fetchCity = (str: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCityRequest());
    axios
      .get(`${url}${str}${apiKey}`)
      .then((response) => {
        const city = response.data;
        dispatch(fetchCitySuccess(city));
      })
      .catch((error) => {
        dispatch(fetchCityFailure(error.message));
      });
  };
};

export const fetchCities = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCityRequest());
    axios
      .get("http://localhost:5000/getSavedCities")
      .then((response) => {
        console.log(response);
        const cities = response.data;
        dispatch(fetchCitiesSuccess(cities));
      })
      .catch((error) => {
        dispatch(fetchCityFailure(error.message));
      });
  };
};

export const deleteCity = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(deleteOneCity(id));
    axios.delete(`http://localhost:5000/deleteOneCity/${id}`);
  };
};

export const saveCity = (payload: {}) => {
  return (dispatch: Dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:5000/saveCity",
      data: payload,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
};
