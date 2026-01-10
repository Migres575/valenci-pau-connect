import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Circle } from "lucide-react";

interface SchemaItem {
  title: string;
  subitems?: string[];
}

interface TopicSchemaProps {
  title: string;
  items: SchemaItem[];
  className?: string;
}

export function TopicSchema({ title, items, className = "" }: TopicSchemaProps) {
  return (
    <Card className={`bg-muted/50 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            📋
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="pl-2">
              <div className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{item.title}</span>
              </div>
              {item.subitems && item.subitems.length > 0 && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.subitems.map((subitem, subIndex) => (
                    <div key={subIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Circle className="h-2 w-2 mt-1.5 fill-accent text-accent flex-shrink-0" />
                      <span>{subitem}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Schemas for each topic
export const topicSchemas = {
  sistemaCanovista: {
    title: "Esquema: El Sistema Canovista",
    items: [
      {
        title: "1. La Restauració Borbònica (1874)",
        subitems: [
          "Pronunciament de Martínez Campos a Sagunt",
          "Alfons XII com a rei restaurat",
          "Cánovas del Castillo: artífex polític"
        ]
      },
      {
        title: "2. La Constitució de 1876",
        subitems: [
          "Sobirania compartida (Rei + Corts)",
          "Prerrogativa reial àmplia",
          "Flexibilitat i ambigüitat intencionada",
          "Catolicisme oficial amb tolerància privada"
        ]
      },
      {
        title: "3. El Torn Pacífic",
        subitems: [
          "Bipartidisme: Conservadors (Cánovas) / Liberals (Sagasta)",
          "Alternança pactada en el poder",
          "El rei decideix quan canvia el govern"
        ]
      },
      {
        title: "4. Control Electoral",
        subitems: [
          "Encasellat: repartiment previ dels escons",
          "Caciquisme: control polític local",
          "Pucherazo: frau electoral sistemàtic"
        ]
      },
      {
        title: "5. Oposició al Sistema",
        subitems: [
          "Moviment obrer (PSOE, UGT, anarquisme)",
          "Nacionalismes perifèrics (catalanisme, nacionalisme basc)",
          "Republicanisme i carlisme"
        ]
      }
    ]
  },
  crisi98: {
    title: "Esquema: La Crisi del 98",
    items: [
      {
        title: "1. La Guerra de Cuba (1895-1898)",
        subitems: [
          "Grito de Baire i inici de la insurrecció",
          "Política de reconcentració de Weyler",
          "Interessos nord-americans a l'illa"
        ]
      },
      {
        title: "2. La Guerra Hispanoamericana",
        subitems: [
          "Explosió del Maine (15 febrer 1898)",
          "Derrotes de Cavite i Santiago de Cuba",
          "Superioritat naval i industrial dels EUA"
        ]
      },
      {
        title: "3. El Tractat de París (1898)",
        subitems: [
          "Pèrdua de Cuba, Puerto Rico, Filipines i Guam",
          "Fi de l'imperi colonial americà",
          "Només queden possessions africanes"
        ]
      },
      {
        title: "4. Conseqüències del Desastre",
        subitems: [
          "Crisi política: desprestigi del sistema",
          "Crisi moral: qüestionament de la identitat nacional",
          "Paradoxa econòmica: repatriació de capitals"
        ]
      },
      {
        title: "5. El Regeneracionisme",
        subitems: [
          "Joaquín Costa: 'Escuela y despensa'",
          "Crítica a l'oligarquia i el caciquisme",
          "Proposta de modernització i europeïtzació"
        ]
      }
    ]
  },
  descomposicio: {
    title: "Esquema: Descomposició del Sistema (1902-1923)",
    items: [
      {
        title: "1. El Regnat d'Alfons XIII",
        subitems: [
          "Majoria d'edat el 1902",
          "Intervencionisme polític del rei",
          "Fragmentació dels partits dinàstics"
        ]
      },
      {
        title: "2. Intents de Reforma",
        subitems: [
          "Maura: 'Revolució des de dalt' (1907-1909)",
          "Canalejas: reformisme liberal (1910-1912)",
          "Fracàs de la regeneració des de dins"
        ]
      },
      {
        title: "3. La Crisi de 1917",
        subitems: [
          "Juntes Militars de Defensa",
          "Assemblea de Parlamentaris",
          "Vaga General Revolucionària"
        ]
      },
      {
        title: "4. La Qüestió Social",
        subitems: [
          "Trienni Bolxevic (1918-1921)",
          "Pistolerisme a Barcelona",
          "Creixement de CNT i UGT"
        ]
      },
      {
        title: "5. La Guerra del Marroc",
        subitems: [
          "Desastre d'Annual (1921)",
          "Expedient Picasso i responsabilitats",
          "Implicació del rei Alfons XIII"
        ]
      }
    ]
  },
  dictadura: {
    title: "Esquema: La Dictadura de Primo de Rivera",
    items: [
      {
        title: "1. El Colp d'Estat (13 setembre 1923)",
        subitems: [
          "Pronunciament a Barcelona",
          "Suports: exèrcit, burgesia, catòlics",
          "Aquiescència del rei Alfons XIII"
        ]
      },
      {
        title: "2. Directori Militar (1923-1925)",
        subitems: [
          "Suspensió de la Constitució",
          "Repressió del catalanisme i la CNT",
          "Fi de la Guerra del Rif (Alhucemas)"
        ]
      },
      {
        title: "3. Directori Civil (1925-1930)",
        subitems: [
          "Unión Patriótica com a partit únic",
          "Organització Corporativa Nacional",
          "Grans obres públiques i Exposicions"
        ]
      },
      {
        title: "4. Caiguda del Règim",
        subitems: [
          "Crisi econòmica (Crack del 29)",
          "Oposició creixent i intellectuals",
          "Dimissió de Primo de Rivera (1930)"
        ]
      },
      {
        title: "5. Fi de la Monarquia",
        subitems: [
          "Dictablanda de Berenguer",
          "Pacte de San Sebastián",
          "Eleccions i proclamació de la República (1931)"
        ]
      }
    ]
  }
};
