import { useState } from "react";
import { FileText, Eye, EyeOff, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SourceAnalysis {
  id: string;
  title: string;
  type: string;
  excerpt: string;
  modelAnswer: {
    identificacio: string;
    analisi: string;
    context: string;
    valoracio: string;
  };
}

const sources: SourceAnalysis[] = [
  {
    id: "constitucio-1876",
    title: "Constitució de 1876",
    type: "Font primària - Text jurídic",
    excerpt: `"Art. 18. La potestat de fer les lleis resideix en les Corts amb el Rei.

Art. 50. La potestat de fer executar les lleis resideix en el Rei, i la seua autoritat s'estén a tot quant condueix a la conservació de l'ordre públic en l'interior i a la seguretat de l'Estat en l'exterior..."`,
    modelAnswer: {
      identificacio: "Es tracta d'un text jurídic de caràcter primari: extractes de la Constitució de 1876, text fonamental del règim de la Restauració redactat sota la direcció d'Antonio Cánovas del Castillo. La Constitució va ser aprovada el 30 de juny de 1876 i va romandre vigent fins al 1931, convertint-se en la de major durada de la història constitucional espanyola.",
      analisi: "El text estableix els principis bàsics del sistema polític de la Restauració. L'article 18 defineix la sobirania compartida entre el Rei i les Corts, superant tant la sobirania nacional de la Constitució de 1869 com la sobirania reial de l'Estatut de 1834. L'article 50 atorga al monarca amplis poders executius, incloent-hi la prerrogativa reial, que permetia al Rei nomenar i cessar governs i dissoldre les Corts. Aquesta prerrogativa seria clau per al funcionament del torn pacífic.",
      context: "La Constitució de 1876 s'emmarca en el procés de Restauració borbònica iniciat amb el pronunciament de Martínez Campos a Sagunt (desembre de 1874). Després del Sexenni Democràtic (1868-1874), marcat per la inestabilitat política, Cánovas va dissenyar un sistema que garantira l'estabilitat mitjançant la integració de les dues famílies liberals (conservadors i progressistes) en un règim parlamentari controlat. La Constitució era prou flexible per permetre governs tant conservadors com liberals sense necessitat de canviar-la.",
      valoracio: "La Constitució de 1876 és un document fonamental per comprendre el sistema polític de la Restauració. El seu caràcter eclèctic i flexible va permetre una estabilitat sense precedents, però també va facilitar la manipulació electoral i el funcionament del caciquisme. La sobirania compartida i la prerrogativa reial limitaven la democratització real del sistema. Tot i les seues limitacions, va ser la constitució més duradora i va servir de marc legal per a la modernització d'Espanya durant mig segle.",
    },
  },
  {
    id: "costa-oligarquia",
    title: "Joaquín Costa: Oligarquia y Caciquismo (1901)",
    type: "Font primària - Assaig polític",
    excerpt: `"Espanya és un país sense govern (...). Els partits són simples instruments o agents d'oligarquies que els manegen i dirigeixen. Els oligarques i els cacics formen una xarxa que cobreix tot el país (...). Els diputats i senadors són producte de la fàbrica caciquista, no de la voluntat nacional..."`,
    modelAnswer: {
      identificacio: "Font primària de naturalesa politicoideològica. Es tracta d'un fragment de l'obra 'Oligarquía y Caciquismo como la forma actual de gobierno en España', publicada el 1901 per Joaquín Costa (1846-1911), jurista, historiador i principal figura del regeneracionisme espanyol. L'obra recull les conclusions d'una enquesta realitzada per l'Ateneu de Madrid sobre els problemes d'Espanya.",
      analisi: "Costa denuncia el sistema polític de la Restauració com una farsa democràtica. Identifica tres elements clau: 1) L'absència de govern efectiu, ja que el poder real no resideix en les institucions formals; 2) Els partits dinàstics com a instruments de les oligarquies, no com a representants de la societat; 3) El caciquisme com a xarxa de control que cobreix tot el territori, falsejant la representació popular. La crítica apunta directament al sistema de torn pacífic i als mecanismes de manipulació electoral.",
      context: "El text s'inscriu en el context del regeneracionisme, moviment intel·lectual sorgit arran del Desastre del 98. La pèrdua de les últimes colònies va provocar una profunda reflexió sobre les causes del retard espanyol. Costa proposava una 'revolució des de dalt' que incloïa: educació massiva ('escuela'), desenvolupament econòmic ('despensa'), reforma agrària i europeïtzació. El regeneracionisme va influir en polítics com Maura i Canalejas, encara que les reformes proposades mai no es van aplicar plenament.",
      valoracio: "El text és essencial per comprendre la crisi del sistema de la Restauració i les demandes de reforma. Costa ofereix una anàlisi lúcida dels mecanismes de poder, encara que la seua proposta de solució (un 'cirurgià de ferro' que regenerara el país) era ambigua i podia interpretar-se en clau autoritària. La seua obra va tenir gran impacte en la consciència política espanyola i va contribuir a deslegitimar el sistema del torn. El regeneracionisme, malgrat les seues limitacions, va posar les bases per a les reformes del segle XX.",
    },
  },
  {
    id: "manifiest-primo",
    title: "Manifest de Primo de Rivera (1923)",
    type: "Font primària - Text polític",
    excerpt: `"Al país i a l'Exèrcit: Ha arribat per a nosaltres el moment més temut que esperat (...) de recollir les ansies, de atendre el clamorós requeriment de quants amant la Pàtria no veuen per a ella altra salvació que alliberar-la dels professionals de la política..."`,
    modelAnswer: {
      identificacio: "Text primari de caràcter politicomilitar. Es tracta del manifest publicat el 13 de setembre de 1923 pel general Miguel Primo de Rivera (1870-1930), Capità General de Catalunya, justificant el colp d'estat que va iniciar la dictadura. El manifest va ser publicat des de Barcelona i adreçat a l'Exèrcit i a la nació.",
      analisi: "El text presenta els elements típics d'un pronunciament militar: 1) Legitimació per la situació excepcional ('moment més temut'); 2) Apel·lació al patriotisme i a les 'ansies' populars; 3) Crítica als polítics professionals com a responsables de la crisi; 4) L'Exèrcit com a salvador de la pàtria. Primo de Rivera es presenta com a intèrpret del sentiment nacional front a una classe política deslegitimada. El to regeneracionista del manifest ('alliberar' el país) connecta amb les demandes de reforma acumulades des del 98.",
      context: "El colp es produeix en un moment de crisi aguda: l'Expedient Picasso estava a punt de revelar les responsabilitats pel Desastre d'Annual (1921), que podien implicar el rei; el terrorisme anarquista assotava Barcelona; les Juntes Militars i el problema català tensaven les relacions amb Madrid. La passivitat d'Alfons XIII davant el colp (no va ordenar a l'Exèrcit defensar la Constitució) va ser interpretada com un suport implícit al pronunciament.",
      valoracio: "El manifest és clau per entendre la fi del sistema de la Restauració. Primo de Rivera s'apropiava del llenguatge regeneracionista per justificar un règim autoritari. El colp comptava amb suports diversos: sectors empresarials catalans, gran part de l'Exèrcit, sectors catòlics i fins i tot alguns socialistes. La dictadura va significar la suspensió de la Constitució de 1876 i l'inici d'un parèntesi que acabaria amb la proclamació de la Segona República (1931).",
    },
  },
];

export function AnalistaSection() {
  const [selectedSource, setSelectedSource] = useState<SourceAnalysis | null>(null);
  const [showAnswers, setShowAnswers] = useState({
    identificacio: false,
    analisi: false,
    context: false,
    valoracio: false,
  });
  const [userAnswers, setUserAnswers] = useState({
    identificacio: "",
    analisi: "",
    context: "",
    valoracio: "",
  });

  const resetAnalysis = () => {
    setShowAnswers({
      identificacio: false,
      analisi: false,
      context: false,
      valoracio: false,
    });
    setUserAnswers({
      identificacio: "",
      analisi: "",
      context: "",
      valoracio: "",
    });
  };

  const handleSourceSelect = (sourceId: string) => {
    const source = sources.find((s) => s.id === sourceId);
    setSelectedSource(source || null);
    resetAnalysis();
  };

  const toggleAnswer = (field: keyof typeof showAnswers) => {
    setShowAnswers((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const showAllAnswers = () => {
    setShowAnswers({
      identificacio: true,
      analisi: true,
      context: true,
      valoracio: true,
    });
  };

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Analista de Fonts
        </h2>
        <p className="mt-2 text-muted-foreground">
          Practica l'anàlisi de fonts amb respostes model
        </p>
      </div>

      {/* Source Selector */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Selecciona una Font
          </CardTitle>
          <CardDescription>
            Tria una font històrica per analitzar-la seguint l'estructura PAU
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select onValueChange={handleSourceSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una font..." />
            </SelectTrigger>
            <SelectContent>
              {sources.map((source) => (
                <SelectItem key={source.id} value={source.id}>
                  {source.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedSource && (
        <>
          {/* Source Text */}
          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-serif">{selectedSource.title}</CardTitle>
                  <CardDescription>{selectedSource.type}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                {selectedSource.excerpt}
              </blockquote>
            </CardContent>
          </Card>

          {/* Analysis Fields */}
          <div className="grid gap-6">
            {(["identificacio", "analisi", "context", "valoracio"] as const).map((field) => {
              const labels = {
                identificacio: "1. Identificació",
                analisi: "2. Anàlisi",
                context: "3. Contextualització",
                valoracio: "4. Valoració",
              };

              const descriptions = {
                identificacio: "Tipus de font, autor, data, destinatari i propòsit",
                analisi: "Idees principals, estructura i recursos argumentatius",
                context: "Circumstàncies històriques que expliquen el document",
                valoracio: "Importància, limitacions i connexions històriques",
              };

              return (
                <Card key={field}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-serif">{labels[field]}</CardTitle>
                        <CardDescription>{descriptions[field]}</CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleAnswer(field)}
                        className="gap-2"
                      >
                        {showAnswers[field] ? (
                          <>
                            <EyeOff className="h-4 w-4" />
                            Ocultar
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4" />
                            Mostrar resposta
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor={field}>La teua resposta:</Label>
                      <Textarea
                        id={field}
                        placeholder="Escriu ací la teua anàlisi..."
                        value={userAnswers[field]}
                        onChange={(e) =>
                          setUserAnswers((prev) => ({
                            ...prev,
                            [field]: e.target.value,
                          }))
                        }
                        className="mt-2 min-h-[100px]"
                      />
                    </div>

                    {showAnswers[field] && (
                      <div className="rounded-lg border border-accent bg-accent/10 p-4">
                        <h4 className="mb-2 font-semibold text-accent-foreground">
                          Resposta Model:
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {selectedSource.modelAnswer[field]}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Show All Button */}
          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={showAllAnswers} className="gap-2">
              <ChevronDown className="h-4 w-4" />
              Mostrar totes les respostes
            </Button>
            <Button variant="outline" onClick={resetAnalysis}>
              Reiniciar
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
