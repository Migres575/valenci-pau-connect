import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Bipartidisme",
    definition: "Sistema polític en què dos partits principals —el Conservador i el Liberal— s'alternaven en el poder de manera pactada. Aquest sistema, dissenyat per Cánovas del Castillo, garantia l'estabilitat però excloïa altres forces polítiques i socials. El bipartidisme espanyol de la Restauració es diferenciava del britànic perquè no reflectia la voluntat popular, sinó que era el resultat de la manipulació electoral sistemàtica.",
    category: "Sistema Polític",
    relatedTerms: ["Torn Pacífic", "Encasellat"],
  },
  {
    term: "Torn Pacífic",
    definition: "Mecanisme de rotació acordada entre el Partit Conservador (Cánovas) i el Partit Liberal (Sagasta) per alternar-se en el govern. Quan un partit mostrava signes de desgast, el Rei encarregava la formació de govern a l'altre. El nou govern convocava eleccions, que sempre guanyava gràcies al control del procés electoral. Aquest sistema va funcionar de 1881 fins a principis del segle XX, quan la fragmentació dels partits el va fer inviable.",
    category: "Sistema Polític",
    relatedTerms: ["Bipartidisme", "Prerrogativa Reial"],
  },
  {
    term: "Caciquisme",
    definition: "Sistema de control polític local exercit pels cacics, notables rurals amb poder econòmic i social que garantien els resultats electorals desitjats pel govern. Els cacics actuaven com a intermediaris entre el poder central i les comunitats locals, oferint favors (feina, préstecs, protecció) a canvi de vots. Aquest sistema era especialment efectiu en àrees rurals amb alta taxa d'analfabetisme i dependència econòmica.",
    category: "Sistema Polític",
    relatedTerms: ["Encasellat", "Pucherazo"],
  },
  {
    term: "Encasellat",
    definition: "Procés de distribució prèvia dels escons entre els partits dinàstics abans de les eleccions. El Ministeri de Governació elaborava una 'casella' (encasellat) amb els candidats que havien de guanyar en cada circumscripció. Els governadors civils i els cacics locals s'encarregaven després de garantir aquests resultats mitjançant la pressió, el frau o la compra de vots.",
    category: "Mecanismes Electorals",
    relatedTerms: ["Pucherazo", "Caciquisme"],
  },
  {
    term: "Pucherazo",
    definition: "Conjunt de pràctiques fraudulentes per manipular els resultats electorals. Incloïa: falsificació d'actes, vot dels morts (inclusió de difunts al cens), trencament d'urnes, coacció als votants, compra de vots i alteració del recompte. El terme prové de 'puchero' (olla), referint-se a les urnes on es cuinaven els resultats. Era l'instrument final per garantir l'encasellat pactat prèviament.",
    category: "Mecanismes Electorals",
    relatedTerms: ["Encasellat", "Caciquisme"],
  },
  {
    term: "Regeneracionisme",
    definition: "Moviment intel·lectual i polític sorgit arran del Desastre del 98 que advocava per la modernització d'Espanya. Joaquín Costa, el seu màxim exponent, va resumir el programa amb el lema 'Escuela y despensa' (educació i desenvolupament econòmic). Els regeneracionistes criticaven l'oligarquia i el caciquisme com a causes del retard espanyol i proposaven reformes profundes: millora de l'educació, inversió en infraestructures, reforma agrària i europeïtzació.",
    category: "Moviments",
    relatedTerms: ["Desastre del 98"],
  },
  {
    term: "Expedient Picasso",
    definition: "Investigació militar dirigida pel general Juan Picasso sobre les responsabilitats del Desastre d'Annual (1921), on moriren entre 8.000 i 12.000 soldats espanyols. L'expedient revelava greus negligències dels comandaments militars i possibles responsabilitats polítiques que arribaven fins al mateix rei Alfons XIII. La publicació parcial de les conclusions va contribuir a la crisi del sistema i al clima que va facilitar el colp d'estat de Primo de Rivera.",
    category: "Esdeveniments",
    relatedTerms: ["Desastre d'Annual"],
  },
  {
    term: "Unión Patriótica",
    definition: "Organització política creada per Primo de Rivera el 1924 com a intent de crear un partit únic de suport a la dictadura. Inspirada en el feixisme italià però sense la seua base ideològica, aglutinava sectors catòlics, conservadors i antics mauristes. Mai no va aconseguir convertir-se en un veritable moviment de masses i va desaparèixer amb la caiguda de la dictadura. Representava l'intent fallit de donar legitimitat política al règim dictatorial.",
    category: "Dictadura",
    relatedTerms: ["Primo de Rivera"],
  },
];

export function GlossariSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [...new Set(glossaryTerms.map((t) => t.category))];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Glossari de Termes
        </h2>
        <p className="mt-2 text-muted-foreground">
          Definicions detallades per a l'examen de selectivitat
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cerca un terme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory("all")}
          >
            Tots
          </Badge>
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredTerms.map((item) => (
          <Card key={item.term} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="font-serif text-xl text-foreground">
                  {item.term}
                </CardTitle>
                <Badge variant="secondary" className="shrink-0">
                  {item.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.definition}
              </p>
              {item.relatedTerms && item.relatedTerms.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-foreground">
                    Termes relacionats:
                  </span>
                  {item.relatedTerms.map((related) => (
                    <Badge
                      key={related}
                      variant="outline"
                      className="cursor-pointer text-xs hover:bg-accent"
                      onClick={() => setSearchTerm(related)}
                    >
                      {related}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No s'han trobat termes amb els criteris de cerca.
          </p>
        </div>
      )}
    </section>
  );
}
