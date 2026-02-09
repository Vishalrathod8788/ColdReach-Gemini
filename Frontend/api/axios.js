import axios from "axios";

const API = axios.create({
  // import.meta.env automatically .env se URL utha lega
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Agar aap cookies ya sessions use kar rahe hain
});

export default API;
