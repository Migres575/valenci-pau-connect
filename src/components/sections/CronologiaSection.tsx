import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "politic" | "social" | "militar" | "cultural";
}

const events: TimelineEvent[] = [
  {
    year: 1874,
    title: "Pronunciament de Sagunt",
    description: "Martínez Campos proclama Alfons XII com a rei, iniciant la Restauració borbònica.",
    category: "politic",
  },
  {
    year: 1876,
    title: "Constitució de 1876",
    description: "S'aprova la Constitució canovista amb sobirania compartida i sufraggi censatari.",
    category: "politic",
  },
  {
    year: 1879,
    title: "Fundació del PSOE",
    description: "Pablo Iglesias funda el Partit Socialista Obrer Espanyol a Madrid.",
    category: "social",
  },
  {
    year: 1881,
    title: "Primer Govern Liberal",
    description: "Sagasta arriba al poder, iniciant-se el sistema de torn pacífic.",
    category: "politic",
  },
  {
    year: 1888,
    title: "Fundació de la UGT",
    description: "Es crea la Unió General de Treballadors, sindicat socialista.",
    category: "social",
  },
  {
    year: 1890,
    title: "Sufraggi Universal Masculí",
    description: "S'aprova el sufragi universal masculí, encara que manipulat pel caciquisme.",
    category: "politic",
  },
  {
    year: 1895,
    title: "Insurrecció Cubana",
    description: "Inici de la Guerra d'Independència de Cuba amb el Grito de Baire.",
    category: "militar",
  },
  {
    year: 1897,
    title: "Assassinat de Cánovas",
    description: "Antonio Cánovas del Castillo és assassinat per l'anarquista Angiolillo.",
    category: "politic",
  },
  {
    year: 1898,
    title: "Desastre del 98",
    description: "Pèrdua de Cuba, Puerto Rico i Filipines després de la guerra amb els EUA.",
    category: "militar",
  },
  {
    year: 1902,
    title: "Majoria d'Edat d'Alfons XIII",
    description: "Alfons XIII assumeix el poder directe com a rei d'Espanya.",
    category: "politic",
  },
  {
    year: 1907,
    title: "Solidaritat Catalana",
    description: "Coalició catalanista que guanya les eleccions a Catalunya.",
    category: "politic",
  },
  {
    year: 1909,
    title: "Setmana Tràgica",
    description: "Revolta popular a Barcelona contra la guerra del Marroc, durament reprimida.",
    category: "social",
  },
  {
    year: 1910,
    title: "Fundació de la CNT",
    description: "Es crea la Confederació Nacional del Treball, sindicat anarcosindicalista.",
    category: "social",
  },
  {
    year: 1912,
    title: "Assassinat de Canalejas",
    description: "El president del govern José Canalejas és assassinat per un anarquista.",
    category: "politic",
  },
  {
    year: 1917,
    title: "Crisi de 1917",
    description: "Triple crisi: Juntes Militars, Assemblea de Parlamentaris i Vaga General.",
    category: "social",
  },
  {
    year: 1921,
    title: "Desastre d'Annual",
    description: "Derrota militar al Marroc amb milers de morts. S'obre l'Expedient Picasso.",
    category: "militar",
  },
  {
    year: 1923,
    title: "Colp de Primo de Rivera",
    description: "Miguel Primo de Rivera dona un colp d'estat amb suport del rei.",
    category: "politic",
  },
  {
    year: 1925,
    title: "Desembarcament d'Alhucemas",
    description: "Victòria militar hispanofranesa que posa fi a la Guerra del Rif.",
    category: "militar",
  },
  {
    year: 1930,
    title: "Caiguda de Primo de Rivera",
    description: "Primo de Rivera dimiteix. Comença la 'Dictablanda' de Berenguer.",
    category: "politic",
  },
  {
    year: 1931,
    title: "Proclamació de la República",
    description: "El 14 d'abril es proclama la Segona República Espanyola.",
    category: "politic",
  },
];

const categories = {
  politic: { label: "Polític", color: "bg-primary" },
  social: { label: "Social", color: "bg-accent" },
  militar: { label: "Militar", color: "bg-destructive" },
  cultural: { label: "Cultural", color: "bg-secondary" },
};

export function CronologiaSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents = filter === "all" 
    ? events 
    : events.filter((e) => e.category === filter);

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Cronologia Interactiva
        </h2>
        <p className="mt-2 text-muted-foreground">
          Eix cronològic dels principals esdeveniments (1874-1931)
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          Tots
        </Button>
        {Object.entries(categories).map(([key, { label }]) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(key)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:block hidden" />
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:hidden" />

        <div className="space-y-6">
          {filteredEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const categoryInfo = categories[event.category];

            return (
              <div
                key={`${event.year}-${event.title}`}
                className={`relative flex items-center gap-4 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <Card
                  className={`ml-12 flex-1 cursor-pointer transition-all hover:shadow-md md:ml-0 md:w-[calc(50%-2rem)] ${
                    selectedEvent === event ? "ring-2 ring-primary" : ""
                  } ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                  onClick={() => setSelectedEvent(selectedEvent === event ? null : event)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium text-primary-foreground ${categoryInfo.color}`}>
                          {event.year}
                        </span>
                        <h3 className="mt-2 font-serif font-semibold text-foreground">
                          {event.title}
                        </h3>
                        {selectedEvent === event && (
                          <p className="mt-2 text-sm text-muted-foreground animate-in fade-in duration-300">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 flex h-4 w-4 items-center justify-center rounded-full md:left-1/2 md:-translate-x-1/2 ${categoryInfo.color}`}
                >
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Year Range */}
      <div className="mt-8 flex justify-between text-sm font-medium text-muted-foreground">
        <span>1874</span>
        <span>1931</span>
      </div>
    </section>
  );
}
