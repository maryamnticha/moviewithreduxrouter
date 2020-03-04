import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH_CHANGE,
  RATING_CHANGE
} from "../types";
export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};
export const deleteMovie = id => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};
export const editMovie = movie => {
  return {
    type: EDIT_MOVIE,
    payload: movie
  };
};
export const searchChange = payload => ({
  type: SEARCH_CHANGE,
  payload
});
export const ratingChange = payload => ({
  type: RATING_CHANGE,
  payload
});
