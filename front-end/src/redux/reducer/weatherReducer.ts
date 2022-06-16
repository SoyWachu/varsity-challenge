import { ACTION_TYPES, Action } from "../actionTypes/actionTypes";

export interface CityState {
  city: any[];
  cities?: any[];
  loading: boolean;
  error: string;
}

const initialState = {
  city: [],
  cities: [],
  loading: false,
  error: "",
} as CityState;

export const weatherReducer = (
  state: CityState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CITY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION_TYPES.FETCH_CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        city: action.payload,
        error: "",
      };
    }
    case ACTION_TYPES.FETCH_CITY_FAILURE: {
      return {
        ...state,
        loading: false,
        city: [],
        error: action.payload,
      };
    }

    case ACTION_TYPES.FETCH_CITIES_SUCCESS: {
      return {
        ...state,
        cities: action.payload,
        error: "",
        loading: false,
      };
    }

    case ACTION_TYPES.DELETE_ONE_CITY: {
      return {
        ...state,
        cities: state.cities?.filter((item) => item.city_id !== action.payload),
      };
    }

    default:
      return state;
  }
};
