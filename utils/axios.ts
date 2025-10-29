import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/", // Backend URL
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // for CSRF/cookies
});

export default instance;
