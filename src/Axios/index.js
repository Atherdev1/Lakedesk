import axios from "axios";

const Axios = axios.create({
  baseURL: "http://ec2-18-209-175-98.compute-1.amazonaws.com:8080",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default Axios;
