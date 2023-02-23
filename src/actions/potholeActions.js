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

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const getPothole = (lon, lat) => async (dispatch) => {
  try {
    dispatch({ type: GET_POTHOLE_DATA_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    console.log("Action:", lon, lat);
    const { data } = await axios.post(
      "/api/getpothole/",
      {
        lon: lon,
        lat: lat,
      },
      config
    );

    dispatch({ type: GET_POTHOLE_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_POTHOLE_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePothole = () => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_POTHOLE_REQUEST });

    const { data } = await axios.get("/api/updatepothole/");

    dispatch({ type: UPDATE_POTHOLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_POTHOLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sendImage = (lat, lon, imageData) => async (dispatch) => {
  try {
    dispatch({ type: SEND_IMAGE_REQUEST });
    console.log("Image Sending...");
    const { data } = await axios.post("/api/image/", {
      lat: lat,
      lon: lon,
      image: imageData,
    });
    dispatch({
      type: SEND_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEND_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
