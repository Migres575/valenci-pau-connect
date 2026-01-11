import { useState, useMemo } from "react";
import { 
  FileText, Eye, EyeOff, BookOpen, GraduationCap, History, 
  Calendar, Info, LayoutDashboard, AlertTriangle
} from "lucide-react";

// NOTA: Si no utilitzes shadcn/ui, substitueix aquests imports per divs estàndard
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- INTERFÍCIE ---
interface SourceAnalysis {
  id: string;
  year: number;
  title: string;
  type: string;
  category: "Sistema Canovista" | "Nacionalisme" | "Oposició i Crisis" | "Dictadura";
  importance: "Alta" | "Crítica";
  excerpt: string;
  imageUrl?: string;
  modelAnswer: {
    identificacio: string;
    analisi: string;
    context: string;
    valoracio: string;
  };
}

// --- TOTES LES 12 FONTS (SENSE EXCEPCIONS) ---
const sources: SourceAnalysis[] = [
  {
    id: "sandhurst-1874",
    year: 1874,
    title: "Manifest de Sandhurst",
    type: "Font primària - Text polític",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: `"Por virtud de la espontánea y solemne abdicación de mi augusta madre... soy el único que representa el derecho monárquico en España. [...] Ni de la española ni de las demás monarquías europeas puede esperarse hoy que sean absolutistas; la nuestra debe ser liberal."`,
    modelAnswer: {
      identificacio: "Text polític primari. Manifest firmat per Alfons XII a l'acadèmia militar de Sandhurst (1874).",
      analisi: "Presenta la monarquia com l'única solució per garantir l'ordre i la llibertat, definint-la com a liberal i catòlica.",
      context: "Fase final del Sexenni Democràtic. Cánovas busca la restauració borbònica de forma civil.",
      valoracio: "Document fundacional de la Restauració."
    }
  },
  {
    id: "constitucio-1876",
    year: 1876,
    title: "Constitució de 1876",
    type: "Font primària - Text jurídic",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: `"Art. 18. La potestad de hacer las leyes reside en las Cortes con el Rey. Art. 50. La potestad de hacer ejecutar las leyes reside en el Rey."`,
    modelAnswer: {
      identificacio: "Text jurídic fonamental del règim de la Restauració.",
      analisi: "Estableix la sobirania compartida (Rei i Corts) i el caràcter confessional de l'Estat.",
      context: "Dissenyada per Cánovas per ser elàstica i permetre el torn pacífic.",
      valoracio: "La constitució més longeva d'Espanya (fins a 1931)."
    }
  },
  {
    id: "pi-margall-1877",
    year: 1877,
    title: "Pi i Margall: Las Nacionalidades",
    type: "Font primària - Assaig polític",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: `"El verdadero y principal motivo del atraso de España es la centralización (...). La centralización condena a las provincias al marasmo."`,
    modelAnswer: {
      identificacio: "Font primària. Fragment de l'obra de Francesc Pi i Margall, líder republicà federal.",
      analisi: "Critica el centralisme de Madrid com a causa del retard d'Espanya.",
      context: "Primers anys de la Restauració. Proposa el federalisme com a alternativa.",
      valoracio: "Base doctrinal del federalisme i influència en el catalanisme."
    }
  },
  {
    id: "bases-manresa-1892",
    year: 1892,
    title: "Bases de Manresa",
    type: "Font primària - Text polític",
    category: "Nacionalisme",
    importance: "Crítica",
    excerpt: `"Base 3a. La llengua catalana serà la única que, ab caràcter oficial, podrà usar-se á Catalunya... Base 7a. Del Poder legislatiu regional s'encarregaran les Corts catalanes."`,
    modelAnswer: {
      identificacio: "Document polític aprovat per la Unió Catalanista el 1892.",
      analisi: "Reivindica una autonomia profunda amb corts i llengua pròpies.",
      context: "Pas del catalanisme cultural al polític.",
      valoracio: "Programa fundacional del catalanisme contemporani."
    }
  },
  {
    id: "desastre-98",
    year: 1898,
    title: "La Crisi del 98",
    type: "Font primària - Imatge",
    category: "Oposició i Crisis",
    importance: "Crítica",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Desastre_del_98.jpg",
    excerpt: "Representació de la derrota i pèrdua de les últimes colònies d'ultramar.",
    modelAnswer: {
      identificacio: "Font iconogràfica sobre la pèrdua de Cuba i Filipines.",
      analisi: "Simbolitza el fi de l'Imperi colonial i el xoc moral de la nació.",
      context: "Punt d'inflexió que dóna lloc al Regeneracionisme.",
      valoracio: "Provoca una crisi de legitimitat en el sistema canovista."
    }
  },
  {
    id: "costa-1901",
    year: 1901,
    title: "Joaquín Costa: Oligarquía y Caciquismo",
    type: "Font primària - Assaig",
    category: "Oposició i Crisis",
    importance: "Crítica",
    excerpt: `"No es una forma de gobierno; es una enfermedad social (...). Los oligarcas y los caciques forman una red que cubre todo el país."`,
    modelAnswer: {
      identificacio: "Font primària de Joaquín Costa, líder del regeneracionisme.",
      analisi: "Denuncia el caciquisme com el mal estructural que impedeix la democràcia.",
      context: "Post-desastre del 98. Demana 'escola i rebost'.",
      valoracio: "L'anàlisi més influent sobre el fracàs de la Restauració."
    }
  },
  {
    id: "maura-1902",
    year: 1902,
    title: "Maura: La Revolució des de dalt",
    type: "Font primària - Discurs",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: `"Hay que hacer la revolución desde el gobierno, porque si no se hace desde el gobierno, se hará desde la calle."`,
    modelAnswer: {
      identificacio: "Discurs parlamentari d'Antonio Maura (conservador).",
      analisi: "Defensa reformar el sistema per evitar l'esclat social.",
      context: "Intents de regenerar el sistema des del Partit Conservador.",
      valoracio: "Mostra l'intent fallit de 'sanejar' el caciquisme."
    }
  },
  {
    id: "prat-riba-1906",
    year: 1906,
    title: "La Nacionalitat Catalana",
    type: "Font primària - Assaig",
    category: "Nacionalisme",
    importance: "Alta",
    excerpt: `"Catalunya és una nació (...). L'Estat no és sinó l'organització política de la Nació."`,
    modelAnswer: {
      identificacio: "Obra doctrinal d'Enric Prat de la Riba.",
      analisi: "Diferencia entre Nació (unitat cultural) i Estat (organització política).",
      context: "Consolidació de la Lliga Regionalista.",
      valoracio: "Defineix la ideologia del catalanisme conservador."
    }
  },
  {
    id: "lerroux-1906",
    year: 1906,
    title: "Lerroux: Jóvenes Bárbaros",
    type: "Font primària - Discurs",
    category: "Oposició i Crisis",
    importance: "Alta",
    excerpt: `"Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente (...). Destruid sus templos."`,
    modelAnswer: {
      identificacio: "Míting d'Alejandro Lerroux a Santander.",
      analisi: "Retòrica populista i anticlerical radical.",
      context: "Creixement del republicanisme de masses a Barcelona.",
      valoracio: "Anticipa la violència de la Setmana Tràgica (1909)."
    }
  },
  {
    id: "pucherazo-1907",
    year: 1907,
    title: "El Pucherazo (Caricatura)",
    type: "Font primària - Imatge",
    category: "Sistema Canovista",
    importance: "Alta",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pucherazo_1907.jpg",
    excerpt: "Caricatura sobre el frau electoral sistèmic.",
    modelAnswer: {
      identificacio: "Font iconogràfica satírica sobre la manipulació electoral.",
      analisi: "Il·lustra com es 'cuinaven' els vots (pucherazo) per garantir el torn.",
      context: "El frau era la base del bipartidisme.",
      valoracio: "Evidència visual del divorci entre l'Espanya oficial i la real."
    }
  },
  {
    id: "primo-1923",
    year: 1923,
    title: "Manifest de Primo de Rivera",
    type: "Font primària - Text",
    category: "Dictadura",
    importance: "Crítica",
    excerpt: `"Ha llegado para nosotros el momento... de libertar a la Patria de los profesionales de la política."`,
    modelAnswer: {
      identificacio: "Manifest de cop d'estat del general Primo de Rivera (13 de setembre de 1923).",
      analisi: "Justifica la dictadura com a solució a la corrupció i el desordre.",
      context: "Crisi d'Annual i descomposició del sistema canovista.",
      valoracio: "Fi definitiva del sistema parlamentari de 1876."
    }
  },
  {
    id: "largo-caballero-1924",
    year: 1924,
    title: "Largo Caballero (UGT)",
    type: "Font primària - Text polític",
    category: "Dictadura",
    importance: "Alta",
    excerpt: `"Nosotros no hemos apoyado al régimen dictatorial; lo que hemos hecho es aprovechar las circunstancias para defender a la clase trabajadora."`,
    modelAnswer: {
      identificacio: "Defensa de la col·laboració de la UGT amb la Dictadura.",
      analisi: "Argumenta pragmatisme per mantenir legal el sindicat.",
      context: "La dictadura integra el socialisme moderat en els Comitès Paritaris.",
      valoracio: "Mostra la divisió de l'esquerra davant Primo de Rivera."
    }
  }
];

