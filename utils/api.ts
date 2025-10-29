import axios from "./axios";

export const fetchRides = async () => {
    try {
        const res = await axios.get("/rides/");
        return res.data;
    } catch {
        return [];
    }
};
