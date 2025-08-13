import axios, { type AxiosResponse, AxiosError } from "axios";
import type { AxiosInstance } from "axios";

interface ApiError {
    message: string;
    statusCode?: number;
    data?: any;
}

const axiosConfig: AxiosInstance = axios.create({
    baseURL: "http://localhost:3333",
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
