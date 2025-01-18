import { GoyAIChat } from "@/components/GoyAIChat";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-goyai-gold/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-goyai-blue mb-4 animate-float">
          Welcome to GoyAI
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          The AI with jokes as sharp as a bagel knife!
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <Button className="bg-goyai-blue hover:bg-goyai-blue/90">
            Buy Token
          </Button>
          <Button variant="outline" className="border-goyai-blue text-goyai-blue">
            Join Community
          </Button>
        </div>
      </section>

      {/* Chat Section */}
      <section className="container mx-auto px-4 py-16">
        <GoyAIChat />
      </section>

      {/* Tokenomics Section */}
      <section className="container mx-auto px-4 py-16">
        <Tokenomics />
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-16">
        <Roadmap />
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-goyai-blue mb-8">
          Join Our Community
        </h2>
        <div className="flex justify-center gap-6">
          <Button variant="outline" className="gap-2 hover:bg-goyai-gold/20" asChild>
            <a href="https://x.com/GOYAI_ONSOL" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
          </Button>
          <Button variant="outline" className="gap-2 hover:bg-goyai-gold/20">
            <MessageSquare className="w-5 h-5" />
            Discord
          </Button>
          <Button variant="outline" className="gap-2 hover:bg-goyai-gold/20">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-goyai-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 GoyAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;