import axios, { type AxiosResponse, AxiosError } from "axios";
import type { AxiosInstance } from "axios";
import type { ApiError } from "../types/api/error";

const axiosConfig: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosConfig.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        const apiError: ApiError = {
            message: error.message,
            statusCode: error.response?.status,
            data: error.response?.data,
        };

        if (error.response?.data) {
            apiError.message = (error.response.data as any)?.message ||
                (error.response.data as any)?.error ||
                apiError.message;
        }
        
        return Promise.reject(apiError);
    }
);

export default axiosConfig;
