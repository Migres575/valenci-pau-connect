import { Lightbulb, AlertCircle, CheckCircle, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const consells = [
  {
    id: "terminologia",
    title: "Ús de Terminologia Específica",
    icon: BookOpen,
    tips: [
      {
        do: "Utilitzeu termes com 'encasellat', 'pucherazo', 'torn pacífic' i definiu-los breument.",
        dont: "No useu expressions genèriques com 'manipulació' sense concretar el mecanisme.",
      },
      {
        do: "Distingiu entre 'pronunciament' (colp militar amb suport civil) i 'colp d'estat' (acció exclusivament militar).",
        dont: "No confongueu 'regeneracionisme' (moviment intel·lectual) amb 'regeneració' (procés general).",
      },
      {
        do: "Useu 'oligarquia' per referir-vos a les elits econòmiques i 'caciquisme' per al control polític local.",
        dont: "No useu 'dictadura' per al període 1875-1923; el terme correcte és 'monarquia constitucional'.",
      },
    ],
  },
  {
    id: "prerrogativa",
    title: "La Prerrogativa Reial",
    icon: AlertCircle,
    content: `
## Què és la Prerrogativa Reial?

La prerrogativa reial és el conjunt de poders que la Constitució de 1876 atorgava al monarca:

### Poders Principals
1. **Nomenar i cessar governs** sense necessitat de justificació
2. **Convocar i dissoldre les Corts** quan ho considerara oportú
3. **Sancionar les lleis** (sense la signatura reial, no eren vàlides)
4. **Comandament suprem de l'Exèrcit**

### Importància per al Sistema
La prerrogativa era clau per al funcionament del torn pacífic:
- Quan un govern es desgastava, el rei encarregava govern a l'oposició
- El nou govern convocava eleccions (que sempre guanyava gràcies al control electoral)
- Això permetia l'alternança sense conflictes

### Com explicar-ho a l'examen
> "La prerrogativa reial permetia al monarca actuar com a àrbitre del sistema polític, garantint l'alternança entre conservadors i liberals sense necessitat que les eleccions reflectiren la voluntat popular."

### Limitacions
- El rei depenia de la col·laboració dels partits dinàstics
- No podia governar sense el suport de les Corts indefinidament
- La prerrogativa no incloïa el dret a legislar directament
    `,
  },
  {
    id: "estructura",
    title: "Estructura de les Respostes",
    icon: CheckCircle,
    tips: [
      {
        do: "Comenceu amb una contextualització temporal i espacial clara.",
        dont: "No comenceu amb frases vagues com 'Des de sempre, Espanya...'",
      },
      {
        do: "Utilitzeu connectors causals: 'a causa de', 'per tant', 'com a conseqüència'.",
        dont: "No encadeneu oracions amb 'i' o 'també' repetidament.",
      },
      {
        do: "Acabeu amb una valoració que connecte amb processos més amplis.",
        dont: "No acabeu amb un resum del que ja heu dit.",
      },
    ],
  },
  {
    id: "errors",
    title: "Errors Comuns a Evitar",
    icon: AlertCircle,
    errors: [
      {
        error: "Confondre Cánovas i Canalejas",
        correction: "Cánovas (conservador, artífex del sistema, assassinat 1897) vs Canalejas (liberal, reformista, assassinat 1912).",
      },
      {
        error: "Situar el Desastre del 98 com a causa única de la crisi",
        correction: "El 98 va accelerar la crisi, però els problemes estructurals (caciquisme, exclusió de les masses) ja existien.",
      },
      {
        error: "Presentar la dictadura de Primo de Rivera com a feixista",
        correction: "Primo de Rivera va inspirar-se en el feixisme italià però mai no va crear un règim totalitari ni un partit de masses efectiu.",
      },
      {
        error: "Ignorar els nacionalismes perifèrics",
        correction: "El catalanisme, basquisme i galleguisme van ser factors clau de la crisi del sistema, especialment després de 1898.",
      },
    ],
  },
];

export function ConsellsSection() {
  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Consells per a la PAU
        </h2>
        <p className="mt-2 text-muted-foreground">
          Recomanacions pràctiques per a l'examen de selectivitat
        </p>
      </div>

      <div className="grid gap-6">
        {consells.map((consell) => {
          const Icon = consell.icon;

          if (consell.tips) {
            return (
              <Card key={consell.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif">
                    <Icon className="h-5 w-5 text-primary" />
                    {consell.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {consell.tips.map((tip, index) => (
                      <div key={index} className="grid gap-2 sm:grid-cols-2">
                        <div className="flex gap-2 rounded-lg border border-accent/30 bg-accent/10 p-3">
                          <CheckCircle className="h-5 w-5 shrink-0 text-accent-foreground" />
                          <p className="text-sm text-muted-foreground">{tip.do}</p>
                        </div>
                        <div className="flex gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
                          <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
                          <p className="text-sm text-muted-foreground">{tip.dont}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          }

          if (consell.content) {
            return (
              <Card key={consell.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif">
                    <Icon className="h-5 w-5 text-primary" />
                    {consell.title}
                  </CardTitle>
                  <CardDescription>
                    Concepte clau per a l'anàlisi del sistema de la Restauració
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div
                      className="space-y-3 text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: consell.content
                          .replace(/^## (.+)$/gm, '<h3 class="font-serif text-lg font-bold mt-4 mb-2 text-foreground">$1</h3>')
                          .replace(/^### (.+)$/gm, '<h4 class="font-semibold mt-3 mb-1 text-foreground">$1</h4>')
                          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-accent pl-4 italic my-3">$1</blockquote>')
                          .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4">$2</li>')
                          .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          }

          if (consell.errors) {
            return (
              <Card key={consell.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif">
                    <Icon className="h-5 w-5 text-destructive" />
                    {consell.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {consell.errors.map((item, index) => (
                      <AccordionItem key={index} value={`error-${index}`}>
                        <AccordionTrigger className="text-left text-sm font-medium">
                          <span className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-xs font-bold text-destructive">
                              {index + 1}
                            </span>
                            {item.error}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-8 rounded-lg bg-accent/10 p-3">
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Correcció:</strong>{" "}
                              {item.correction}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          }

          return null;
        })}
      </div>

      {/* Final Tip */}
      <Card className="mt-8 border-2 border-primary/30 bg-primary/5">
        <CardContent className="flex items-start gap-4 pt-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
            <Lightbulb className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-foreground">Consell Final</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Llegiu sempre tot l'examen abans de començar. Calculeu el temps per a cada pregunta 
              i deixeu uns minuts finals per revisar. En l'anàlisi de fonts, no oblideu 
              relacionar el document amb els continguts del temari: l'examinador valora 
              especialment la capacitat de contextualitzar i establir connexions històriques.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
