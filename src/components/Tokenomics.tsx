import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Community Rewards", value: 30 },
  { name: "Development", value: 20 },
  { name: "Marketing", value: 15 },
  { name: "Team", value: 15 },
  { name: "Liquidity", value: 20 },
];

const COLORS = ["#1E3A8A", "#FCD34D", "#E11D48", "#60A5FA", "#2563EB"];

export const Tokenomics = () => {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur shadow-xl">
      <h2 className="text-2xl font-bold text-center text-goyai-blue mb-6">
        Tokenomics
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} (${value}%)`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};