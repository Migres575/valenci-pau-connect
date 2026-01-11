import React, { useState, useMemo } from "react";
import { 
  FileText, Eye, EyeOff, BookOpen, GraduationCap, History, 
  Calendar, Info, LayoutDashboard, Target, Award, AlertTriangle
} from "lucide-react";

// --- INTERFÍCIE DE DADES ---
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

// --- BASE DE DADES COMPLETA (12 FONTS) ---
const sources: SourceAnalysis[] = [
  {
    id: "sandhurst-1874",
    year: 1874,
    title: "Manifest de Sandhurst",
    type: "Font primària - Text polític",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: "Por virtud de la espontánea y solemne abdicación de mi augusta madre... soy el único que representa el derecho monárquico en España. [...] Ni de la española ni de las demás monarquías europeas puede esperarse hoy que sean absolutistas; la nuestra debe ser liberal. [...] Sea lo que quiera mi propia suerte, ni dejaré de ser buen español, ni como todos mis antepasados, buen católico, ni como hombre del siglo, verdaderamente liberal.",
    modelAnswer: {
      identificacio: "Font primària de caràcter polític. Manifest redactat per Cánovas del Castillo i signat per Alfons XII el desembre de 1874 a Sandhurst (Anglaterra).",
      analisi: "El text presenta la Monarquia com l'única solució política estable. Proposa un règim constitucional, liberal i catòlic, allunyant-se de l'absolutisme anterior.",
      context: "Fase final del Sexenni Democràtic. Cánovas prepara el retorn dels Borbons com una solució civil, tot i que el pronunciament de Martínez Campos acceleraria el procés.",
      valoracio: "És el document fundacional de la Restauració. Estableix l'estratègia de Cánovas: un sistema de partits civil que garanteixi l'ordre burgès."
    }
  },
  {
    id: "constitucio-1876",
    year: 1876,
    title: "Constitució de 1876",
    type: "Font primària - Text jurídic",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: "Art. 18. La potestad de hacer las leyes reside en las Cortes con el Rey. Art. 19. Las Cortes se componen de dos Cuerpos Colegisladores, iguales en facultades: el Senado y el Congreso de los Diputados. [...] Art. 50. La potestad de hacer ejecutar las leyes reside en el Rey.",
    modelAnswer: {
      identificacio: "Text jurídic primari. És la Constitució de 1876, aprovada durant els primers anys de la Restauració borbònica.",
      analisi: "Estableix la sobirania compartida entre el Rei i les Corts, el caràcter confessional de l'Estat i una declaració de drets que podia ser limitada per lleis ordinàries.",
      context: "Context de postguerra (Carlina i Cuba). Cánovas dissenya un text elàstic que permeti governar tant a conservadors com a liberals sense canviar la carta magna.",
      valoracio: "Va ser la constitució amb més durada de la història d'Espanya (fins a 1931), clau per a l'estabilitat del torn pacífic però poc democràtica."
    }
  },
  {
    id: "pi-margall-1877",
    year: 1877,
    title: "Pi i Margall: Las Nacionalidades",
    type: "Font primària - Assaig polític",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: "El verdadero y principal motivo del atraso de España es la centralización (...). La centralización que convierte a la capital en el corazón de la vida política y condena a las provincias al marasmo. [...] España no es una nación, sino un conjunto de naciones.",
    modelAnswer: {
      identificacio: "Font primària politicoideològica. Fragment de l'obra de Francesc Pi i Margall, teòric del republicanisme federal.",
      analisi: "Denuncia el centralisme administratiu de l'Estat canovista com un obstacle per al progrés i proposa una estructura federal per a Espanya.",
      context: "Inici de la Restauració. L'Estat imposa un model uniformador que elimina els furs bascos i reforça el control de Madrid.",
      valoracio: "Text clau que influeix tant en el republicanisme com en els orígens del catalanisme polític reivindicant la pluralitat nacional."
    }
  },
  {
    id: "bases-manresa-1892",
    year: 1892,
    title: "Bases de Manresa",
    type: "Font primària - Text polític",
    category: "Nacionalisme",
    importance: "Crítica",
    excerpt: "Base 3a. La llengua catalana serà la única que, ab caràcter oficial, podrà usar-se á Catalunya... Base 4a. Sols los catalans podran desempenyar á Catalunya càrrechs públics... Base 7a. Del Poder legislatiu regional s'encarregaran les Corts catalanes.",
    modelAnswer: {
      identificacio: "Document polític aprovat per la Unió Catalanista a Manresa (1892). Primer projecte d'autogovern regional.",
      analisi: "Reivindica la sobirania de Catalunya en administració interna, corts pròpies, oficialitat del català i un sistema fiscal independent.",
      context: "Transició del catalanisme literari (Renaixença) al projecte polític davant el centralisme ineficaç de la Restauració.",
      valoracio: "Document fundacional del catalanisme. Tot i el seu caràcter tradicionalista, estableix les demandes que marcaran la política catalana del segle XX."
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
    excerpt: "Representació de la derrota militar i el retorn dels soldats espanyols procedents de Cuba i Filipines.",
    modelAnswer: {
      identificacio: "Font iconogràfica primària. Gravat que il·lustra el final de l'imperi colonial espanyol el 1898.",
      analisi: "Simbolitza el fracàs militar, humà i moral de la nació després del Tractat de París, on es perden les últimes colònies d'ultramar.",
      context: "Guerra contra els EUA. El desastre provoca un xoc nacional que qüestiona tot el sistema polític i social de la Restauració.",
      valoracio: "Inici del Regeneracionisme. Força la classe política a plantejar reformes per modernitzar 'l'Espanya real' davant 'l'Espanya oficial'."
    }
  },
  {
    id: "costa-1901",
    year: 1901,
    title: "Joaquín Costa: Oligarquía y Caciquismo",
    type: "Font primària - Assaig",
    category: "Oposició i Crisis",
    importance: "Crítica",
    excerpt: "No es una forma de gobierno; es una enfermedad social (...). Los oligarcas y los caciques forman una red que cubre todo el país. Hay que europeizar España con escuela y despensa.",
    modelAnswer: {
      identificacio: "Font primària de Joaquín Costa, principal intel·lectual del moviment regeneracionista.",
      analisi: "Defineix el sistema polític com una farsa on una minoria (oligarquia) controla el país mitjançant agents locals (cacics) que manipulen el vot.",
      context: "Post-desastre del 98. El país busca respostes a la seva decadència i Costa proposa modernització econòmica i educativa.",
      valoracio: "L'anàlisi més lúcida i influent sobre la corrupció del sistema canovista, servint de base per a futurs intents de reforma."
    }
  },
  {
    id: "maura-1902",
    year: 1902,
    title: "Maura: La Revolució des de dalt",
    type: "Font primària - Discurs",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: "Hay que hacer la revolución desde el gobierno, porque si no se hace desde el gobierno, se hará desde la calle. Es necesario que el pueblo se sienta partícipe de las instituciones.",
    modelAnswer: {
      identificacio: "Fragment d'un discurs d'Antonio Maura, líder del Partit Conservador a principis del segle XX.",
      analisi: "Proposa una reforma del sistema des de dins (reformisme conservador) per evitar un esclat revolucionari de les masses populars.",
      context: "Regeneracionisme des del poder. Maura intenta sanejar el sistema electoral per atreure la 'massa neutra' a la política.",
      valoracio: "Mostra la dificultat de democratitzar el règim sense trencar els privilegis de l'oligarquia que el sustentava."
    }
  },
  {
    id: "prat-riba-1906",
    year: 1906,
    title: "Prat de la Riba: La Nacionalitat Catalana",
    type: "Font primària - Assaig",
    category: "Nacionalisme",
    importance: "Alta",
    excerpt: "Catalunya és una nació (...). La nacionalitat és una unitat de cultura. L'Estat no és sinó l'organització política de la Nació.",
    modelAnswer: {
      identificacio: "Obra fonamental d'Enric Prat de la Riba, líder de la Lliga Regionalista i teòric del catalanisme.",
      analisi: "Estableix la distinció entre nació (comunitat cultural i històrica) i Estat (estructura política), reclamant l'autogovern per a Catalunya.",
      context: "Creixement del nacionalisme català després del tancament de caixes i la Llei de Jurisdiccions.",
      valoracio: "Text doctrinal que permet unificar el catalanisme conservador i culminarà en la creació de la Mancomunitat (1914)."
    }
  },
  {
    id: "lerroux-1906",
    year: 1906,
    title: "Lerroux: Jóvenes Bárbaros",
    type: "Font primària - Discurs",
    category: "Oposició i Crisis",
    importance: "Alta",
    excerpt: "Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente (...). Destruid sus templos; acabad con sus dioses. No os detengáis ante nada.",
    modelAnswer: {
      identificacio: "Crida a la revolució d'Alejandro Lerroux, líder del republicanisme radical a Barcelona.",
      analisi: "Utilitza una retòrica incendiària, anticlerical i demagògica per mobilitzar les classes obreres contra l'ordre establert.",
      context: "Augment de la conflictivitat social a Barcelona. El 'lerrouxisme' dividia el vot obrer i el nacionalista.",
      valoracio: "Aquest clima de violència verbal va ser el preludi de fets com la Setmana Tràgica (1909)."
    }
  },
  {
    id: "pucherazo-1907",
    year: 1907,
    title: "El Sistema del Pucherazo",
    type: "Font primària - Imatge",
    category: "Sistema Canovista",
    importance: "Alta",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pucherazo_1907.jpg",
    excerpt: "Caricatura de la premsa satírica mostrant la manipulació de les urnes durant els processos electorals.",
    modelAnswer: {
      identificacio: "Font iconogràfica primària. Caricatura que denuncia el frau electoral sistemàtic del règim.",
      analisi: "Mostra el mètode del 'pucherazo' (afegir o treure vots de l'urna) per assegurar la victòria del partit prèviament encasellat.",
      context: "El torn pacífic depenia de la manipulació total de les eleccions per part del Ministeri de la Governació i els cacics.",
      valoracio: "Imatge clau per explicar la desconnexió entre la societat real i la política institucional de la Restauració."
    }
  },
  {
    id: "primo-1923",
    year: 1923,
    title: "Manifest de Primo de Rivera",
    type: "Font primària - Text",
    category: "Dictadura",
    importance: "Crítica",
    excerpt: "Al país y al Ejército: Ha llegado para nosotros el momento... de libertar a la Patria de los profesionales de la política, de los que nos ofrecen el cuadro de desdichas e inmoralidades que empezaron el año 98.",
    modelAnswer: {
      identificacio: "Manifest polític del general Miguel Primo de Rivera per justificar el cop d'estat del 13 de setembre de 1923.",
      analisi: "Ataca els polítics de la Restauració i promet ordre, unitat nacional i el final de la corrupció utilitzant retòrica militar.",
      context: "Crisi extrema del sistema parlamentari, conflictivitat social, pistolerisme i desastre d'Annual al Marroc.",
      valoracio: "Suposa la fi definitiva del sistema de 1876 i l'inici d'un període autoritari amb el suport del rei Alfons XIII."
    }
  },
  {
    id: "largo-caballero-1924",
    year: 1924,
    title: "Largo Caballero i la Dictadura",
    type: "Font primària - Text polític",
    category: "Dictadura",
    importance: "Alta",
    excerpt: "Nosotros no hemos apoyado al régimen dictatorial; lo que hemos hecho es aprovechar las circunstancias para defender a la clase trabajadora (...). Si la UGT hubiese adoptado resistencia, habría sido aplastada.",
    modelAnswer: {
      identificacio: "Escrit del líder socialista Francisco Largo Caballero justificant la seva col·laboració amb la Dictadura.",
      analisi: "Defensa una postura pragmàtica per mantenir la legalitat de la UGT i aconseguir millores laborals en els Comitès Paritaris.",
      context: "Política corporativista de Primo de Rivera que buscava integrar el socialisme moderat mentre reprimia els anarquistes (CNT).",
      valoracio: "Mostra la divisió de l'esquerra davant el règim i l'estratègia de supervivència del sindicalisme socialista."
    }
  }
];

// --- COMPONENTS VISUALS (SENSE DEPENDÈNCIES EXTERNES) ---
export default function PAUSourceManager() {
  const [selectedId, setSelectedId] = useState(sources[0].id);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = useMemo(() => sources.find(s => s.id === selectedId) || sources[0], [selectedId]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 p-3 rounded-2xl text-white">
              <History size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">ANALISTA PAU 360°</h1>
              <p className="text-slate-500 font-medium text-sm">Restauració i Dictadura (1874-1930)</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">2n Batxillerat</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">12 Fonts Clau</span>
          </div>
        </header>

        {/* TIMELINE NAVIGATOR */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 overflow-x-auto">
          <div className="flex justify-between items-center min-w-[800px] relative px-4">
            <div className="absolute h-0.5 bg-slate-100 w-full left-0 z-0"></div>
            {sources.sort((a,b) => a.year - b.year).map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelectedId(s.id); setShowAnswer(false); }}
                className={`relative z-10 flex flex-col items-center gap-2 transition-all ${selectedId === s.id ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
              >
                <div className={`h-10 w-10 rounded-full border-4 flex items-center justify-center text-[10px] font-black ${
                  selectedId === s.id ? 'bg-indigo-600 border-indigo-200 text-white shadow-md' : 'bg-white border-slate-100 text-slate-400'
                }`}>
                  {s.year.toString().slice(2)}
                </div>
                <span className={`text-[10px] font-bold ${selectedId === s.id ? 'text-indigo-600' : 'text-slate-400'}`}>{s.year}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FONT CARD */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">{current.category}</span>
                    {current.importance === "Crítica" && (
                      <span className="bg-rose-500 text-white text-[8px] px-1.5 py-0.5 rounded-sm font-black">CRÍTICA PAU</span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{current.title}</h2>
                </div>
                <Calendar className="text-slate-300" />
              </div>

              <div className="p-8 space-y-6">
                {current.imageUrl ? (
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex justify-center">
                      <img src={current.imageUrl} alt={current.title} className="max-h-64 object-contain rounded shadow-sm" />
                    </div>
                    <p className="text-sm italic text-slate-500 text-center px-4 leading-relaxed">"{current.excerpt}"</p>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-500">
                    <p className="text-lg text-slate-700 font-serif leading-relaxed italic italic">"{current.excerpt}"</p>
                  </div>
                )}

                <button 
                  onClick={() => setShowAnswer(!showAnswer)}
                  className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                    showAnswer 
                      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
                  }`}
                >
                  {showAnswer ? "Amagar Resposta" : "Revelar Resposta Model PAU"}
                </button>
              </div>
            </div>
          </div>

          {/* ANSWER PANEL */}
          <div className="lg:col-span-5">
            {showAnswer ? (
              <div className="space-y-4">
                <Section title="1. Identificació" icon={<Info size={18} />} color="blue" text={current.modelAnswer.identificacio} />
                <Section title="2. Anàlisi" icon={<Target size={18} />} color="emerald" text={current.modelAnswer.analisi} />
                <Section title="3. Context Històric" icon={<History size={18} />} color="amber" text={current.modelAnswer.context} />
                <Section title="4. Valoració" icon={<Award size={18} />} color="purple" text={current.modelAnswer.valoracio} />
              </div>
            ) : (
              <div className="h-full border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-10 text-center opacity-60">
                <LayoutDashboard size={48} className="text-slate-300 mb-4" />
                <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Panell d'Anàlisi</p>
                <p className="text-slate-400 text-xs mt-2">Prem el botó per veure l'estructura de resposta.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, color, text }: any) {
  const colors: any = {
    blue: "bg-blue-50 border-blue-100 text-blue-900",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-900",
    amber: "bg-amber-50 border-amber-100 text-amber-900",
    purple: "bg-purple-50 border-purple-100 text-purple-900"
  };

  return (
    <div className={`p-5 rounded-2xl border ${colors[color]} shadow-sm`}>
      <h4 className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest mb-2 opacity-70">
        {icon} {title}
      </h4>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}
