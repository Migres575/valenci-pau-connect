import React, { useState, useMemo } from "react";
import { 
  FileText, Eye, EyeOff, BookOpen, GraduationCap, History, 
  Calendar, Info, LayoutDashboard, AlertCircle, Award, Target
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
      identificacio: "Text polític de caràcter primari. És el Manifest de Sandhurst, redactat per Cánovas del Castillo i signat pel príncep Alfons XII l'1 de desembre de 1874 des de l'acadèmia militar a Anglaterra.",
      analisi: "El text presenta la monarquia com l'única solució per garantir l'ordre i la llibertat després del caos del Sexenni. Defineix la futura Restauració com una monarquia constitucional, liberal i catòlica, allunyant-se de l'absolutisme tradicional.",
      context: "Fase final del Sexenni Democràtic (República en crisi). Cánovas busca un suport civil per a la tornada dels Borbons per evitar el protagonisme militar, tot i que el pronunciament de Martínez Campos a Sagunt acceleraria el procés.",
      valoracio: "És el document fundacional del règim. Estableix les bases del sistema canovista que es basarà en el bipartidisme i l'estabilitat civil durant més de mig segle."
    }
  },
  {
    id: "constitucio-1876",
    year: 1876,
    title: "Constitució de 1876",
    type: "Font primària - Text jurídic",
    category: "Sistema Canovista",
    importance: "Crítica",
    excerpt: "Art. 18. La potestad de hacer las leyes reside en las Cortes con el Rey. Art. 19. Las Cortes se componen de dos Cuerpos Colegisladores, iguales en facultades: el Senado y el Congreso de los Diputados. [...] Art. 75. Unos mismos códigos regirán en toda la Monarquía, sin perjuicio de las variaciones que por particulares circunstancias determinen las leyes.",
    modelAnswer: {
      identificacio: "Font primària jurídica. Es tracta de la Constitució de 1876, la carta magna del sistema de la Restauració.",
      analisi: "Estableix la sobirania compartida entre el Rei i les Corts, un sistema bicameral i el catolicisme com a religió d'Estat (encara que es permet el culte privat d'altres religions). És un text elàstic i ambigu.",
      context: "Context de postguerra (Carlina i Cuba). Cánovas vol un text prou flexible perquè tant els conservadors com els liberals puguin governar sense haver de canviar la constitució constantment.",
      valoracio: "Representa el liberalisme doctrinari i l'ordre burgès. Va ser la constitució amb més vigència d'Espanya (fins al 1931), però el seu caràcter poc democràtic va acabar allunyant-la de la societat real."
    }
  },
  {
    id: "pi-margall-1877",
    year: 1877,
    title: "Pi i Margall: Las Nacionalidades",
    type: "Font primària - Assaig polític",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: "El verdadero y principal motivo del atraso de España es la centralización (...). La centralización que convierte a la capital en el corazón de la vida política i condena a las provincias al marasmo. [...] España no es una nación, sino un conjunto de naciones que han de federarse para ser libres.",
    modelAnswer: {
      identificacio: "Font primària de naturalesa politicoideològica. Fragment de l'obra 'Las Nacionalidades' de Francesc Pi i Margall, expresident de la I República.",
      analisi: "Critica el model d'Estat centralista uniformador de la Restauració. Proposa el federalisme com l'única forma d'integrar la diversitat de pobles d'Espanya i modernitzar el país.",
      context: "Primers anys del regnat d'Alfons XII. L'Estat canovista està eliminant els furs bascos i reforçant el centralisme administratiu de Madrid.",
      valoracio: "Text clau de la tradició republicana federal que tindrà una gran influència en el futur catalanisme polític i en les reclamacions d'autonomia."
    }
  },
  {
    id: "bases-manresa-1892",
    year: 1892,
    title: "Bases de Manresa",
    type: "Font primària - Text polític",
    category: "Nacionalisme",
    importance: "Crítica",
    excerpt: "Base 3a. La llengua catalana serà la única que, ab caràcter oficial, podrà usar-se á Catalunya y en les relacions d'aquesta regió ab lo Poder Central. Base 4a. Sols los catalans podran desempenyar á Catalunya càrrechs públics. Base 6a. Catalunya serà la única sobirana de sa administració interna.",
    modelAnswer: {
      identificacio: "Text polític aprovat per la Unió Catalanista a Manresa el 1892. És el primer projecte d'autonomia per a Catalunya.",
      analisi: "Reivindica el retorn a les institucions pròpies anteriors al 1714. Demana competències exclusives en legislació civil, ensenyament, ordre públic i l'oficialitat única del català.",
      context: "Evolució del catalanisme des del vessant cultural (Renaixença) cap a una proposta política clara davant la crisi de l'Estat centralista.",
      valoracio: "Document fundacional del catalanisme polític. Tot i el seu to tradicionalista i corporativista, marca l'agenda de totes les demandes catalanes posteriors (Estatuts)."
    }
  },
  {
    id: "desastre-98",
    year: 1898,
    title: "El Desastre de Cuba i Filipines",
    type: "Font primària - Imatge històrica",
    category: "Oposició i Crisis",
    importance: "Crítica",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Desastre_del_98.jpg",
    excerpt: "Gravat que mostra el retorn dels soldats espanyols ferits i derrotats després de la pèrdua de les últimes colònies d'ultramar.",
    modelAnswer: {
      identificacio: "Font iconogràfica primària. Imatge de la premsa de l'època simbolitzant la derrota militar i humana del Desastre del 98.",
      analisi: "Mostra la precarietat de l'exèrcit i el patiment de les classes populars (que anaven a la guerra per no poder pagar la quota). Transmet el sentiment de derrota nacional.",
      context: "Guerra contra els Estats Units i pèrdua de Cuba, Puerto Rico i Filipines. Espanya queda reduïda a una potència de segon ordre.",
      valoracio: "Aquest fet provoca una crisi total de consciència (Generació del 98) i l'aparició del Regeneracionisme, que qüestionarà tot el sistema de la Restauració."
    }
  },
  {
    id: "costa-1901",
    year: 1901,
    title: "Joaquín Costa: Oligarquía y Caciquismo",
    type: "Font primària - Assaig polític",
    category: "Oposició i Crisis",
    importance: "Crítica",
    excerpt: "No es una forma de gobierno; es una enfermedad social (...). Con este régimen de oligarquía y caciquismo no hay libertad, ni hay sufragio, ni hay instituciones. Los oligarcas y los caciques forman una red que cubre todo el país. Hay que europeizar España con escuela y despensa.",
    modelAnswer: {
      identificacio: "Font primària de caràcter politicoideològic. Fragment de l'informe 'Oligarquía y Caciquismo' (1901) de Joaquín Costa.",
      analisi: "Denuncia el sistema del torn pacífic com una farsa. Defineix els 'cacics' com els agents que segresten el vot popular per beneficiar una minoria (oligarquia) vinculada a Madrid.",
      context: "Crisi del post-98. El país s'adona que el sistema està corromput. Costa proposa el regeneracionisme: modernització econòmica i educativa.",
      valoracio: "És la crítica més potent al sistema canovista. Els conceptes de Costa seran utilitzats tant per polítics de dretes (Maura) com d'esquerres per intentar reformar Espanya."
    }
  },
  {
    id: "maura-1902",
    year: 1902,
    title: "Antonio Maura: La Revolució des de dalt",
    type: "Font primària - Discurs parlamentari",
    category: "Sistema Canovista",
    importance: "Alta",
    excerpt: "Hay que hacer la revolución desde el gobierno, porque si no se hace desde el gobierno, se hará desde la calle. Es necesario que el pueblo se sienta partícipe de las instituciones, limpiando el sistema de la lacra del caciquismo que nos devora.",
    modelAnswer: {
      identificacio: "Font primària. Fragment d'un discurs d'Antonio Maura al Congrés dels Diputats l'any 1902.",
      analisi: "Maura sosté que si la monarquia no es reforma per ella mateixa i s'obre a la participació real dels ciutadans ('la massa neutra'), acabarà sent enderrocada per una revolució popular.",
      context: "Inici del regnat d'Alfons XIII. Maura lidera el Partit Conservador amb un programa regeneracionista que incloïa la Llei Electoral de 1907.",
      valoracio: "Representa l'intent de reformar el sistema sense trencar-lo. El seu fracàs va demostrar que el caciquisme era consubstancial a la Restauració i que no es podia eliminar sense destruir el règim."
    }
  },
  {
    id: "prat-riba-1906",
    year: 1906,
    title: "Prat de la Riba: La Nacionalitat Catalana",
    type: "Font primària - Assaig polític",
    category: "Nacionalisme",
    importance: "Alta",
    excerpt: "Catalunya és una nació (...). La nacionalitat és una unitat de cultura, una llengua, una història. L'Estat no és sinó l'organització política de la Nació. Poden haver-hi Estats que tinguin diverses nacions, com Espanya, però Catalunya ha de tenir el seu propi govern.",
    modelAnswer: {
      identificacio: "Font primària. Obra doctrinal d'Enric Prat de la Riba publicada el 1906.",
      analisi: "Diferencia clarament entre el concepte de Nació (comunitat amb llengua i cultura) i l'Estat (estructura administrativa). Defensa que Catalunya és una nació que té dret a un Estat o autogovern.",
      context: "Fundació de la Lliga Regionalista i creixement de la Solidaritat Catalana després dels fets del Cu-Cut!",
      valoracio: "És el llibre de capçalera del nacionalisme català conservador. Va servir de base teòrica per a la creació de la Mancomunitat de Catalunya el 1914."
    }
  },
  {
    id: "lerroux-1906",
    year: 1906,
    title: "Alejandro Lerroux: Jóvenes Bárbaros",
    type: "Font primària - Discurs polític",
    category: "Oposició i Crisis",
    importance: "Alta",
    excerpt: "Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente y miserable de este país de sus templos y degollad a sus dioses. No os detengáis ante nada. Hay que elevar al pueblo y destruir el poder de la Iglesia y la reacción.",
    modelAnswer: {
      identificacio: "Font primària de caràcter polític i populista. Fragment de l'article o discurs 'Rebeldes, rebeldes' d'Alejandro Lerroux.",
      analisi: "Utilitza un llenguatge extremadament violent, demagògic i anticlerical per mobilitzar les classes obreres barcelonines contra el sistema i l'Església.",
      context: "Creixement del republicanisme radical. Lerroux va ser utilitzat de vegades pel sistema canovista per dividir el vot nacionalista català i l'obrerisme anarquista.",
      valoracio: "Representa el descontentament social radicalitzat que culminaria poc després en els fets de la Setmana Tràgica de 1909 a Barcelona."
    }
  },
  {
    id: "pucherazo-1907",
    year: 1907,
    title: "El Sistema del Pucherazo (Caricatura)",
    type: "Font primària - Imatge",
    category: "Sistema Canovista",
    importance: "Alta",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pucherazo_1907.jpg",
    excerpt: "Caricatura de la revista 'La Campana de Gràcia' mostrant com el govern 'cuina' els vots en les urnes per guanyar les eleccions.",
    modelAnswer: {
      identificacio: "Font iconogràfica primària. Caricatura satírica sobre la corrupció electoral durant la Restauració.",
      analisi: "S'observa l'urna (el 'puchero') on s'introdueixen o es treuen vots arbitràriament. Representa el frau generalitzat, el vot de 'morts' (Llàtzer) i la manipulació de les actes electorals.",
      context: "L'Encasellat: el Ministeri de la Governació decidia qui havia de guanyar abans de votar. El cacic local s'encarregava d'executar aquestes ordres al camp.",
      valoracio: "Imatge clau per explicar per què el sistema del torn pacífic era estable però completament antidemocràtic i desconnectat de la realitat social."
    }
  },
  {
    id: "primo-1923",
    year: 1923,
    title: "Manifest de Primo de Rivera",
    type: "Font primària - Text polític",
    category: "Dictadura",
    importance: "Crítica",
    excerpt: "Al país y al Ejército: Ha llegado para nosotros el momento más temido que esperado de libertar a la Patria de los profesionales de la política, de los que por una u otra razón nos ofrecen el cuadro de desdichas e inmoralidades que empezaron el año 98. Nuestro objetivo es el orden, la paz social y la unidad de España.",
    modelAnswer: {
      identificacio: "Font primària. Manifest proclamat pel general Miguel Primo de Rivera el 13 de setembre de 1923 a Barcelona.",
      analisi: "Utilitza una retòrica militar i regeneracionista per justificar el cop d'estat. Presenta els polítics de la Restauració com a corruptes i l'exèrcit com el 'cirurgià de ferro' que ha de salvar el país.",
      context: "Crisis múltiples: desastre d'Annual (Marroc), pistolerisme a Barcelona, conflictivitat social i perill que l'Expedient Picasso esquitxés el Rei.",
      valoracio: "Marca la fi definitiva de la Constitució de 1876. Primo de Rivera governarà amb el vistiplau d'Alfons XIII, fet que acabarà sentenciant la monarquia el 1931."
    }
  },
  {
    id: "largo-caballero-1924",
    year: 1924,
    title: "Largo Caballero i la Dictadura",
    type: "Font primària - Article polític",
    category: "Dictadura",
    importance: "Alta",
    excerpt: "Nosotros no hemos apoyado al régimen dictatorial; lo que hemos hecho es aprovechar las circunstancias para defender los intereses de la clase trabajadora (...). Si la UGT hubiese adoptado una posición de resistencia, habría sido aplastada como lo ha sido la CNT. ¿Se nos puede exigir que sacrifiquemos nuestras organizaciones por una cuestión de pureza doctrinal?",
    modelAnswer: {
      identificacio: "Font primària. Fragment d'un escrit de Francisco Largo Caballero (líder de la UGT i del PSOE) l'any 1924.",
      analisi: "Justifica la col·laboració del sindicat socialista amb el règim de Primo de Rivera. Argumenta que la supervivència de les Cases del Poble i les millores laborals són prioritàries a la lluita política contra el dictador.",
      context: "La Dictadura va intentar integrar l'obrerisme moderat mitjançant Comitès Paritaris (corporativisme), mentre reprimia durament l'anarquisme (CNT).",
      valoracio: "Aquesta col·laboració va permetre a la UGT créixer durant els anys 20, però va generar fortes crítiques dins del socialisme i va ser clau per a la pau social que Primo de Rivera va mantenir uns anys."
    }
  }
];

