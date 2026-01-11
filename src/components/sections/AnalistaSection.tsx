import { useState, useMemo } from "react";
import { 
  FileText, Eye, EyeOff, BookOpen, GraduationCap, History, 
  Calendar, Info, LayoutDashboard, Image as ImageIcon,
  AlertTriangle, CheckCircle
} from "lucide-react";
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

// --- BASE DE DADES TOTAL (LES TEVES + LES NOVES) ---

const sources: SourceAnalysis[] = [
  {
    id: "sandhurst-1874",
    year: 1874,
    title: "Manifest de Sandhurst",
    type: "Font primària - Text polític",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: `"Ni de la española ni de las demás monarquías europeas puede esperarse hoy que sean absolutistas; la nuestra debe ser liberal. [...] Sóc catòlic, com els meus avantpassats, però d'altra banda sóc un home del meu temps, un príncep lliberal."`,
    modelAnswer: {
      identificacio: "Text polític de caràcter primari. Manifest firmat pel príncep Alfons XII a l'acadèmia militar anglesa de Sandhurst el desembre de 1874.",
      analisi: "Presenta la monarquia com l'única solució per garantir l'ordre i la llibertat, definint-la com a liberal i catòlica.",
      context: "Fase final del Sexenni Democràtic. Cánovas busca restaurar els Borbons de forma civil abans del pronunciament de Martínez Campos.",
      valoracio: "Document fundacional de la Restauració que estableix el programa polític d'Alfons XII."
    }
  },
  {
    id: "constitucio-1876",
    year: 1876,
    title: "Constitució de 1876 (Articles 18, 50 i 75)",
    type: "Font primària - Text jurídic",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: `"Art. 18. La potestat de fer les lleis resideix en les Corts amb el Rei. Art. 50. La potestat de fer executar les lleis resideix en el Rei... Art. 75. Uns mateixos codis regiran en tota la Monarquia."`,
    modelAnswer: {
      identificacio: "Text jurídic primari: extractes de la Constitució de 1876, text fonamental del règim de la Restauració.",
      analisi: "Defineix la sobirania compartida entre el Rei i les Corts, superant la sobirania nacional de 1869. Estableix la prerrogativa reial clau per al torn pacífic.",
      context: "Inici de la Restauració borbònica. Dissenyada per Cánovas per ser flexible i permetre el bipartidisme sense canviar de llei fonamental.",
      valoracio: "Document clau per l'estabilitat del sistema. Va estar vigent fins a 1931, sent la de major durada de la història espanyola."
    }
  },
  {
    id: "pi-margall-federalisme",
    year: 1877,
    title: "Pi i Margall: Las Nacionalidades",
    type: "Font primària - Assaig polític",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: `"El verdadero y principal motivo del atraso de España es la centralización (...). La centralización que convierte a la capital en el corazón de la vida política i condena a las provincias al marasmo."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter politicoideològic. Fragment de l'obra de Francesc Pi i Margall, líder republicà federal.",
      analisi: "Diagnostica el retard d'Espanya i en proposa una causa estructural: el centralisme de Madrid que ofega les regions.",
      context: "Primers anys de la Restauració. Pi i Margall defensa el federalisme com a alternativa al sistema monàrquic centralista.",
      valoracio: "Anticipa el debat sobre la qüestió territorial i influeix en les arrels del catalanisme polític."
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
      identificacio: "Document polític aprovat per la Unió Catalanista el 1892 a Manresa.",
      analisi: "Reivindica una autonomia plena: oficialitat del català, corts pròpies i competències exclusives en administració interna.",
      context: "Pas del catalanisme cultural (Renaixença) al projecte polític d'autogovern regional.",
      valoracio: "Programa fundacional del catalanisme polític que marcarà les reivindicacions durant tot el segle XX."
    }
  },
  {
    id: "desastre-98",
    year: 1898,
    title: "El Desastre del 98",
    type: "Font primària - Imatge/Gràfic",
    category: "Oposició i Crisis",
    importance: "Crítica",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Desastre_del_98.jpg",
    excerpt: "Representació del retorn dels soldats i la pèrdua de Cuba, Puerto Rico i Filipines.",
    modelAnswer: {
      identificacio: "Font iconogràfica primària que representa la derrota militar davant els EUA el 1898.",
      analisi: "Simbolitza el fi de l'Imperi colonial espanyol i el xoc moral de la societat davant la pèrdua de les últimes colònies.",
      context: "Punt d'inflexió històric que dóna lloc al Regeneracionisme i a la crítica al sistema de la Restauració.",
      valoracio: "Aquest fet desencadena la crisi de consciència nacional i el desig de modernització d'Espanya."
    }
  },
  {
    id: "costa-oligarquia",
    year: 1901,
    title: "Joaquín Costa: Oligarquía y Caciquismo",
    type: "Font primària - Assaig polític",
    category: "Oposició i Crisis",
    importance: "Crítica",
    excerpt: `"No es una forma de gobierno; es una enfermedad social (...). Los oligarcas y los caciques forman una red que cubre todo el país. Hay que europeizar España."`,
    modelAnswer: {
      identificacio: "Font primària de naturalesa politicoideològica escrita pel principal intel·lectual del regeneracionisme.",
      analisi: "Denuncia el sistema de la Restauració com una farsa. Defineix el caciquisme com una malaltia social que segresta la voluntat popular.",
      context: "Context del Desastre del 98. Costa diagnostica els mals d'Espanya i proposa 'escola i rebost'.",
      valoracio: "Anàlisi lúcida que divideix l'Espanya oficial de la real, influint en tots els reformistes posteriors."
    }
  },
  {
    id: "maura-revolucion",
    year: 1902,
    title: "Maura: La Revolució des de dalt",
    type: "Font primària - Discurs parlamentari",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: `"Hay que hacer la revolución desde el gobierno, porque si no se hace desde el gobierno, se hará desde la calle."`,
    modelAnswer: {
      identificacio: "Font primària: fragment d'un discurs d'Antonio Maura al Congrés dels Diputats el 1902.",
      analisi: "Defensa la necessitat de reformar el sistema des de les institucions per evitar una revolució social violenta.",
      context: "Inici del regnat d'Alfons XIII. Maura lidera el regeneracionisme conservador per sanejar el sistema electoral.",
      valoracio: "Mostra els límits del reformisme: la dificultat de democratitzar el sistema sense trencar els privilegis de l'oligarquia."
    }
  },
  {
    id: "prat-riba-nacionalitat",
    year: 1906,
    title: "Prat de la Riba: La Nacionalitat Catalana",
    type: "Font primària - Assaig polític",
    category: "Nacionalisme",
    importance: "Alta",
    excerpt: `"Catalunya és una nació (...). La nacionalitat és una unitat de cultura. L'Estat no és sinó l'organització política de la Nació."`,
    modelAnswer: {
      identificacio: "Font primària. Obra doctrinal d'Enric Prat de la Riba, líder de la Lliga Regionalista.",
      analisi: "Defineix Catalunya com una nació cultural prèvia a l'Estat. Estableix que cada nació ha de tenir la seva estructura política.",
      context: "Creixement del catalanisme polític i fundació de la Lliga Regionalista.",
      valoracio: "Text fonamental del nacionalisme català conservador que permet reclamar l'autogovern dins d'Espanya."
    }
  },
  {
    id: "pucherazo-satira",
    year: 1907,
    title: "Sàtira del Pucherazo",
    type: "Font primària - Imatge/Gràfic",
    category: "Sistema Canovista",
    importance: "Alta",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pucherazo_1907.jpg",
    excerpt: "Caricatura il·lustrant la fabricació de vots per assegurar la victòria del partit en el poder.",
    modelAnswer: {
      identificacio: "Font iconogràfica satírica sobre la manipulació electoral (pucherazo).",
      analisi: "Mostra com el Ministeri de la Governació i els cacics controlaven el recompte de vots abans de les eleccions.",
      context: "El funcionament del torn pacífic basat en l'encasellat i el frau generalitzat.",
      valoracio: "Evidència visual de la corrupció estructural que impedia qualsevol democratització real del sistema."
    }
  },
  {
    id: "lerroux-miting",
    year: 1906,
    title: "Alejandro Lerroux: Jóvenes Bárbaros",
    type: "Font primària - Discurs polític",
    category: "Oposició i Crisis",
    importance: "Alta",
    excerpt: `"Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente (...). Destruid sus templos; acabad con sus dioses."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític i populista. Discurs d'Alejandro Lerroux a Santander.",
      analisi: "Retòrica anticlerical i incendiària dirigida a les masses obreres contra l'ordre establert.",
      context: "Creixement del republicanisme radical. Lerroux mobilitza el vot obrer barceloní amb un discurs demagògic.",
      valoracio: "Representa la fractura social i l'anticlericalisme que esclataria poc després en la Setmana Tràgica de 1909."
    }
  },
  {
    id: "primo-1923",
    year: 1923,
    title: "Manifest de Primo de Rivera",
    type: "Font primària - Text polític",
    category: "Dictadura",
    importance: "Crítica",
    excerpt: `"Ha llegado para nosotros el momento más temido que esperado de libertar a la Patria de los profesionales de la política."`,
    modelAnswer: {
      identificacio: "Manifest polític-militar que justifica el cop d'estat del 13 de setembre de 1923.",
      analisi: "Presenta l'exèrcit com a salvador de la pàtria contra la corrupció política i el desordre social.",
      context: "Crisi extrema del sistema de la Restauració, desastre d'Annual i por a l'Expedient Picasso.",
      valoracio: "Fi de la Constitució de 1876 i inici d'una dictadura autoritària amb el suport del Rei Alfons XIII."
    }
  },
  {
    id: "largo-caballero",
    year: 1924,
    title: "Largo Caballero: Col·laboració amb la Dictadura",
    type: "Font primària - Article polític",
    category: "Dictadura",
    importance: "Alta",
    excerpt: `"Nosotros no hemos apoyado al régimen dictatorial; lo que hemos hecho es aprovechar las circunstancias para defender a la clase trabajadora."`,
    modelAnswer: {
      identificacio: "Font primària on el líder de la UGT justifica la col·laboració amb Primo de Rivera.",
      analisi: "Defensa el pragmatisme sindical per mantenir la legalitat de la UGT mentre la CNT és perseguida.",
      context: "La Dictadura va intentar integrar el moviment obrer mitjançant Comitès Paritaris corporativistes.",
      valoracio: "Mostra la divisió de l'esquerra i l'estratègia de Primo de Rivera per aconseguir pau social."
    }
  }
];

