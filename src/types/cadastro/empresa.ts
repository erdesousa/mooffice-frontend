export interface EnterpriseInput {
    nome_empresa: string;
    cnpj: string;
    telefone: string;
    email: string;
    endereco: string;
    cidade: string;
    estado: string;
};

export interface Enterprise {
    id_empresa: string;
    nome_empresa: string;
    cnpj: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
}