// --- COMPONENTS AUXILIARS ---
const AnswerBox = ({ title, content, icon: Icon, color }: any) => {
  const colors: any = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
    amber: "bg-amber-50 border-amber-200 text-amber-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900"
  };
  return (
    <div className={`p-4 rounded-xl border ${colors[color]} mb-3`}>
      <h4 className="flex items-center gap-2 font-bold text-xs uppercase mb-2 opacity-70">
        <Icon className="h-4 w-4" /> {title}
      </h4>
      <p className="text-sm leading-relaxed">{content}</p>
    </div>
  );
};

// --- COMPONENT PRINCIPAL ---
export default function PAUApp() {
  const [selectedId, setSelectedId] = useState(sources[0].id);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = useMemo(() => sources.find(s => s.id === selectedId) || sources[0], [selectedId]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 italic">HISTÒRIA 360° PAU</h1>
            <p className="text-slate-500 text-sm">Restauració i Dictadura (1874-1930)</p>
          </div>
          <Badge className="bg-indigo-600">12 FONTS CLAU</Badge>
        </header>

        {/* Timeline */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm overflow-x-auto">
          <div className="flex min-w-[900px] justify-between relative px-4 py-2">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />
            {sources.sort((a,b) => a.year - b.year).map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelectedId(s.id); setShowAnswer(false); }}
                className={`relative z-10 flex flex-col items-center gap-2 px-2 transition-all ${selectedId === s.id ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
              >
                <div className={`h-8 w-8 rounded-full border-4 flex items-center justify-center text-[10px] font-bold ${
                  selectedId === s.id ? 'bg-indigo-600 border-indigo-100 text-white' : 'bg-white border-slate-200 text-slate-400'
                }`}>
                  {s.year.toString().slice(2)}
                </div>
                <span className="text-[10px] font-bold text-slate-500">{s.year}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Card className="border-none shadow-lg rounded-3xl overflow-hidden bg-white">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">{current.category}</Badge>
                  {current.importance === "Crítica" && <Badge className="bg-rose-500">ESSENCIAL</Badge>}
                </div>
                <CardTitle className="text-xl">{current.title}</CardTitle>
                <CardDescription>{current.type} • {current.year}</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {current.imageUrl ? (
                  <div className="space-y-4">
                    <img src={current.imageUrl} alt={current.title} className="rounded-xl border w-full max-h-72 object-contain bg-slate-50" />
                    <p className="text-sm italic text-slate-400 text-center">{current.excerpt}</p>
                  </div>
                ) : (
                  <div className="border-l-4 border-indigo-500 pl-6 py-2">
                    <p className="text-lg leading-relaxed text-slate-700 font-serif italic">{current.excerpt}</p>
                  </div>
                )}
                <Button onClick={() => setShowAnswer(!showAnswer)} className="w-full py-8 text-lg font-bold rounded-2xl bg-indigo-600 hover:bg-indigo-700">
                  {showAnswer ? "TANCAR ANÀLISI" : "VEURE RESPOSTA MODEL"}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5">
            {showAnswer ? (
              <div className="space-y-0 animate-in fade-in slide-in-from-right-4 duration-300">
                <AnswerBox title="Identificació" content={current.modelAnswer.identificacio} icon={Info} color="blue" />
                <AnswerBox title="Anàlisi" content={current.modelAnswer.analisi} icon={BookOpen} color="emerald" />
                <AnswerBox title="Context" content={current.modelAnswer.context} icon={History} color="amber" />
                <AnswerBox title="Valoració" content={current.modelAnswer.valoracio} icon={GraduationCap} color="purple" />
              </div>
            ) : (
              <div className="h-full border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-10 text-center">
                <LayoutDashboard className="h-12 w-12 text-slate-200 mb-4" />
                <p className="text-slate-400 font-medium italic text-sm">Selecciona una font i prem el botó per preparar l'examen.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
