import logo from '../../assets/Group 2260.svg';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Login() {
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
                        <form>
                            <Input type="text" name="username" label="E-mail" />
                            <Input type="password" name="password" label="Senha" />

                            <div className="mt-4 flex items-center justify-start gap-x-2">
                                <Button variant="secondary" as="a" href="/register">
                                    Register
                                </Button>
                                <Button type="submit" variant="primary">
                                    Log in
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}