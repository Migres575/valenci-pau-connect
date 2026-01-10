import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Sword, BookOpen, Crown } from "lucide-react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  details: string;
  category: "politic" | "social" | "militar" | "cultural";
  image?: string;
  person?: string;
}

const events: TimelineEvent[] = [
  {
    year: 1874,
    title: "Pronunciament de Sagunt",
    description: "Martínez Campos proclama Alfons XII com a rei, iniciant la Restauració borbònica.",
    details: "El general Arsenio Martínez Campos es pronuncia a Sagunt (29 de desembre) proclamant Alfons XII com a rei d'Espanya. Acaba el Sexenni Democràtic i comença la Restauració.",
    category: "politic",
    person: "Alfonso XII",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Alfonso_XII_de_Espa%C3%B1a%2C_by_Gonz%C3%A1lez.jpg/220px-Alfonso_XII_de_Espa%C3%B1a%2C_by_Gonz%C3%A1lez.jpg"
  },
  {
    year: 1876,
    title: "Constitució de 1876",
    description: "S'aprova la Constitució canovista amb sobirania compartida.",
    details: "Estableix el marc legal de la Restauració: sobirania compartida Rei-Corts i flexibilitat política.",
    category: "politic",
    person: "Cánovas del Castillo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/C%C3%A1novas_%28Kaulak%29.jpg/220px-C%C3%A1novas_%28Kaulak%29.jpg"
  },
  {
    year: 1898,
    title: "Desastre del 98",
    description: "Pèrdua de Cuba, Puerto Rico i Filipines.",
    details: "La derrota davant els EUA suposa la fi de l'imperi colonial i l'inici del regeneracionisme.",
    category: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Destruction_of_Admiral_Cervera%27s_fleet_at_Santiago_de_Cuba.png/300px-Destruction_of_Admiral_Cervera%27s_fleet_at_Santiago_de_Cuba.png"
  },
  {
    year: 1909,
    title: "Setmana Tràgica",
    description: "Revolta popular a Barcelona contra la guerra del Marroc.",
    details: "Protestes per la lleva de reservistes que acaben en una forta repressió i la caiguda de Maura.",
    category: "social",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cremant_convents._Setmana_Tr%C3%A0gica%2C_Barcelona%2C_1909.jpg/300px-Cremant_convents._Setmana_Tr%C3%A0gica%2C_Barcelona%2C_1909.jpg"
  },
  {
    year: 1923,
    title: "Colp de Primo de Rivera",
    description: "Inici de la Dictadura amb el suport d'Alfons XIII.",
    details: "El capità general de Catalunya suspèn la Constitució i dissol les Corts.",
    category: "politic",
    person: "Primo de Rivera",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PrimoRivera-Franzen.jpg/220px-PrimoRivera-Franzen.jpg"
  },
  {
    year: 1931,
    title: "Proclamació de la II República",
    description: "El 14 d'abril es proclama la República i el rei marxa a l'exili.",
    details: "Després de les eleccions municipals, el suport a la monarquia s'enfonsa.",
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Proclamaci%C3%B3n_de_la_II_Rep%C3%BAblica_%28Puerta_del_Sol%2C_Madrid%29.jpg/300px-Proclamaci%C3%B3n_de_la_II_Rep%C3%BAblica_%28Puerta_del_Sol%2C_Madrid%29.jpg"
  }
];

const categories = {
  politic: { label: "Polític", color: "bg-blue-600", icon: Crown },
  social: { label: "Social", color: "bg-orange-500", icon: Users },
  militar: { label: "Militar", color: "bg-red-700", icon: Sword },
  cultural: { label: "Cultural", color: "bg-emerald-600", icon: BookOpen },
};

export function CronologiaSection() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <section className="py-8 px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Cronologia Interactiva</h2>
        <p className="text-muted-foreground">Principals esdeveniments (1874-1931)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => {
          const cat = categories[event.category];
          const Icon = cat.icon;
          return (
            <Card 
              key={`${event.year}-${event.title}`}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className={`h-2 ${cat.color}`} />
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {event.image && (
                    <img src={event.image} className="w-16 h-16 object-cover rounded shadow" alt="" />
                  )}
                  <div>
                    <span className="font-bold text-primary">{event.year}</span>
                    <h3 className="font-bold leading-tight">{event.title}</h3>
                    <Badge variant="outline" className="mt-1 text-[10px] uppercase">
                      {cat.label}
                    </Badge>
                  </div>
                </div>
                {selectedEvent === event && (
                  <p className="mt-3 text-sm text-muted-foreground border-t pt-2 italic">
                    {event.details}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
