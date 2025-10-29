import axios from "axios";

export async function registerUser(username: string, email: string, password: string) {
    try {
        const res = await axios.post("http://127.0.0.1:8000/api/auth/register/", {
            username,
            email,
            password,
        });
        return res.data;
    } catch (err: any) {
        throw err.response?.data || { error: "Network Error" };
    }
}

export async function loginUser(username: string, password: string) {
    try {
        const res = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
            username,
            password,
        });
        return res.data;
    } catch (err: any) {
        throw err.response?.data || { error: "Network Error" };
    }
}
