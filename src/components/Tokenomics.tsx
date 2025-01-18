import { Card } from "@/components/ui/card";

const data = [
  { name: "Community Rewards", value: 30 },
  { name: "Development", value: 20 },
  { name: "Marketing", value: 15 },
  { name: "Team", value: 15 },
  { name: "Liquidity", value: 20 },
];

export const Tokenomics = () => {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur shadow-xl">
      <h2 className="text-2xl font-bold text-center text-goyai-blue mb-6">
        Tokenomics
      </h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-goyai-gold/10 transition-colors">
            <span className="font-medium text-goyai-blue">{item.name}</span>
            <span className="text-goyai-blue font-bold">{item.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};