// --- COMPONENT PRINCIPAL ---

export default function IntegratedSourceMaster() {
  const [selectedId, setSelectedId] = useState(sources[0].id);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = useMemo(() => sources.find(s => s.id === selectedId) || sources[0], [selectedId]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Capçalera */}
        <header className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2 italic">
              <History className="h-7 w-7 text-indigo-600" />
              EL TEMARI EN 12 DOCUMENTS
            </h1>
            <p className="text-slate-500 font-medium italic">Restauració i Dictadura: Preparació PAU</p>
          </div>
          <Badge className="bg-indigo-600 text-white border-none px-4 py-2">VISIÓ 360° COMPLETA</Badge>
        </header>

        {/* Línia del Temps (Ordenada) */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm overflow-x-auto">
          <div className="flex min-w-[900px] justify-between relative px-4">
            <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100" />
            {sources.sort((a,b) => a.year - b.year).map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelectedId(s.id); setShowAnswer(false); }}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className={`h-8 w-8 rounded-full border-4 transition-all flex items-center justify-center text-[10px] font-bold ${
                  selectedId === s.id ? 'bg-indigo-600 border-indigo-100 text-white scale-110' : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200'
                }`}>
                  {s.year.toString().slice(2)}
                </div>
                <span className={`mt-2 text-[10px] font-bold ${selectedId === s.id ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {s.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* L'Original Document */}
          <div className="lg:col-span-7">
            <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white">
              <CardHeader className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-indigo-600">{current.category}</Badge>
                  {current.importance === "Crítica" && <Badge className="bg-rose-500">ESSENCIAL</Badge>}
                </div>
                <CardTitle className="text-xl text-slate-800">{current.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {current.year} • {current.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {current.imageUrl ? (
                  <div className="space-y-4">
                    <img src={current.imageUrl} className="rounded-xl border w-full h-auto max-h-80 object-contain bg-slate-50 p-2" />
                    <p className="text-sm italic text-slate-400 text-center">{current.excerpt}</p>
                  </div>
                ) : (
                  <div className="border-l-4 border-indigo-500 pl-6 bg-slate-50/50 p-4 rounded-r-xl">
                    <p className="text-lg leading-relaxed text-slate-700 font-serif italic">{current.excerpt}</p>
                  </div>
                )}
                
                <Button onClick={() => setShowAnswer(!showAnswer)} className={`w-full py-8 text-lg font-black transition-all rounded-2xl ${showAnswer ? 'bg-slate-200 text-slate-600' : 'bg-indigo-600 shadow-lg shadow-indigo-100'}`}>
                  {showAnswer ? <><EyeOff className="mr-2 h-6 w-6" /> TANCAR ANÀLISI</> : <><Eye className="mr-2 h-6 w-6" /> VEURE RESPOSTA MODEL</>}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* L'Anàlisi lateral */}
          <div className="lg:col-span-5">
            {showAnswer ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <AnswerBox title="1. Identificació" content={current.modelAnswer.identificacio} icon={Info} color="blue" />
                <AnswerBox title="2. Anàlisi" content={current.modelAnswer.analisi} icon={BookOpen} color="emerald" />
                <AnswerBox title="3. Context" content={current.modelAnswer.context} icon={History} color="amber" />
                <AnswerBox title="4. Valoració" content={current.modelAnswer.valoracio} icon={GraduationCap} color="purple" />
              </div>
            ) : (
              <div className="h-full border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-10 text-center text-slate-300">
                <LayoutDashboard className="h-12 w-12 mb-4" />
                <p className="font-bold uppercase tracking-widest text-sm italic">Panell de l'Alumne</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnswerBox({ title, content, icon: Icon, color }: any) {
  const styles: any = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
    amber: "bg-amber-50 border-amber-200 text-amber-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900"
  };
  return (
    <div className={`p-5 rounded-2xl border ${styles[color]}`}>
      <h4 className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-60"><Icon className="h-4 w-4" /> {title}</h4>
      <p className="text-sm leading-relaxed">{content}</p>
    </div>
  );
}
