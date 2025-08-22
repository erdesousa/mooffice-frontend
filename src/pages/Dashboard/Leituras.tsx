import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/StateSelect";
import { Activity, BarChart3 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// Mock data for meter selection
const availableMeters = [
  { id: "meter-1", name: "Main Building Electricity Meter", location: "Building A - Basement", unit: "kWh" },
  { id: "meter-2", name: "Water Meter - North Wing", location: "Building B - Utility Room", unit: "m³" },
  { id: "meter-3", name: "Gas Meter - Central", location: "Main Campus - Gas Station", unit: "m³" },
];

export default function Leituras() {
  const [formData, setFormData] = useState({
    meterId: "",
    consumptionValue: "",
    readingDate: new Date().toISOString().split('T')[0],
  });
  //   const { toast } = useToast();

  const selectedMeter = availableMeters.find(meter => meter.id === formData.meterId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    const meterName = selectedMeter?.name || "Unknown Meter";
    // toast({
    //   title: "Reading Recorded",
    //   description: `Consumption reading of ${formData.consumptionValue} ${selectedMeter?.unit || ''} recorded for ${meterName}.`,
    // });

    // Reset form
    setFormData({
      meterId: "",
      consumptionValue: "",
      readingDate: new Date().toISOString().split('T')[0]
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const meterOptions = availableMeters.map(meter => ({
    value: meter.id,
    label: `${meter.name} (${meter.location})`
  }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-violet-600" />
          <h1 className="text-3xl font-bold tracking-tight text-white">Registrar Leitura</h1>
        </div>
        <p className="text-muted-foreground text-white/50">
          Adicione uma nova leitura de consumo ao sistema
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl bg-card rounded-lg border p-6 border border-zinc-900">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            {/* <BarChart3 className="h-5 w-5 text-violet-600" /> */}
            <h2 className="text-xl font-semibold text-white">Leitura de Consumo</h2>
          </div>
          <p className="text-muted-foreground text-white/50">
            Informe o valor atual de consumo
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Select
            label="Selecione o Medidor"
          />

          <Input
            type="text"
            label="Valor de Consumo"
          />

          <Input
            type="text"
            label="Data da Leitura"
          />

          <div className="flex justify-start space-x-4 mt-8">
            <Button
              type="submit"
            >
              <Activity className="mr-2 h-4 w-4" />
              Registrar Leitura
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}