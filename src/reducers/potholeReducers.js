import {
  GET_POTHOLE_DATA_REQUEST,
  GET_POTHOLE_DATA_SUCCESS,
  GET_POTHOLE_DATA_FAIL,
  UPDATE_POTHOLE_REQUEST,
  UPDATE_POTHOLE_SUCCESS,
  UPDATE_POTHOLE_FAIL,
  SEND_IMAGE_REQUEST,
  SEND_IMAGE_SUCCESS,
  SEND_IMAGE_FAIL,
} from "../constants/potholeConstants";

export const getPotholeReducer = (state = { pothole: {} }, action) => {
  switch (action.type) {
    case "GET_POTHOLE_DATA_REQUEST":
      return { loading: true, pothole: {} };
    case "GET_POTHOLE_DATA_SUCCESS":
      return { loading: false, pothole: action.payload };
    case "GET_POTHOLE_DATA_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatePotholeReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_POTHOLE_REQUEST":
      return { loading: true };
    case "UPDATE_POTHOLE_SUCCESS":
      return { loading: false, pothole: action.payload };
    case "UPDATE_POTHOLE_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const sendImageReducer = (state = { imageDataRed: {} }, action) => {
  switch (action.type) {
    case "SEND_IMAGE_REQUEST":
      return {
        loadingImgRed: true,
        successImgRed: false,
        imageDataRed: { },
      };
    case "SEND_IMAGE_SUCCESS":
      return {
        loadingImgRed: false,
        successImgRed: true,
        imageDataRed: action.payload,
      };
    case "SEND_IMAGE_FAIL":
      return {
        loadingImgRed: false,
        successImgRed: false,
        errorImgRed: action.payload,
      };
    default:
      return state;
  }
};
