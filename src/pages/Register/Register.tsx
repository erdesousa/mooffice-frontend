import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import StateSelect from "../../components/ui/StateSelect";
import { useForm } from "react-hook-form";
import validator from 'validator';
import { Link, useNavigate } from "react-router-dom";
import type { EnterpriseInput } from '../../types/cadastro/empresa';
import logo from "../../assets/Group 2260.svg";
import { cadastro } from "../../api/authApi";
import { useEmpresaStore } from "../../store/useEmpresaStore";

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm<EnterpriseInput>();

    const navigate = useNavigate();
    const setEmpresaId = useEmpresaStore((state) => state.setEmpresaId);

    const onSubmit = async (data: EnterpriseInput) => {
        try {
            const response = await cadastro(data);

            console.log("Empresa cadastrada com sucesso:", response);
            
            setEmpresaId(response.data.id_empresa);
            navigate("/dashboard");
        } catch (error) {
            console.log('Erro no cadastro:', error);
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                label="Nome da Empresa"
                                {...register('nome_empresa', { required: true })}
                            />
                            {errors?.nome_empresa?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Nome da empresa é obrigatório</p>}

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Input
                                        type="text"
                                        label="CNPJ"
                                        {...register('cnpj', { required: true })}
                                    />
                                    {errors?.cnpj?.type === 'required' && <p className="text-red-700 mt-2 text-xs">CNPJ é obrigatório</p>}
                                </div>
                                <Input
                                    type="text"
                                    label="Telefone"
                                    {...register('telefone', { required: true })}
                                />
                                {errors?.telefone?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Telefone é obrigatório</p>}
                            </div>

                            <Input
                                type="text"
                                label="Email"
                                {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                            />
                            {errors?.email?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Email é obrigatório</p>}
                            {errors?.email?.type === 'validate' && <p className="text-red-700 mt-2 text-xs">Email inválido</p>}

                            <Input
                                type="text"
                                label="Endereço"
                                {...register('endereco', { required: true })}
                            />
                            {errors?.endereco?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Endereço é obrigatório</p>}

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Input
                                        type="text"
                                        label="Cidade"
                                        {...register('cidade', { required: true })}
                                    />
                                    {errors?.cidade?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Cidade é obrigatória</p>}
                                </div>
                                <StateSelect
                                    label="Estado"
                                    {...register('estado', {
                                        required: true, validate: (value) => {
                                            return value !== "0"
                                        }
                                    })}
                                />
                                {errors?.estado?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Estado é obrigatório</p>}
                                {errors?.estado?.type === 'validate' && <p className="text-red-700 mt-2 text-xs">Estado inválido</p>}
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