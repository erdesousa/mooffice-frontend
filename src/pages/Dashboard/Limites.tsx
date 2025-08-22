import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/StateSelect";
// import Textarea from "@/components/ui/Textarea";
import { Settings, AlertTriangle } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

const limitTypes = [
    { value: "daily", label: "Daily Limit" },
    { value: "weekly", label: "Weekly Limit" },
    { value: "monthly", label: "Monthly Limit" },
    { value: "annual", label: "Annual Limit" },
];

export default function Limite() {
    const [formData, setFormData] = useState({
        limitType: "",
        minimumValue: "",
        maximumValue: "",
        description: "",
    });
    // const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate form submission
        const limitTypeLabel = limitTypes.find(type => type.value === formData.limitType)?.label || formData.limitType;
        // toast({
        //     title: "Consumption Limit Created",
        //     description: `${limitTypeLabel} with range ${formData.minimumValue} - ${formData.maximumValue} has been successfully configured.`,
        // });

        // Reset form
        setFormData({ limitType: "", minimumValue: "", maximumValue: "", description: "" });
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
                <div className="flex items-center space-x-2">
                    <Settings className="h-8 w-8 text-violet-600" />
                    <h1 className="text-3xl font-bold tracking-tight text-white">Configurar Limite</h1>
                </div>
                <p className="text-muted-foreground text-white/50">
                    Defina limites de consumo para monitoramento
                </p>
            </div>

            {/* Form Card */}
            <div className="max-w-2xl bg-card rounded-lg border p-6 border border-zinc-900">
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                        {/* <AlertTriangle className="h-5 w-5 text-violet-600" /> */}
                        <h2 className="text-xl font-semibold text-white">Limite de Consumo</h2>
                    </div>
                    <p className="text-muted-foreground text-white/50">
                        Configure os parâmetros do limite
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Select
                        label="Tipo de Limite"
                    />

                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            type="text"
                            label="Valor Mínimo"
                        />

                        <Input
                            type="text"
                            label="Valor Máximo"
                        />
                    </div>

                    {/* <Textarea
                        label="Description"
                        placeholder="Describe the purpose and conditions of this consumption limit..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                        rows={4}
                    /> */}

                    <div className="flex justify-start space-x-4 mt-8">
                        <Button type="submit">
                            <Settings className="mr-2 h-4 w-4" />
                            Criar Limite
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}