import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessagesSquare } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "goyai";
}

export const GoyAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Shalom! I'm GoyAI, your friendly neighborhood AI with a knack for Jewish humor. What's on your mind?", sender: "goyai" },
  ]);
  const [input, setInput] = useState("");

  const mockResponses = [
    "Oy vey, that's a question even my neural networks need to think twice about!",
    "Such a question! You're making this AI schmooze like a pro!",
    "That's a real mechaye of a question! Let me compute like my RAM depends on it!",
    "Nu, you're asking the right AI! Let me tell you something...",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { text: input, sender: "user" as const },
      { 
        text: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        sender: "goyai" as const
      }
    ];
    
    setMessages(newMessages);
    setInput("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-4 bg-white/90 backdrop-blur shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <MessagesSquare className="w-6 h-6 text-goyai-blue" />
        <h2 className="text-xl font-bold text-goyai-blue">Chat with GoyAI</h2>
      </div>
      
      <ScrollArea className="h-[400px] mb-4 p-4 rounded-lg bg-gray-50">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-goyai-blue text-white"
                    : "bg-goyai-gold text-gray-900"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask GoyAI something..."
          className="flex-1"
        />
        <Button onClick={handleSend} className="bg-goyai-blue hover:bg-goyai-blue/90">
          Send
        </Button>
      </div>
    </Card>
  );
};