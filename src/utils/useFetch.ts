/* eslint-disable import/no-extraneous-dependencies */
import fetch from "node-fetch";

const API_BASE_URL = "https://api.example.com";

// Create a new instance of the fetch function with some default options
const fetchInstance = fetch.bind(null, API_BASE_URL, {
  headers: {
    "Content-Type": "application/json",
  },
});

export default fetchInstance;
