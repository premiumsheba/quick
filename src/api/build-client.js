import { API_URL, SERVER_API_URL } from "@/config";
import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server

    return axios.create({
      baseURL: `${SERVER_API_URL}`,
      headers: req.headers,
    });
  } else {
    // We must be on the browser

    return axios.create({
      baseUrl: API_URL,
      withCredentials: true,
    });
  }
};
