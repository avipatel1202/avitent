import axios from "axios";

const instance = axios.create({ baseURL: "http://192.168.29.223:3000" });

export default instance;
