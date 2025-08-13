import React from "react";

interface StateSelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    label: string;
}

const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export default function StateSelect({ value, onChange, name, label }: StateSelectProps) {
    return (
        <div className="mt-4">
            <div>
                <div className="group relative rounded-lg border focus-within:border-violet-500 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        {label}
                    </label>
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="block w-full border-0 bg-transparent p-0 text-sm focus:outline-none focus:ring-0 text-foreground"
                    >
                        <option value="" className="text-black bg-white">Selecione</option>
                        {estados.map(uf => (
                            <option key={uf} value={uf} className="text-black bg-white">{uf}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}