import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TemariSection } from "@/components/sections/TemariSection";
import { CronologiaSection } from "@/components/sections/CronologiaSection";
import { GlossariSection } from "@/components/sections/GlossariSection";
import { AnalistaSection } from "@/components/sections/AnalistaSection";
import { ConsellsSection } from "@/components/sections/ConsellsSection";
import { Book, GraduationCap } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("temari");

  const renderSection = () => {
    switch (activeSection) {
      case "temari":
        return <TemariSection />;
      case "cronologia":
        return <CronologiaSection />;
      case "glossari":
        return <GlossariSection />;
      case "analista":
        return <AnalistaSection />;
      case "consells":
        return <ConsellsSection />;
      default:
        return <TemariSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Hero Section */}
      {activeSection === "temari" && (
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Història d'Espanya
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              La Restauració Borbònica (1874-1931)
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                <Book className="h-4 w-4" />
                2n Batxillerat
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">
                Preparació PAU
              </span>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Material educatiu per a la preparació de la PAU d'Història d'Espanya
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Contingut redactat en valencià normatiu · 2n Batxillerat
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
