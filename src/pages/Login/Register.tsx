import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import StateSelect from "../../components/ui/StateSelect";
import { Link } from "react-router-dom";
import logo from "../../assets/Group 2260.svg";
import { register } from "../../api/authApi";

export default function Register() {
    const [form, setForm] = useState({
        nome_empresa: '',
        cnpj: '',
        telefone: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '' 
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await register(form);

            console.log("Empresa cadastrada com sucesso:", response);
        } catch (err: any) {
            setError(err.message || "Erro ao cadastrar empresa");
        }
    };

    return (
        <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
            <a href="#">
                <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                    <div>
                        <img src={logo} alt="" className="w-45" />
                    </div>
                </div>
            </a>
            <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                <div className="mx-5">
                    <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold">Company Registration</h3>
                        <p className="mt-1.5 text-sm font-medium text-white/50">
                            Crie sua conta e comece a usar nossa plataforma
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="nome_empresa"
                                label="Nome da Empresa"
                                value={form.nome_empresa}
                                onChange={handleChange}
                            />
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Input
                                        type="text"
                                        name="cnpj"
                                        label="CNPJ"
                                        value={form.cnpj}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Input
                                    type="text"
                                    name="telefone"
                                    label="Telefone"
                                    value={form.telefone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Input
                                type="text"
                                name="email"
                                label="Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="endereco"
                                label="Endereço"
                                value={form.endereco}
                                onChange={handleChange}
                            />
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Input
                                        type="text"
                                        name="cidade"
                                        label="Cidade"
                                        value={form.cidade}
                                        onChange={handleChange}
                                    />
                                </div>
                                <StateSelect
                                    name="estado"
                                    label="Estado"
                                    value={form.estado}
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="mt-6 flex items-center gap-x-2">
                                <Button type="submit" variant="primary">
                                    Cadastrar
                                </Button>
                                <Button variant="secondary" as="a">
                                    <Link to="/">Já tem uma conta? Faça log in</Link>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}