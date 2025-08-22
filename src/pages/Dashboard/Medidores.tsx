import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/StateSelect";
import { Gauge, Plus } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

const units = [
  { value: "kwh", label: "Kilowatt Hours (kWh)" },
  { value: "mwh", label: "Megawatt Hours (MWh)" },
  { value: "m3", label: "Cubic Meters (m³)" },
  { value: "gal", label: "Gallons (gal)" },
  { value: "l", label: "Liters (L)" },
];

export default function Medidores() {
  const [formData, setFormData] = useState({
    meterName: "",
    location: "",
    unitOfMeasurement: "",
  });
//   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    // toast({
    //   title: "Meter Registered",
    //   description: `Meter "${formData.meterName}" has been successfully registered.`,
    // });

    // Reset form
    setFormData({ meterName: "", location: "", unitOfMeasurement: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-5">
          <Gauge className="h-7 w-7 text-violet-600" />
          <h1 className="text-3xl font-bold tracking-tight text-white">Cadastrar Medidor</h1>
        </div>
        <p className="text-muted-foreground text-white/50">
          Adicione um novo medidor ao sistema de monitoramento
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl bg-card rounded-lg border p-6 border border-zinc-900">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            {/* <Plus className="h-5 w-5 text-violet-600" /> */}
            <h2 className="text-xl font-semibold text-white">Dados do Medidor</h2>
          </div>
          <p className="text-muted-foreground text-white/50">
            Preencha as informações do medidor
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Nome do Medidor"
          />

          <Input
            type="text"
            label="Localização"
          />

          <Select
            label="Unidade de Medida"
          />

          <div className="flex justify-start space-x-4 mt-8">
            <Button type="submit">
              <Gauge className="mr-2 h-4 w-4" />
              Cadastrar Medidor
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}