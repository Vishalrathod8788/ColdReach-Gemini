import axios from "axios";

// Compute baseURL with a safe fallback and log it for debugging on deployed site
const getBaseURL = () => {
  // Vite injects VITE_API_BASE_URL at build time
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl) return envUrl;

  // Allow an optional runtime override (useful for testing)
  if (typeof window !== "undefined" && window.__API_BASE__)
    return window.__API_BASE__;

  // Last resort: try to use same host + /api (useful for local dev previews)
  if (typeof window !== "undefined") {
    const port = window.location.port ? `:${window.location.port}` : "";
    return `${window.location.protocol}//${window.location.hostname}${port}/api`;
  }

  return undefined;
};

const baseURL = getBaseURL();
// Helpful console message for debugging deployed builds
console.info("[API] baseURL =", baseURL);

const API = axios.create({
  baseURL,
  withCredentials: true, // Agar aap cookies ya sessions use kar rahe hain
});

export default API;
