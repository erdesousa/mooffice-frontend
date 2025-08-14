import api from './axiosConfig';

interface loginData {
    email: string;
    senha: string;
};

interface registerData {
    nome_empresa: string;
    cnpj: string;
    telefone: string;
    email: string;
    endereco: string;
    cidade: string;
    estado: string;
};

interface User {
    id_usuario: string;
    nome: string;
    email: string;
    senha: string;
    data_cadastro: string;
    fk_empresa: string;
};

interface Enterprise {
    id_empresa: string;
    nome_empresa: string;
    cnpj: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
}

interface responseLogin {
    usuario: User;
};

interface responseRegister {
    enterprise: Enterprise;
};

export const login = async (data: loginData): Promise<responseLogin> => {
    const response = await api.post<responseLogin>('/usuarios/login', data);
    return response.data;
};

export const register = async (data: registerData): Promise<responseRegister> => {
    const response = await api.post<responseRegister>('/empresas/cadastrar', data);
    return response.data;
};
