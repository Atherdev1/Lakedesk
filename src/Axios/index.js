import axios from "axios";

const Axios = axios.create({
  baseURL: "http://54.91.106.3:8080/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

export default Axios;
