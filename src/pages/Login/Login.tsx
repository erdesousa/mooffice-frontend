import logo from '../../assets/Group 2260.svg';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useForm } from "react-hook-form";
import validator from 'validator';
import type { UserInput } from '../../types/cadastro/usuario';
import { login } from '../../api/authApi';
import { Link } from 'react-router-dom';

export default function Login() {

    const { register, handleSubmit, formState: {errors} } = useForm<UserInput>();
 
    const onSubmit = async (data: UserInput) => {
        try {
            const response = await login(data);
            console.log('Login realizado:', response);
        } catch (error) {
            console.log('Erro no login:', error);
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
                <div className="relative -mb-px h-px w-full"></div>
                <div className="mx-5">
                    <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold">Sign in</h3>
                        <p className="mt-1.5 text-sm font-medium text-white/50">
                            Bem-vindo de volta, insira suas credenciais para continuar.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                label="E-mail"
                                {...register('email', {required: true, validate: (value) => validator.isEmail(value)})}
                            />
                            {errors?.email?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Email é obrigatório</p>}
                            {errors?.email?.type === 'validate' && <p className="text-red-700 mt-2 text-xs">Email inválido</p>}
                            <Input
                                type="password"
                                label="Senha"
                                autoComplete="new-password"
                                {...register('senha', {required: true})}
                            />
                            {errors?.senha?.type === 'required' && <p className="text-red-700 mt-2">Senha é obrigatória</p>}

                            <div className="mt-4 flex items-center justify-start gap-x-2">
                                <Button variant="secondary" as="a" href="/register">
                                    <Link to="/register">Register</Link>
                                </Button>
                                <Button type="submit" variant="primary">Log in</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}