import { create } from "zustand";

interface EmpresaState {
    empresaId: string | null;
    setEmpresaId: (id: string | null) => void;
}

export const useEmpresaStore = create<EmpresaState>((set) => ({
    empresaId: localStorage.getItem("id_empresa") || null,
    setEmpresaId: (id) => {
        localStorage.setItem("id_empresa", id || "");
        set({ empresaId: id });
    },
}));
