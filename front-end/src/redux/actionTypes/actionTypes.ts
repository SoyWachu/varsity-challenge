export enum ACTION_TYPES {
  FETCH_CITY_REQUEST = "FETCH_CITY_REQUEST",
  FETCH_CITY_FAILURE = "FETCH_CITY_FAILURE",
  FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS",
  DELETE_ONE_CITY = "DELETE_ONE_CITY",
  SAVE_ONE_CITY = "SAVE_ONE_CITY",
  FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS",
}

export type Action =
  | { type: ACTION_TYPES.FETCH_CITY_REQUEST }
  | { type: ACTION_TYPES.FETCH_CITY_FAILURE; payload: string }
  | { type: ACTION_TYPES.FETCH_CITY_SUCCESS; payload: any[] }
  | { type: ACTION_TYPES.DELETE_ONE_CITY; payload: string }
  | { type: ACTION_TYPES.SAVE_ONE_CITY; payload: any[] }
  | { type: ACTION_TYPES.FETCH_CITIES_SUCCESS; payload: any[] };
