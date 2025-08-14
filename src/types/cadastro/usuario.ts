export interface UserInput {
    email: string;
    senha: string;
};


export interface User {
    id_usuario: string;
    nome: string;
    email: string;
    senha: string;
    data_cadastro: string;
    fk_empresa: string;
};