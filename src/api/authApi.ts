import type { EnterpriseInput, Enterprise } from '../types/cadastro/empresa';
import type { UserInput, User } from '../types/cadastro/usuario';
import type { ApiResponse } from '../types/api/response';
import { ENDPOINTS } from './endpoints';
import api from './axiosConfig';

export const login = async (data: UserInput): Promise<ApiResponse<User>> => {
    const response = await api.post<ApiResponse<User>>(ENDPOINTS.LOGIN_USER, data);
    return response.data;
};

export const register = async (data: EnterpriseInput): Promise<ApiResponse<Enterprise>> => {
    const response = await api.post<ApiResponse<Enterprise>>(ENDPOINTS.REGISTER_ENTERPRISE, data);
    return response.data;
};
