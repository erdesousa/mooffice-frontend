import api from './axiosConfig';

interface loginData {
    email: string;
    senha: string;
};

interface User {
    id_usuario: string;
    nome: string;
    email: string;
    senha: string;
    data_cadastro: string;
    fk_empresa: string;
};

interface responseLogin {
    usuario: User;
};

export const login = async (data: loginData): Promise<responseLogin> => {
    const response = await api.post<responseLogin>('/usuarios/login', data);
    return response.data;
};
