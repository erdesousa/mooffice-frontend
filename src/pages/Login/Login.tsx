import logo from '../../assets/Group 2260.svg';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import { login } from '../../api/authApi';
import { Link } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await login(form);
            // Faça o que quiser com response (ex: salvar usuário, redirecionar, etc)
            console.log('Login realizado:', response);
        } catch (err: any) {
            setError(err.message || 'Erro ao fazer login');
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
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="email"
                                label="E-mail"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <Input
                                type="password"
                                name="senha"
                                label="Senha"
                                value={form.senha}
                                onChange={handleChange}
                            />

                            {error && (
                                <div className="text-red-400 text-sm mt-2">{error}</div>
                            )}

                            <div className="mt-4 flex items-center justify-start gap-x-2">
                                <Button variant="secondary" as="a" href="/register">
                                    <Link to="/register">Register</Link>
                                </Button>
                                <Button type="submit" variant="primary">
                                    <Link to="">Log in</Link>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}