// --- COMPONENTS VISUALS (SENSE SHADCN PER EVITAR ERRORS) ---
export default function PAUSourceManager() {
  const [selectedId, setSelectedId] = useState(sources[0].id);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = useMemo(() => sources.find(s => s.id === selectedId) || sources[0], [selectedId]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black text-indigo-900 tracking-tight flex items-center justify-center md:justify-start gap-3">
              <History className="h-8 w-8 text-indigo-600" />
              ANÀLISI PAU 360°
            </h1>
            <p className="text-gray-500 font-medium mt-1">Restauració i Dictadura (1874-1930) • 2n Batxillerat</p>
          </div>
          <div className="flex gap-3">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">12 Documents</span>
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-200">Efectiu PAU</span>
          </div>
        </header>

        {/* TIMELINE NAVIGATOR */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Cronologia de la font
          </h3>
          <div className="flex justify-between items-center relative px-4">
            <div className="absolute h-0.5 bg-gray-100 w-full left-0 z-0"></div>
            {sources.sort((a,b) => a.year - b.year).map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelectedId(s.id); setShowAnswer(false); }}
                className={`relative z-10 flex flex-col items-center gap-2 transition-all duration-300 ${selectedId === s.id ? 'scale-125' : 'opacity-40 hover:opacity-100'}`}
              >
                <div className={`h-10 w-10 rounded-full border-4 flex items-center justify-center text-[10px] font-black ${
                  selectedId === s.id ? 'bg-indigo-600 border-indigo-200 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400'
                }`}>
                  {s.year.toString().slice(2)}
                </div>
                <span className={`text-[10px] font-bold ${selectedId === s.id ? 'text-indigo-600' : 'text-gray-400'}`}>{s.year}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: THE SOURCE CARD */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">{current.category}</span>
                  {current.importance === "Crítica" && (
                    <span className="px-3 py-1 bg-rose-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider animate-pulse">Conceptes Crítics PAU</span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 leading-tight">{current.title}</h2>
                <p className="text-gray-400 text-sm mt-2 font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" /> {current.type}
                </p>
              </div>

              <div className="p-8 space-y-8">
                {current.imageUrl ? (
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex justify-center">
                      <img src={current.imageUrl} alt={current.title} className="max-h-[300px] object-contain rounded-lg shadow-sm" />
                    </div>
                    <p className="text-sm italic text-gray-500 text-center px-4 leading-relaxed">"{current.excerpt}"</p>
                  </div>
                ) : (
                  <div className="bg-indigo-50/30 p-8 rounded-3xl border-l-8 border-indigo-600 relative">
                    <p className="text-xl text-indigo-900 font-serif leading-relaxed italic">
                      "{current.excerpt}"
                    </p>
                  </div>
                )}

                <button 
                  onClick={() => setShowAnswer(!showAnswer)}
                  className={`w-full py-6 rounded-2xl text-lg font-black tracking-wide transition-all duration-300 shadow-lg ${
                    showAnswer 
                      ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200'
                  }`}
                >
                  {showAnswer ? (
                    <div className="flex items-center justify-center gap-2"><EyeOff /> AMAGAR ANÀLISI</div>
                  ) : (
                    <div className="flex items-center justify-center gap-2"><Eye /> REVELAR RESPOSTA MODEL PAU</div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: THE MODEL ANSWER PANEL */}
          <div className="lg:col-span-5">
            {showAnswer ? (
              <div className="space-y-4 animate-in slide-in-from-right-10 duration-500">
                <SectionItem 
                  title="1. Identificació" 
                  icon={<Info className="h-5 w-5 text-blue-600" />} 
                  text={current.modelAnswer.identificacio}
                  bgColor="bg-blue-50"
                  borderColor="border-blue-100"
                />
                <SectionItem 
                  title="2. Anàlisi del Contingut" 
                  icon={<Target className="h-5 w-5 text-emerald-600" />} 
                  text={current.modelAnswer.analisi}
                  bgColor="bg-emerald-50"
                  borderColor="border-emerald-100"
                />
                <SectionItem 
                  title="3. Context Històric" 
                  icon={<History className="h-5 w-5 text-amber-600" />} 
                  text={current.modelAnswer.context}
                  bgColor="bg-amber-50"
                  borderColor="border-amber-100"
                />
                <SectionItem 
                  title="4. Valoració i Conclusió" 
                  icon={<Award className="h-5 w-5 text-purple-600" />} 
                  text={current.modelAnswer.valoracio}
                  bgColor="bg-purple-50"
                  borderColor="border-purple-100"
                />
              </div>
            ) : (
              <div className="h-full border-4 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center opacity-60">
                <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                  <LayoutDashboard className="h-12 w-12 text-indigo-300" />
                </div>
                <h4 className="text-gray-400 font-black uppercase tracking-widest text-sm mb-2">Simulador d'Examen</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Llegeix el document amb calma i pensa els punts clau. <br/> Després, prem el botó per comparar-ho amb la resposta model.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-400 text-xs font-bold uppercase tracking-[0.3em] pb-10">
        Preparació 2026 • Història d'Espanya
      </footer>
    </div>
  );
}

// SUBCOMPONENT PER LES SECCIONS DE LA RESPOSTA
function SectionItem({ title, icon, text, bgColor, borderColor }: any) {
  return (
    <div className={`${bgColor} border ${borderColor} p-6 rounded-[1.5rem] shadow-sm`}>
      <h5 className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-gray-500 mb-3 opacity-80">
        {icon} {title}
      </h5>
      <p className="text-sm text-gray-800 leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}
