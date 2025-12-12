import axios from "axios";
import { API_URL } from "../config";

export const getEvents = async () => {
  try {
    const res = await axios.get(`${API_URL}/events`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createEvent = async (eventData) => {
  try {
    const res = await axios.post(`${API_URL}/events`, eventData);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Similarly, you can create API calls for clubs, registration, login, etc.
