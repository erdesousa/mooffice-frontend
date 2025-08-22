import { useEmpresaStore } from "../../store/useEmpresaStore";

type EmpresaIdType = ReturnType<typeof useEmpresaStore.getState>["empresaId"];

export interface AdminInput {
    nome: string;
    email: string;
    senha: string;
};

export interface Admin {
    fkEmpresa: EmpresaIdType;
    nome: string;
    email: string;
    senha: string;
};
