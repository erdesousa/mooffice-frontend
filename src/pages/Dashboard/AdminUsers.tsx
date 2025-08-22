import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { Users, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import type { AdminInput } from "../../types/cadastro/admin";
import { cadastroAdmin } from "../../api/authApi";

export default function AdminUsers() {

  const { register, handleSubmit, formState: { errors } } = useForm<AdminInput>();
  const navigate = useNavigate();

  const onSubmit = async (data: AdminInput) => {
    try {
      const response = await cadastroAdmin(data);

      console.log("Admin cadastrado com sucesso:", response);

      navigate("/dashboard");
    } catch (error) {
      console.log(data);
      console.log('Erro no cadastro:', error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-5">
          <Users className="h-6 w-6 text-purple-600" />
          <h1 className="text-3xl font-bold tracking-tight text-white">Criar Usuário Admin</h1>
        </div>
        <p className="text-muted-foreground text-white/50">
          Cadastre um novo usuário administrador do sistema
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl bg-card rounded-lg p-6 border border-zinc-900">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            {/* <UserPlus className="h-5 w-5 text-violet-600" /> */}
            <h2 className="text-xl font-semibold text-white">Dados do Usuário</h2>
          </div>
          <p className="text-muted-foreground text-white/50">
            Preencha as informações do novo administrador
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Nome completo"
            {...register('nome', { required: true })}
          />
          {errors?.nome?.type === 'required' && <p className="text-red-700 mt-2 text-xs">Nome é obrigatório</p>}

          <Input
            type="text"
            label="E-mail"
            {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
          />
          {errors?.email?.type === 'required' && <p className="text-red-700 mt-2 text-xs">E-mail é obrigatório</p>}
          {errors?.email?.type === 'validate' && <p className="text-red-700 mt-2 text-xs">E-mail inválido</p>}

          <Input
            type="password"
            label="Senha"
            autoComplete="new-password"
            {...register('senha', { required: true })}
          />
          {errors?.senha?.type === 'required' && <p className="text-red-700 mt-2">Senha é obrigatória</p>}

          <div className="flex justify-start space-x-4 mt-8">
            <Button type="submit">
              <UserPlus className="mr-2 h-4 w-4" />
              Criar Usuário
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}