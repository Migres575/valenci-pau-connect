import { useState } from "react";
import { ChevronDown, ChevronUp, Crown, AlertTriangle, TrendingDown, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blocs = [
  {
    id: 1,
    title: "El Sistema Canovista (1874-1898)",
    icon: Crown,
    description: "Fonaments del règim de la Restauració i el sistema de torn pacífic",
    content: `
## Característiques del Sistema Canovista

El sistema polític dissenyat per **Antonio Cánovas del Castillo** es fonamentava en:

### La Constitució de 1876
- **Sobirania compartida** entre el Rei i les Corts
- Sufraggi censatari (posteriorment universal masculí en 1890)
- Declaració de drets amb garanties suspeses en situacions d'emergència
- Confessionalitat catòlica de l'Estat amb tolerància religiosa privada

### El Torn Pacífic
Sistema de rotació en el poder entre els dos partits dinàstics:
- **Partit Conservador** (Cánovas): defensor de l'ordre, l'Església i els propietaris
- **Partit Liberal** (Sagasta): reformisme moderat, llibertats individuals

### Mecanismes del Sistema
1. **Encasellat**: distribució prèvia dels escons entre els partits
2. **Caciquisme**: control local de les eleccions per figures influents
3. **Pucherazo**: manipulació de les urnes i falsificació de resultats

### Prerrogativa Reial
El Rei tenia la facultat de:
- Nomenar i cessar governs
- Convocar i dissoldre les Corts
- Sancionar les lleis
    `,
  },
  {
    id: 2,
    title: "La Crisi del 98 i el Regeneracionisme",
    icon: AlertTriangle,
    description: "Pèrdua de les últimes colònies i reflexió nacional",
    content: `
## El Desastre del 98

### Antecedents
- Conflictes colonials a Cuba i Filipines
- Intervenció dels Estats Units
- Guerra Hispanoamericana (1898)

### Conseqüències del Tractat de París (1898)
- Pèrdua de **Cuba, Puerto Rico, Filipines i Guam**
- Crisi moral i política profunda
- Qüestionament del sistema de la Restauració

## El Regeneracionisme

### Joaquín Costa i "Oligarquía y Caciquismo"
- Crítica al sistema polític corrupte
- Proposta de **"Escuela y despensa"**
- Modernització econòmica i educativa

### Corrents Regeneracionistes
1. **Regeneracionisme polític**: reforma del sistema des de dins
2. **Regeneracionisme social**: atenció als problemes de les classes populars
3. **Regeneracionisme intel·lectual**: la Generació del 98

### Efectes a Llarg Termini
- Conscienciació de la necessitat de reformes
- Creixement dels nacionalismes perifèrics
- Augment del moviment obrer
    `,
  },
  {
    id: 3,
    title: "Descomposició del Sistema (1902-1923)",
    icon: TrendingDown,
    description: "Crisi política, social i militar del règim restauracionista",
    content: `
## La Crisi del Sistema (1902-1923)

### Factors de Descomposició

#### Crisi Política
- Fi del torn pacífic després de la mort de Cánovas (1897) i Sagasta (1903)
- Fragmentació dels partits dinàstics
- Governs inestables i de concentració

#### Crisi Social
- **Setmana Tràgica de Barcelona (1909)**: vaga general i repressió
- Auge del moviment obrer (CNT, UGT)
- Vagues revolucionàries de 1917

#### La Crisi de 1917
- **Assemblees de Parlamentaris**: Catalunya exigeix autonomia
- **Juntes Militars de Defensa**: corporativisme militar
- **Vaga general revolucionària**: UGT i CNT

### El Problema del Marroc

#### La Guerra del Rif
- Protectorat espanyol des de 1912
- **Desastre d'Annual (1921)**: mort de milers de soldats
- **Expedient Picasso**: investigació de responsabilitats
- Implicació d'alts càrrecs militars i polítics

### Tensions Finals
- Pistolerisme a Barcelona
- Govern de concentració d'Eduardo Dato
- Assassinat de Dato (1921)
    `,
  },
  {
    id: 4,
    title: "La Dictadura de Primo de Rivera (1923-1931)",
    icon: Shield,
    description: "El colp d'estat i el règim dictatorial",
    content: `
## La Dictadura de Primo de Rivera

### El Colp d'Estat (13 de setembre de 1923)
- **Miguel Primo de Rivera**, Capità General de Catalunya
- Suport del Rei Alfons XIII
- Manifest des de Barcelona prometent regeneració

### El Directori Militar (1923-1925)
- Govern exclusivament militar
- Suspensió de la Constitució
- Dissolució de partits i sindicats
- Censura de premsa

### El Directori Civil (1925-1930)
- Incorporació de tècnics civils
- Política econòmica intervencionista
- **Unión Patriótica**: intent de partit únic
- Obres públiques i infraestructures

### Èxits i Fracassos

#### Èxits
- Fi de la Guerra del Rif (Desembarcament d'Alhucemas, 1925)
- Estabilitat econòmica temporal
- Infraestructures modernes

#### Fracassos
- Incapacitat de crear un sistema polític estable
- Oposició creixent (intel·lectuals, republicans, catalanistes)
- Crisi econòmica de 1929

### La Caiguda
- Dimissió de Primo de Rivera (gener 1930)
- **Dictablanda** del General Berenguer
- **Pacte de San Sebastián** (agost 1930)
- Proclamació de la Segona República (14 d'abril de 1931)
    `,
  },
];

export function TemariSection() {
  const [expandedBloc, setExpandedBloc] = useState<number | null>(1);

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Temari de la Restauració
        </h2>
        <p className="mt-2 text-muted-foreground">
          Quatre blocs temàtics per a la preparació de la PAU
        </p>
      </div>

      <div className="grid gap-4">
        {blocs.map((bloc) => {
          const Icon = bloc.icon;
          const isExpanded = expandedBloc === bloc.id;

          return (
            <Card
              key={bloc.id}
              className={`transition-all duration-300 ${
                isExpanded ? "ring-2 ring-primary/50" : ""
              }`}
            >
              <CardHeader className="cursor-pointer" onClick={() => setExpandedBloc(isExpanded ? null : bloc.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-lg">
                        Bloc {bloc.id}: {bloc.title}
                      </CardTitle>
                      <CardDescription>{bloc.description}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="border-t border-border pt-6">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div
                      className="space-y-4 text-foreground"
                      dangerouslySetInnerHTML={{
                        __html: bloc.content
                          .replace(/^## (.+)$/gm, '<h3 class="font-serif text-xl font-bold mt-6 mb-3 text-foreground">$1</h3>')
                          .replace(/^### (.+)$/gm, '<h4 class="font-serif text-lg font-semibold mt-4 mb-2 text-foreground">$1</h4>')
                          .replace(/^#### (.+)$/gm, '<h5 class="font-semibold mt-3 mb-1 text-foreground">$1</h5>')
                          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-accent-foreground font-semibold">$1</strong>')
                          .replace(/^- (.+)$/gm, '<li class="ml-4 text-muted-foreground">$1</li>')
                          .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 text-muted-foreground"><span class="font-semibold">$1.</span> $2</li>')
                          .replace(/\n\n/g, '</p><p class="text-muted-foreground">')
                      }}
                    />
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
