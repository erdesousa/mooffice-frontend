import React from 'react';
import { PieChart, Gauge, ChartNoAxesColumn, Cog, UserPlus } from 'lucide-react';

interface MainContentProps {
  activeItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem }) => {
  // Renderiza diferentes conteúdos com base no item ativo
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* KPIs */}
              <div className="bg-gray-800 rounded-lg p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Total de Medidores</h2>
                <div className="flex items-center">
                  <Gauge className="w-8 h-8 mr-2 text-violet-500" />
                  <span className="text-2xl font-bold">42</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Leituras Hoje</h2>
                <div className="flex items-center">
                  <ChartNoAxesColumn className="w-8 h-8 mr-2 text-violet-500" />
                  <span className="text-2xl font-bold">128</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Alertas</h2>
                <div className="flex items-center">
                  <Cog className="w-8 h-8 mr-2 text-red-500" />
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
            </div>
            {/* Gráfico */}
            <div className="bg-gray-800 rounded-lg p-4 text-white h-64 flex items-center justify-center">
              <PieChart className="w-12 h-12 mr-3 text-violet-500" />
              <span className="text-xl">Gráfico de Consumo (Exemplo)</span>
            </div>
          </div>
        );
      case 'Medidores':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Medidores</h1>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <p>Lista de medidores e suas informações</p>
            </div>
          </div>
        );
      case 'Leituras':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Leituras</h1>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <p>Histórico de leituras e gráficos</p>
            </div>
          </div>
        );
      case 'Limites':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Limites</h1>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <p>Configuração de limites e alertas</p>
            </div>
          </div>
        );
      case 'Criar admin':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Criar Administrador</h1>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <p>Formulário para criar novos administradores</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Selecione uma opção</h1>
            <p>Escolha uma opção no menu lateral para visualizar o conteúdo.</p>
          </div>
        );
    }
  };

  return (
    <div className="text-white w-full h-full overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default MainContent;