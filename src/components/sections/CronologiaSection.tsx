import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Sword, BookOpen, Crown } from "lucide-react";

const events = [
  { year: 1874, title: "Pronunciament de Sagunt", cat: "militar", desc: "Martínez Campos proclama Alfons XII rei, iniciant la Restauració." },
  { year: 1876, title: "Constitució de 1876", cat: "politic", desc: "S'estableix el sistema de sobirania compartida i el torn de partits." },
  { year: 1879, title: "Fundació del PSOE", cat: "social", desc: "Pablo Iglesias funda el partit a Madrid." },
  { year: 1885, title: "Pacte del Pardo", cat: "politic", desc: "Acord entre Cánovas i Sagasta per garantir l'estabilitat del torn." },
  { year: 1892, title: "Bases de Manresa", cat: "politic", desc: "Primer document del catalanisme polític." },
  { year: 1898, title: "Desastre del 98", cat: "militar", desc: "Pèrdua de Cuba, Puerto Rico i Filipines." },
  { year: 1901, title: "Lliga Regionalista", cat: "politic", desc: "Prat de la Riba funda el principal partit catalanista." },
  { year: 1902, title: "Majoria d'edat d'Alfons XIII", cat: "politic", desc: "El rei comença el seu regnat personal." },
  { year: 1906, title: "Solidaritat Catalana", cat: "politic", desc: "Coalició de partits catalans contra la Llei de Jurisdiccions." },
  { year: 1909, title: "Setmana Tràgica", cat: "social", desc: "Revolta popular a Barcelona contra les lleves per al Marroc." },
  { year: 1914, title: "Mancomunitat de Catalunya", cat: "politic", desc: "Primera institució d'autogovern català des de 1714." },
  { year: 1917, title: "Vaga General i Crisi", cat: "social", desc: "Triple crisi: militar, política (Assemblea de Parlamentaris) i social." },
  { year: 1921, title: "Desastre d'Annual", cat: "militar", desc: "Gran derrota militar espanyola al Marroc." },
  { year: 1923, title: "Dictadura de Primo de Rivera", cat: "politic", desc: "Cop d'estat amb el suport del rei Alfons XIII." },
  { year: 1930, title: "Pacte de Sant Sebastià", cat: "politic", desc: "Acord de l'oposició per acabar amb la monarquia." },
  { year: 1931, title: "Proclamació de la II República", cat: "politic", desc: "Resultat de les eleccions municipals del 12 d'abril." }
];

const icons: any = { politic: Crown, social: Users, militar: Sword, cultural: BookOpen };

export function CronologiaSection() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary mb-2">1874 — 1931</h2>
        <p className="text-muted-foreground italic">Restauració, Crisi i Dictadura</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((e, i) => {
          const Icon = icons[e.cat];
          return (
            <Card key={i} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-black text-primary">{e.year}</span>
                  <Icon className="h-5 w-5 text-muted-foreground opacity-50" />
                </div>
                <h3 className="font-bold text-lg mb-1">{e.title}</h3>
                <p className="text-sm text-foreground/80 leading-snug">{e.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
