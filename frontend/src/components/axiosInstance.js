import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   REQUEST INTERCEPTOR
   ========================= */
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

/* =========================
   RESPONSE INTERCEPTOR
   ========================= */
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
    // Optional: global error handling
    // if (error.response) {
    //   if (error.response.status === 401) {
    //     console.error("Unauthorized - Token expired");
        // optional redirect to login
        // window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
