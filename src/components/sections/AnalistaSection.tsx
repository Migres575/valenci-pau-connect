import React, { useState, useMemo } from "react";
import { 
  FileText, Eye, EyeOff, BookOpen, GraduationCap, History, 
  Calendar, Info, LayoutDashboard, Target, Award
} from "lucide-react";

// --- BASE DE DADES COMPLETA (12 FONTS) ---
const sources = [
  {
    id: "sandhurst-1874",
    year: 1874,
    title: "Manifest de Sandhurst",
    type: "Font primària - Text polític",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: "Por virtud de la espontánea y solemne abdicación de mi augusta madre... soy el único que representa el derecho monárquico en España. [...] Ni de la española ni de las demás monarquías europeas puede esperarse hoy que sean absolutistas; la nuestra debe ser liberal.",
    modelAnswer: {
      identificacio: "Text polític de caràcter primari. Manifest firmat pel príncep Alfons XII a Sandhurst (1874).",
      analisi: "Presenta la monarquia com l'única solució per garantir l'ordre i la llibertat, definint-la com a liberal i catòlica.",
      context: "Fase final del Sexenni Democràtic. Cánovas busca la restauració borbònica per via civil.",
      valoracio: "Document fundacional del règim de la Restauració."
    }
  },
  {
    id: "constitucio-1876",
    year: 1876,
    title: "Constitució de 1876",
    type: "Font primària - Text jurídic",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: "Art. 18. La potestad de hacer las leyes reside en las Cortes con el Rey. Art. 50. La potestad de hacer ejecutar las leyes reside en el Rey... Art. 75. Unos mismos códigos regirán en toda la Monarquía.",
    modelAnswer: {
      identificacio: "Font jurídica primària. És la carta magna del sistema canovista.",
      analisi: "Estableix la sobirania compartida (Rei i Corts) i el caràcter confessional de l'Estat.",
      context: "Inici de la Restauració. Cánovas busca un text flexible per al torn pacífic.",
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
    excerpt: "El verdadero y principal motivo del atraso de España es la centralización (...). La centralización que convierte a la capital en el corazón de la vida política i condena a las provincias al marasmo.",
    modelAnswer: {
      identificacio: "Assaig polític primari de Francesc Pi i Margall, líder republicà federal.",
      analisi: "Critica el centralisme com a causa del retard d'Espanya i proposa el federalisme.",
      context: "Consolidació de l'Estat centralista de la Restauració.",
      valoracio: "Base doctrinal per al futur federalisme i nacionalisme català."
    }
  },
  {
    id: "bases-manresa-1892",
    year: 1892,
    title: "Bases de Manresa",
    type: "Font primària - Text polític",
    category: "Nacionalisme",
    importance: "Crítica",
    excerpt: "Base 3a. La llengua catalana serà la única que, ab caràcter oficial, podrà usar-se á Catalunya... Base 7a. Del Poder legislatiu regional s'encarregaran les Corts catalanes.",
    modelAnswer: {
      identificacio: "Projecte d'autonomia aprovat per la Unió Catalanista (1892).",
      analisi: "Reivindica corts pròpies, oficialitat del català i competències plenes.",
      context: "Pas del catalanisme cultural (Renaixença) al projecte polític.",
      valoracio: "Programa fundacional del nacionalisme català modern."
    }
  },
  {
    id: "desastre-98",
    year: 1898,
    title: "El Desastre del 98",
    type: "Font primària - Imatge",
    category: "Oposició i Crisis",
    importance: "Crítica",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Desastre_del_98.jpg",
    excerpt: "Representació del retorn dels soldats i la pèrdua de les últimes colònies.",
    modelAnswer: {
      identificacio: "Font iconogràfica sobre la pèrdua de Cuba i Filipines.",
      analisi: "Simbolitza el fracàs colonial i el xoc moral de la societat espanyola.",
      context: "Derrota davant els Estats Units i crisi de consciència nacional.",
      valoracio: "Origen del Regeneracionisme i crítica total al sistema canovista."
    }
  },
  {
    id: "costa-1901",
    year: 1901,
    title: "Joaquín Costa: Oligarquía y Caciquismo",
    type: "Font primària - Assaig",
    category: "Oposició i Crisis",
    importance: "Crítica",
    excerpt: "No es una forma de gobierno; es una enfermedad social (...). Los oligarcas y los caciques forman una red que cubre todo el país. Hay que europeizar España.",
    modelAnswer: {
      identificacio: "Assaig sociopolític de Joaquín Costa, líder del regeneracionisme.",
      analisi: "Denuncia que el sistema està corromput per una minoria que manipula el vot.",
      context: "Crisis post-1898. Demanda reformes de 'despensa y escuela'.",
      valoracio: "L'anàlisi més potent sobre el fracàs democràtic de la Restauració."
    }
  },
  {
    id: "maura-1902",
    year: 1902,
    title: "Maura: La Revolució des de dalt",
    type: "Font primària - Discurs",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: "Hay que hacer la revolución desde el gobierno, porque si no se hace desde el gobierno, se hará desde la calle. Hay que limpiar el sistema.",
    modelAnswer: {
      identificacio: "Discurs parlamentari d'Antonio Maura (Partit Conservador).",
      analisi: "Proposa reformar el sistema des de les institucions per evitar la revolució social.",
      context: "Inici del regnat d'Alfons XIII i intents de regeneració conservadora.",
      valoracio: "Representa l'intent fallit de 'sanejar' el caciquisme."
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
      identificacio: "Obra doctrinal d'Enric Prat de la Riba, líder de la Lliga Regionalista.",
      analisi: "Diferencia entre Nació (identitat) i Estat (política), demanant autogovern.",
      context: "Creixement del catalanisme polític i Solidaritat Catalana.",
      valoracio: "Text clau que definirà l'ideari de la Mancomunitat de Catalunya."
    }
  },
  {
    id: "lerroux-1906",
    year: 1906,
    title: "Alejandro Lerroux: Jóvenes Bárbaros",
    type: "Font primària - Discurs",
    category: "Oposició i Crisis",
    importance: "Alta",
    excerpt: "Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente (...). Destruid sus templos; acabad con sus dioses.",
    modelAnswer: {
      identificacio: "Discurs populista d'Alejandro Lerroux, líder republicà radical.",
      analisi: "Utilitza una retòrica anticlerical i violenta contra l'Estat i l'Església.",
      context: "Conflictivitat social a Barcelona i republicanisme de masses.",
      valoracio: "Representa el radicalisme que esclataria en la Setmana Tràgica (1909)."
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
    excerpt: "Caricatura mostrant la fabricació de vots per assegurar la victòria.",
    modelAnswer: {
      identificacio: "Font iconogràfica satírica sobre la corrupció electoral.",
      analisi: "Mostra com el Ministeri de la Governació i els cacics controlaven les urnes.",
      context: "Funcionament del torn pacífic basat en el frau.",
      valoracio: "Evidència de la manca de democràcia real del sistema."
    }
  },
  {
    id: "primo-1923",
    year: 1923,
    title: "Manifest de Primo de Rivera",
    type: "Font primària - Text",
    category: "Dictadura",
    importance: "Crítica",
    excerpt: "Ha llegado para nosotros el momento... de libertar a la Patria de los profesionales de la política, de los que nos ofrecen el cuadro de desdichas.",
    modelAnswer: {
      identificacio: "Manifest del cop d'estat militar del 13 de setembre de 1923.",
      analisi: "Justifica la dictadura com a solució a la corrupció i al desordre social.",
      context: "Crisi d'Annual al Marroc i descomposició del sistema canovista.",
      valoracio: "Marca la fi de la Constitució de 1876 i l'inici d'un règim autoritari."
    }
  },
  {
    id: "largo-caballero-1924",
    year: 1924,
    title: "Largo Caballero i la Dictadura",
    type: "Font primària - Text polític",
    category: "Dictadura",
    importance: "Alta",
    excerpt: "Nosotros no hemos apoyado al régimen dictatorial; lo que hemos hecho es aprovechar las circunstancias para defender a la clase trabajadora.",
    modelAnswer: {
      identificacio: "Text de Largo Caballero (UGT) justificant la col·laboració amb el règim.",
      analisi: "Argumenta pragmatisme per salvar el sindicat mentre la CNT és perseguida.",
      context: "Política corporativista de Primo de Rivera amb el moviment obrer.",
      valoracio: "Mostra la divisió de l'esquerra espanyola davant la dictadura."
    }
  }
];

// --- COMPONENT PRINCIPAL SENSE DEPENDÈNCIES SHADCN ---
export default function PAUSourceManager() {
  const [selectedId, setSelectedId] = useState(sources[0].id);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = useMemo(() => sources.find(s => s.id === selectedId) || sources[0], [selectedId]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <History size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">HISTÒRIA PAU 360°</h1>
              <p className="text-slate-500 text-xs">Anàlisi de 12 fonts clau (1874-1930)</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">12 Documents</span>
            <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">FullTemari</span>
          </div>
        </header>

        {/* TIMELINE NAVIGATOR */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm overflow-x-auto">
          <div className="flex justify-between items-center min-w-[800px] relative px-4">
            <div className="absolute h-0.5 bg-slate-100 w-full left-0 z-0"></div>
            {sources.sort((a,b) => a.year - b.year).map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelectedId(s.id); setShowAnswer(false); }}
                className={`relative z-10 flex flex-col items-center gap-2 transition-all ${selectedId === s.id ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
              >
                <div className={`h-10 w-10 rounded-full border-4 flex items-center justify-center text-[10px] font-black ${
                  selectedId === s.id ? 'bg-indigo-600 border-indigo-100 text-white shadow-md' : 'bg-white border-slate-100 text-slate-400'
                }`}>
                  {s.year.toString().slice(2)}
                </div>
                <span className={`text-[10px] font-bold ${selectedId === s.id ? 'text-indigo-600' : 'text-slate-400'}`}>{s.year}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FONT CARD */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-6 border-b flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">{current.category}</span>
                  <h2 className="text-xl font-bold text-slate-800">{current.title}</h2>
                  <p className="text-slate-400 text-xs font-medium flex items-center gap-1 mt-1">
                    <Calendar size={12} /> {current.year} • {current.type}
                  </p>
                </div>
                {current.importance === "Crítica" && (
                  <span className="bg-rose-500 text-white text-[8px] px-2 py-1 rounded font-black uppercase tracking-tighter">ESSENCIAL PAU</span>
                )}
              </div>

              <div className="p-8 space-y-6">
                {current.imageUrl ? (
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-2xl p-4 border flex justify-center">
                      <img src={current.imageUrl} alt={current.title} className="max-h-64 object-contain rounded shadow-sm" />
                    </div>
                    <p className="text-sm italic text-slate-500 text-center px-4 leading-relaxed">"{current.excerpt}"</p>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-indigo-500">
                    <p className="text-lg text-slate-700 font-serif leading-relaxed italic">"{current.excerpt}"</p>
                  </div>
                )}

                <button 
                  onClick={() => setShowAnswer(!showAnswer)}
                  className={`w-full py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                    showAnswer 
                      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {showAnswer ? <><EyeOff size={18}/> AMAGAR ANÀLISI</> : <><Eye size={18}/> REVELAR RESPOSTA MODEL</>}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* ANSWER PANEL */}
          <div className="lg:col-span-5">
            {showAnswer ? (
              <div className="space-y-4 animate-in fade-in duration-500">
                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                  <h4 className="flex items-center gap-2 font-black text-[10px] uppercase text-blue-600 mb-2"><Info size={16}/> 1. Identificació</h4>
                  <p className="text-sm text-blue-900 leading-relaxed">{current.modelAnswer.identificacio}</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <h4 className="flex items-center gap-2 font-black text-[10px] uppercase text-emerald-600 mb-2"><Target size={16}/> 2. Anàlisi</h4>
                  <p className="text-sm text-emerald-900 leading-relaxed">{current.modelAnswer.analisi}</p>
                </div>
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                  <h4 className="flex items-center gap-2 font-black text-[10px] uppercase text-amber-600 mb-2"><History size={16}/> 3. Context Històric</h4>
                  <p className="text-sm text-amber-900 leading-relaxed">{current.modelAnswer.context}</p>
                </div>
                <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
                  <h4 className="flex items-center gap-2 font-black text-[10px] uppercase text-purple-600 mb-2"><Award size={16}/> 4. Valoració</h4>
                  <p className="text-sm text-purple-900 leading-relaxed">{current.modelAnswer.valoracio}</p>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] border-4 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center p-10 text-center opacity-60">
                <LayoutDashboard size={48} className="text-slate-300 mb-4" />
                <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Simulador d'Examen</p>
                <p className="text-slate-400 text-xs mt-2 italic px-8">Selecciona una font i prem el botó per comparar la teva anàlisi amb la resposta de 10.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
