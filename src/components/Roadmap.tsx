import { Card } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Launch & Community Building",
    items: ["Website Launch", "Token Launch", "Community Growth"],
    completed: true,
  },
  {
    phase: "Phase 2",
    title: "AI Integration",
    items: ["Advanced Chat Features", "Joke Generation", "Community Voting"],
    completed: false,
  },
  {
    phase: "Phase 3",
    title: "NFT Collection",
    items: ["Jewish Meme NFTs", "Exclusive Benefits", "Marketplace Launch"],
    completed: false,
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Expansion",
    items: ["Cross-chain Integration", "Mobile App", "Partner Collaborations"],
    completed: false,
  },
];

export const Roadmap = () => {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur shadow-xl">
      <h2 className="text-2xl font-bold text-center text-goyai-blue mb-6">
        Roadmap
      </h2>
      <div className="space-y-8">
        {roadmapItems.map((phase, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-4">
              {phase.completed ? (
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              ) : (
                <Circle className="w-6 h-6 text-gray-400 mt-1" />
              )}
              <div>
                <h3 className="text-xl font-semibold text-goyai-blue">
                  {phase.phase}: {phase.title}
                </h3>
                <ul className="mt-2 space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index < roadmapItems.length - 1 && (
              <div className="absolute left-3 top-6 w-[2px] h-[calc(100%+2rem)] bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};