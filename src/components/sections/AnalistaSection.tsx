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
import { Badge } from "@/components/ui/badge";

interface SourceAnalysis {
  id: string;
  title: string;
  type: string;
  category: string;
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
    title: "Constitució de 1876 (Articles 18 i 50)",
    type: "Font primària - Text jurídic",
    category: "Sistema Canovista",
    excerpt: `"Art. 18. La potestat de fer les lleis resideix en les Corts amb el Rei.

Art. 50. La potestat de fer executar les lleis resideix en el Rei, i la seua autoritat s'estén a tot quant condueix a la conservació de l'ordre públic en l'interior i a la seguretat de l'Estat en l'exterior.

Art. 51. El Rei sanciona i promulga les lleis.

Art. 54. El Rei convoca les Corts, suspèn i tanca les seues sessions i dissol simultàniament o separadament el Congrés dels Diputats i el Senat, amb l'obligació, en este cas, de convocar i reunir el Cos o Cossos dissolts dins de tres mesos..."`,
    modelAnswer: {
      identificacio: "Es tracta d'un text jurídic de caràcter primari: extractes de la Constitució de 1876, text fonamental del règim de la Restauració. Va ser redactada per una comissió de notables sota la direcció de Manuel Alonso Martínez i promoguda pel polític conservador Antonio Cánovas del Castillo. La Constitució va ser aprovada el 30 de juny de 1876 per unes Corts constituents i va romandre vigent fins al 1931 (amb el parèntesi de la dictadura de Primo de Rivera), convertint-se en la de major durada de la història constitucional espanyola. El destinatari era tota la nació, ja que establia el marc jurídic fonamental de l'Estat. El propòsit era crear un sistema polític estable que superara la inestabilitat crònica del segle XIX espanyol.",
      analisi: "El text estableix els principis bàsics del sistema polític de la Restauració. L'article 18 defineix la sobirania compartida entre el Rei i les Corts, superant tant la sobirania nacional de la Constitució de 1869 com la sobirania exclusivament reial del règim isabelí. Aquesta fórmula, inspirada en el liberalisme doctrinari, permetia conciliar tradició monàrquica i parlamentarisme. Els articles 50, 51 i 54 configuren la prerrogativa reial: el monarca té àmplies facultats executives, incloent-hi la potestat de sancionar lleis, convocar i dissoldre les Corts. Aquesta prerrogativa seria clau per al funcionament del torn pacífic: quan un govern es desgastava, el Rei encarregava govern a l'altre partit i convocava eleccions que aquest guanyava. El text presenta una estructura clara i utilitza un llenguatge jurídic precís, propi dels textos constitucionals.",
      context: "La Constitució de 1876 s'emmarca en el procés de Restauració borbònica iniciat amb el pronunciament del general Martínez Campos a Sagunt el 29 de desembre de 1874, que va restaurar la monarquia en la persona d'Alfons XII, fill d'Isabel II. Després del Sexenni Democràtic (1868-1874), marcat per la inestabilitat política (revolució, monarquia democràtica d'Amadeu I, Primera República), Cánovas va dissenyar un sistema que garantira l'estabilitat mitjançant la integració de les dues famílies liberals (conservadors i progressistes) en un règim parlamentari controlat. La Constitució era prou flexible per permetre governs tant conservadors com liberals sense necessitat de canviar-la. Aquest text s'ha de relacionar amb el sistema del torn pacífic, el bipartidisme i la manipulació electoral (caciquisme, encasellat, pucherazo).",
      valoracio: "La Constitució de 1876 és un document fonamental per comprendre el sistema polític de la Restauració. El seu caràcter eclèctic i flexible va permetre una estabilitat sense precedents en la història constitucional espanyola, però també va facilitar la manipulació electoral i el funcionament del caciquisme. La sobirania compartida i l'àmplia prerrogativa reial limitaven la democratització real del sistema: el govern no depenia del resultat electoral sinó de la decisió del monarca. Tot i les seues limitacions democràtiques, la Constitució de 1876 va servir de marc legal per a la modernització d'Espanya durant mig segle i va demostrar que l'estabilitat era possible. La seua longevitat contrasta amb la brevetat de les constitucions anteriors. Com a font històrica, permet entendre la concepció del poder de les elits de la Restauració i el seu distanciament del model democràtic liberal europeu.",
    },
  },
  {
    id: "costa-oligarquia",
    title: "Joaquín Costa: Oligarquía y Caciquismo (1901)",
    type: "Font primària - Assaig polític",
    category: "Regeneracionisme",
    excerpt: `"No es una forma de gobierno; es una enfermedad social, lo que padece España (...). Los partidos son simples instrumentos o agentes de oligarquías que los manejan y dirigen. Los oligarcas y los caciques forman una red que cubre todo el país (...). Los diputados y senadores son producto de la fábrica caciquista, no de la voluntad nacional.

Hay que echar doble llave al sepulcro del Cid, para que no vuelva a cabalgar. Hay que europeizar España. Y hay que acometer una política de «escuela y despensa»: la escuela que redima al pueblo de su ignorancia, la despensa que lo redima de su hambre..."`,
    modelAnswer: {
      identificacio: "Font primària de naturalesa politicoideològica. Es tracta d'un fragment de l'obra 'Oligarquía y Caciquismo como la forma actual de gobierno en España', publicada el 1901 per Joaquín Costa (1846-1911), jurista, historiador, economista i polític aragonès, considerat el principal intel·lectual del regeneracionisme espanyol. L'obra recull les conclusions d'una enquesta realitzada per l'Ateneu de Madrid sobre els problemes d'Espanya. Costa escrivia per a un públic culte (intel·lectuals, professionals, classes mitjanes urbanes) amb la intenció de diagnosticar els mals d'Espanya i proposar solucions regeneradores.",
      analisi: "Costa denuncia el sistema polític de la Restauració com una farsa democràtica. El text presenta tres idees clau: 1) El sistema no és un problema polític sinó una 'malaltia social', és a dir, un problema estructural profund; 2) Els partits dinàstics són instruments de les oligarquies, no representants de la societat; el poder real resideix en la xarxa de cacics que controla tot el territori, no en les institucions formals; 3) Els diputats i senadors no representen la voluntat popular sinó els interessos de la 'fàbrica caciquista'. El text també proposa solucions: 'europeïtzar Espanya' (modernitzar el país seguint els models europeus) i la famosa consigna 'escuela y despensa' (educació massiva i desenvolupament econòmic). La metàfora del Cid (símbols del passat gloriós) expressa el rebuig a la retòrica patriòtica buida i la necessitat de mirar cap al futur. L'estil és directe, vehement, amb un to de denúncia.",
      context: "El text s'inscriu en el context del regeneracionisme, moviment intel·lectual i polític sorgit arran del Desastre del 98. La pèrdua de les últimes colònies (Cuba, Puerto Rico, Filipines) va provocar una profunda reflexió sobre les causes del retard espanyol. El regeneracionisme diagnosticava que Espanya patia un 'mal govern' causat per l'oligarquia i el caciquisme, que impedien el progrés nacional. Costa va elaborar un programa de reformes que incloïa: educació universal i moderna; política hidràulica (embassaments, regadius); reforma agrària; europeïtzació del pensament i les institucions. El regeneracionisme va influir en polítics com Antonio Maura i José Canalejas, que van intentar reformar el sistema des de dins, encara que les reformes proposades mai no es van aplicar plenament. El text també s'ha de relacionar amb la Generació del 98, que compartia la preocupació pel 'problema d'Espanya' però des d'una perspectiva més literària i filosòfica.",
      valoracio: "El text és essencial per comprendre la crisi del sistema de la Restauració i les demandes de reforma. Costa ofereix una anàlisi lúcida i encara avui influent dels mecanismes de poder: la distinció entre oligarquia i caciquisme, el concepte de 'Espanya real' versus 'Espanya oficial', han esdevingut clàssics del pensament polític espanyol. La seua proposta d'un 'cirurgià de ferro' que regenerara el país era, però, ambigua: podia interpretar-se en clau democràtica (un líder reformista) o autoritària (un dictador il·lustrat). Primo de Rivera va utilitzar la retòrica regeneracionista per justificar el seu colp d'estat. Com a font, el text té limitacions: representa el punt de vista de les classes mitjanes il·lustrades, no de les classes populars. Costa idealitzava un passat rural i comunal que probablement mai no va existir. Però la seua crítica al sistema oligàrquic i la seua demanda de modernització van tenir un impacte durador en la consciència política espanyola.",
    },
  },
  {
    id: "manifiest-primo",
    title: "Manifest de Primo de Rivera (13 de setembre de 1923)",
    type: "Font primària - Text polític",
    category: "Dictadura",
    excerpt: `"Al país y al Ejército: Ha llegado para nosotros el momento más temido que esperado (...) de recoger las ansias, de atender el clamoroso requerimiento de cuantos amando la Patria no ven para ella otra salvación que libertarla de los profesionales de la política, de los que por una u otra razón nos ofrecen el cuadro de desdichas e inmoralidades que empezaron el año 98 y amenazan a España con un próximo fin trágico y deshonroso.

La tupida red de la política de concupiscencias ha cogido en sus mallas, secuestrándola, hasta la voluntad real. Con frecuencia parecen pedir que gobiernen los que ellos dicen no dejan gobernar, aludiendo a los que les representen en las Cortes en el manejo del presupuesto..."`,
    modelAnswer: {
      identificacio: "Text primari de caràcter politicomilitar. Es tracta del manifest publicat el 13 de setembre de 1923 pel general Miguel Primo de Rivera (1870-1930), Capità General de Catalunya, per justificar el colp d'estat que va iniciar la dictadura. El manifest va ser publicat des de Barcelona i adreçat simultàniament a l'Exèrcit i a la nació espanyola. El destinatari era doble: d'una banda, els companys d'armes, dels quals esperava suport o almenys no-resistència; d'altra, la població civil, a la qual pretenia convèncer de la necessitat de l'acció. El propòsit era legitimar el pronunciament presentant-lo com una operació de salvament nacional front a la degradació política.",
      analisi: "El text presenta els elements típics d'un pronunciament militar: 1) Legitimació per la situació excepcional: el 'moment més temut' que arriba davant la impossibilitat de continuar tolerant la situació; 2) Apel·lació al patriotisme i a les 'ànsies' populars, presentant l'exèrcit com a intèrpret del sentiment nacional; 3) Crítica ferotge als 'professionals de la política' com a responsables exclusius de la decadència, des del Desastre del 98 fins a l'amenaça d'un 'fi tràgic i deshonrós'; 4) Denúncia de la corrupció política (la 'xarxa de concupiscències') que hauria segrestat fins i tot la voluntat reial. El to regeneracionista del manifest ('alliberar' el país dels polítics) connecta clarament amb les demandes de reforma acumulades des del 98, però les canalitza cap a una solució autoritària. L'estil és grandiloqüent, patriòtic, amb abundància de substantius abstractes (pàtria, salvació, honor) i un maniqueisme evident (polítics corruptes / exèrcit patriota).",
      context: "El colp es produeix en un moment de crisi aguda del sistema de la Restauració: la fragmentació dels partits dinàstics feia inviable el torn pacífic; l'Expedient Picasso estava a punt de revelar les responsabilitats pel Desastre d'Annual (1921), que podien implicar el rei; el terrorisme anarquista i el pistolerisme assotaven Barcelona; les tensions entre l'exèrcit i el poder civil s'havien intensificat des de 1917; la guerra del Marroc era impopular i costosa. La passivitat d'Alfons XIII davant el colp —no va ordenar a l'Exèrcit defensar la Constitució— va ser interpretada com un suport implícit al pronunciament. El colp comptava amb suports diversos: sectors empresarials catalans (que volien ordre davant la conflictivitat obrera); gran part de l'Exèrcit; sectors catòlics i conservadors; i fins i tot alguns socialistes (la UGT no es va oposar activament).",
      valoracio: "El manifest és clau per entendre la fi del sistema de la Restauració i l'inici d'un nou cicle polític. Primo de Rivera s'apropiava del llenguatge regeneracionista per justificar un règim autoritari. L'ambigüitat del regeneracionisme (el 'cirurgià de ferro' de Costa) es resolia ara clarament en sentit antidemocràtic. El document mostra com la crítica al parlamentarisme corrupte podia derivar en solucions anticonstitucionals. La referència a la 'voluntat real segrestada' és significativa: el rei seria després acusat de complicitat amb el colp, cosa que contribuiria a la seua caiguda el 1931. El manifest presenta una visió simplista de la realitat (tots els mals són culpa dels polítics) i proposa una solució simple (l'exèrcit com a salvador), obviant les causes estructurals dels problemes d'Espanya. Com a font, és representatiu de la mentalitat militar de l'època i del discurs legitimador dels cops d'estat, que es repetiria el 1936.",
    },
  },
  {
    id: "pi-margall-federalisme",
    title: "Francesc Pi i Margall: Las Nacionalidades (1877)",
    type: "Font primària - Assaig polític",
    category: "Sistema Canovista",
    excerpt: `"España es hoy una de las naciones más atrasadas de Europa. Trátase de explicar este fenómeno, y se lo atribuye generalmente a la influencia del clero, al fanatismo religioso, a la mala organización de nuestra enseñanza, al carácter de nuestra raza (...).

El verdadero y principal motivo del atraso de España es la centralización (...). La centralización que convierte a la capital en el corazón de la vida política, intelectual y moral de la nación, y condena a las provincias al marasmo y a la inercia (...). Vean si no cuán pobre es nuestro movimiento intelectual comparado con el de Francia y Alemania..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter politicoideològic. Es tracta d'un fragment de l'obra 'Las Nacionalidades' (1877) de Francesc Pi i Margall (1824-1901), polític i intel·lectual català, líder del Partit Republicà Federal i president de la Primera República (1873). L'obra és un assaig sobre el federalisme i la qüestió de les nacionalitats a Espanya i Europa. Pi i Margall escrivia des de l'oposició, un cop acabada la Primera República i instaurada la Restauració borbònica. El destinatari era el públic il·lustrat, especialment els republicans i progressistes. El propòsit era defensar el federalisme com a solució als problemes d'Espanya.",
      analisi: "El text diagnostica el 'retard' d'Espanya i n'analitza les causes. Pi i Margall rebutja les explicacions habituals (influència clerical, fanatisme religiós, defectes de raça) i proposa una causa estructural: la centralització. L'argument és que la concentració del poder i la vida intel·lectual a Madrid condemna les 'províncies' (les regions) al marasme i la inèrcia, empobrint el conjunt del país. La comparació amb França i Alemanya serveix per demostrar que el problema és polític, no racial o cultural. La proposta implícita és el federalisme: un Estat descentralitzat que permeta el desenvolupament autònom de cada regió. L'estil és racional, argumentatiu, propi d'un intel·lectual il·lustrat. Pi i Margall evita el to emocional i nacionalista, preferint l'anàlisi política.",
      context: "El text s'escriu el 1877, en els primers anys de la Restauració borbònica. Pi i Margall havia estat president de la Primera República (1873), intentant implantar un sistema federal que va fracassar enmig del cantonalisme i les guerres carlistes. La Restauració representava la reacció centralista i monàrquica contra l'experiment republicà. L'obra s'ha de situar en el context de l'emergència dels nacionalismes perifèrics: el catalanisme (Renaixença, Valentí Almirall), el nacionalisme basc (que naixeria el 1895 amb Sabino Arana) i el galleguisme. Pi i Margall proposava una alternativa des de l'esquerra: no el nacionalisme ètnic sinó el federalisme polític, que permetria la convivència de les diverses identitats dins un Estat descentralitzat.",
      valoracio: "El text és significatiu per diverses raons: anticipa el debat sobre la 'qüestió territorial' que marcaria tota la història contemporània espanyola; ofereix una alternativa al nacionalisme conservador (el dels regionalismes catòlic-tradicionalistes) des d'una perspectiva progressista i laica; i diagnostica problemes (centralisme, desigualtat territorial) que encara són vigents. Les limitacions del text són les pròpies del pensament de Pi i Margall: un racionalisme abstracte que infravalora les passions nacionals i una confiança excessiva en les solucions institucionals. Com a font, és representativa del republicanisme federal del segle XIX i de les arrels intel·lectuals del catalanisme polític, que adoptaria parcialment el llegat de Pi i Margall.",
    },
  },
  {
    id: "maura-revolucion",
    title: "Antonio Maura: Discurs sobre la 'Revolució des de dalt' (1902)",
    type: "Font primària - Discurs parlamentari",
    category: "Sistema Canovista",
    excerpt: `"Hay que hacer la revolución desde el gobierno, porque si no se hace desde el gobierno, se hará desde la calle (...). Nosotros tenemos que hacer la revolución: nosotros los conservadores de verdad (...).

Yo creo que esta es la misión histórica del partido conservador; que esta es la suprema justificación de nuestra existencia como partido: devolver a la Patria el gobierno por las urnas, la expresión verdadera de la voluntad nacional (...). Porque mientras esto no se haga, los partidos de turno, el uno y el otro, serán partidos de oligarquías que viven divorciadas de la masa popular..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític. Es tracta d'un fragment d'un discurs parlamentari d'Antonio Maura (1853-1925), polític conservador mallorquí, líder del Partit Conservador i diverses vegades president del govern (1903-1904, 1907-1909, 1918, 1919, 1921-1922). El discurs va ser pronunciat al Congrés dels Diputats el 1902, en el context dels debats sobre la regeneració del sistema polític. El destinatari immediat eren els parlamentaris i, a través d'ells, l'opinió pública. El propòsit era defensar un programa de reformes des del conservadorisme.",
      analisi: "El text presenta el programa reformista de Maura, resumit en la famosa fórmula de la 'revolució des de dalt'. L'argument és clar: si les elits no fan les reformes necessàries, les farà el poble 'des del carrer', és a dir, per mitjans revolucionaris. Per evitar la revolució social, cal fer una revolució política: acabar amb el caciquisme, democratitzar el sistema, fer que les eleccions reflecteixin la 'veritable voluntat nacional'. Maura assumeix el diagnòstic regeneracionista: els partits del torn són 'oligarquies divorciades de la massa popular'. Però la solució no és canviar el sistema, sinó regenerar-lo des de dins. El Partit Conservador ha de liderar aquest procés. L'estil és oratòric, amb ús de l'anàfora ('nosotros... nosotros') i un to d'urgència patriòtica.",
      context: "El discurs es produeix en els primers anys del regnat d'Alfons XIII (1902), moment en què el Desastre del 98 havia posat en qüestió el sistema de la Restauració. Maura representava el sector regeneracionista del conservadorisme, que pretenia reformar el sistema sense enderrocar-lo. El seu programa incloïa la Llei d'Administració Local (1907), que pretenia sanejar les eleccions municipals i acabar amb el caciquisme. Tanmateix, el govern de Maura (1907-1909) va acabar amb la Setmana Tràgica de Barcelona (1909), que va provocar la seua caiguda i la interrupció de les reformes. La carrera de Maura il·lustra els límits del reformisme dins el sistema de la Restauració.",
      valoracio: "El discurs és representatiu del regeneracionisme conservador, que pretenia modernitzar el sistema sense qüestionar les seues bases. La fórmula de la 'revolució des de dalt' ha esdevingut clàssica en el pensament polític espanyol i expressa un dilema recurrent: reforma o revolució. Maura era conscient que el sistema necessitava canvis profunds, però la seua proposta era insuficient perquè no qüestionava els privilegis de les elits. Les reformes de Maura van quedar incompletes i el sistema va continuar el seu procés de descomposició fins al colp de 1923. Com a font, el text mostra els límits del reformisme espanyol: la impossibilitat de conciliar la democratització real amb els interessos de l'oligarquia.",
    },
  },
  {
    id: "lerroux-miting",
    title: "Alejandro Lerroux: Discurs al míting de Santander (1906)",
    type: "Font primària - Discurs polític",
    category: "Sistema Canovista",
    excerpt: `"Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente y miserable de este país sin ventura (...). Destruid sus templos; acabad con sus dioses; alzad el velo de las novicias y elevadlas a la categoría de madres para virilizar la especie (...).

Combatid, matad, morid (...). El combate por España, la guerra por la libertad, la batalla por la civilización y el progreso..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític. Es tracta d'un fragment del discurs pronunciat per Alejandro Lerroux (1864-1949), polític republicà, líder del Partit Republicà Radical, en un míting a Santander el 1906. Lerroux era un demagog hàbil que havia aconseguit una gran implantació a Barcelona entre les classes populars amb un discurs incendiari anticlerical i populista. El destinatari era les masses populars, especialment els joves obrers. El propòsit era mobilitzar-los contra el sistema establert i, especialment, contra l'Església catòlica.",
      analisi: "El text és un exemple extrem de retòrica anticlerical. Lerroux crida els 'joves bàrbars' a destruir la 'civilització decadent' representada per l'Espanya de la Restauració. La violència verbal és explícita: destruir temples, acabar amb els déus (l'Església), 'alçar el vel de les novícies' (violació de les monges per 'virilitzar l'espècie'). El llenguatge combina un primitivisme quasi nietzschià amb un anticlericalisme salvatge. L'estil és incendiari, amb abundància d'imperatius i d'imatges violentes. El missatge és més emocional que polític: no hi ha un programa concret, sinó una crida a la destrucció de l'ordre establert.",
      context: "El discurs s'emmarca en el context del republicanisme radical de principis del segle XX. Lerroux havia construït una base electoral a Barcelona amb un discurs populista que combinava anticlericalisme, espanyolisme (contra el catalanisme) i demagògia social. El seu periòdic 'La Rebeldía' difonia missatges semblants. Tres anys després d'aquest discurs, la Setmana Tràgica de Barcelona (1909) materialitzaria parcialment aquesta retòrica amb la crema d'esglésies i convents. Lerroux, paradoxalment, evolucionaria cap a posicions cada vegada més moderades i acabaria sent ministre de la República i aliat dels sectors conservadors.",
      valoracio: "El text és representatiu de l'anticlericalisme radical que caracteritzava sectors del republicanisme espanyol. La violència verbal de Lerroux és extrema i va contribuir a crear un clima d'enfrontament que esclataría en episodis com la Setmana Tràgica. Com a font, mostra els límits de la mobilització populista: Lerroux no oferia un programa polític coherent, sinó una vàlvula d'escapament per a la frustració popular. L'evolució posterior de Lerroux (cap a la dreta) demostra el caràcter oportunista del seu radicalisme juvenil. El text també anticipa el paper que tindria l'anticlericalisme en la política espanyola del segle XX, especialment durant la Segona República i la Guerra Civil.",
    },
  },
  {
    id: "prat-riba-nacionalitat",
    title: "Enric Prat de la Riba: La Nacionalitat Catalana (1906)",
    type: "Font primària - Assaig polític",
    category: "Sistema Canovista",
    excerpt: `"Catalunya és una nació (...). No hem creat nosaltres la nacionalitat catalana: l'hem trobada; no l'hem inventada, l'hem descoberta (...).

La nacionalitat és una unitat de cultura (...), una ànima col·lectiva, amb una manera pròpia de sentir, de pensar, de voler (...). El signe exterior d'aquesta personalitat nacional és la llengua (...).

L'Estat no és sinó l'organització política de la Nació. Cada Nació ha d'ésser un Estat; i, idealment, no hauria d'haver-hi més nacions que les que tinguin un Estat propi..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític i ideològic. Es tracta d'un fragment de l'obra 'La Nacionalitat Catalana' (1906) d'Enric Prat de la Riba (1870-1917), polític i intel·lectual català, líder de la Lliga Regionalista i primer president de la Mancomunitat de Catalunya (1914-1917). L'obra és el text doctrinal més important del catalanisme polític, on es formula la teoria de la nació catalana. El destinatari era el públic catalanista, però també l'opinió espanyola, a qui pretenia explicar els fonaments del moviment. El propòsit era definir teòricament el catalanisme i legitimar les seues reivindicacions polítiques.",
      analisi: "El text desenvolupa la teoria de la nacionalitat catalana. Prat de la Riba afirma que Catalunya és una nació, no per decisió política sinó com a realitat prèvia ('l'hem trobada, no l'hem inventada'). La nacionalitat és definida com una 'unitat de cultura', una 'ànima col·lectiva' amb una manera pròpia de ser. El signe exterior de la nació és la llengua. Finalment, estableix el principi nacionalista clàssic: cada nació ha de tenir el seu Estat ('idealment'). L'argument és de tipus cultural-romàntic, inspirat en el nacionalisme alemany (Herder, Fichte). L'estil és assagístic, amb un to elevat i conceptual. Prat evita el to reivindicatiu i adopta una perspectiva quasi científica.",
      context: "L'obra es publica el 1906, en un moment de creixement del catalanisme polític. La Lliga Regionalista (fundada el 1901) havia aconseguit una important representació parlamentària i es convertia en la força hegemònica de la política catalana. Prat de la Riba liderava el sector conservador del catalanisme, que apostava per l'autonomia dins Espanya més que per l'independentisme. El text s'ha de relacionar amb altres obres del catalanisme (Almirall, Bases de Manresa) i amb el context europeu dels nacionalismes. La distinció entre nació i Estat permetia reclamar l'autogovern sense necessàriament trencar amb Espanya.",
      valoracio: "El text és fonamental per entendre el catalanisme polític. Prat de la Riba va formular una teoria de la nació que ha tingut una influència duradora. La seua concepció cultural de la nacionalitat contrasta amb el nacionalisme ètnic de Sabino Arana al País Basc. No obstant això, l'obra presenta ambigüitats: afirma el dret de cada nació a tenir un Estat però propugna l'autonomia dins Espanya. Aquesta tensió entre el principi teòric i la pràctica política ha marcat el catalanisme fins avui. Com a font, és representativa del catalanisme conservador i burgès, diferent del catalanisme republicà i popular que representaria després Esquerra Republicana. L'obra va ser un referent per al catalanisme durant tot el segle XX.",
    },
  },
  {
    id: "dato-llei-candau",
    title: "Eduardo Dato: Defensa de la Llei de Jurisdiccions (1906)",
    type: "Font primària - Discurs parlamentari",
    category: "Sistema Canovista",
    excerpt: `"La disciplina del Ejército, señores diputados, es la base de la fuerza pública, es el nervio de la patria (...). Ofender al Ejército es ofender a España misma (...).

Esta ley no ataca la libertad de prensa ni la libertad de expresión; lo que hace es poner límites a la injuria, a la calumnia, a la ofensa gratuita a las instituciones armadas (...). ¿Es que se puede consentir que en Cataluña ondee una bandera que no es la española, que se canten himnos que no son los nuestros, que se vitoree a una patria que no es España?..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític. Es tracta d'un fragment del discurs d'Eduardo Dato (1856-1921), polític conservador, en defensa de la Llei de Jurisdiccions al Congrés dels Diputats (1906). La Llei de Jurisdiccions sotmetia a la jurisdicció militar els delictes contra l'Exèrcit i els símbols nacionals. Dato seria diverses vegades president del govern i va morir assassinat per anarquistes el 1921. El destinatari eren els parlamentaris i, a través d'ells, l'opinió pública. El propòsit era defensar la llei davant les crítiques dels republicans i catalanistes.",
      analisi: "El text defensa la Llei de Jurisdiccions amb diversos arguments: l'Exèrcit és el 'nervi de la pàtria' i no pot ser ofès; la llei no ataca les llibertats sinó que posa límits a la injúria; a Catalunya s'han produït actes contraris a la unitat d'Espanya (banderes no espanyoles, himnes no espanyols). L'argument central és la identificació entre Exèrcit, Pàtria i Estat: ofendre l'Exèrcit és ofendre Espanya. El catalanisme apareix com a amenaça a la unitat nacional. L'estil és oratòric, patriòtic, amb interrogacions retòriques i apel·lacions al sentiment nacional. El to és defensiu però també agressiu contra el catalanisme.",
      context: "La Llei de Jurisdiccions (1906) va ser una resposta als incidents del ¡Cu-Cut! (novembre 1905), quan oficials de l'exèrcit van assaltar les redaccions de periòdics catalanistes a Barcelona. En comptes de castigar els militars, el govern va aprovar una llei que sotmetia a la jurisdicció militar les ofenses a l'Exèrcit i els símbols nacionals. La llei va provocar la unitat de tot el catalanisme (Solidaritat Catalana, 1906) i va intensificar l'anticatalanisme de sectors militars i conservadors. El text reflecteix la tensió entre catalanisme i espanyolisme que marcaria la política espanyola durant tot el segle XX.",
      valoracio: "El text és significatiu perquè mostra l'aliança entre l'Exèrcit i el conservadorisme espanyol contra el catalanisme. La identificació entre Exèrcit i Pàtria, i la criminalització de les expressions catalanistes, anunciaven conflictes posteriors. La Llei de Jurisdiccions va romandre vigent fins a la Segona República i va ser un instrument de repressió de les llibertats. Com a font, el text il·lustra la incapacitat del sistema de la Restauració per integrar el catalanisme i la tendència a respondre amb mesures repressives a les demandes d'autogovern. El discurs de Dato anticipa la retòrica de 'unitat d'Espanya' que seria central en el colp de 1936.",
    },
  },
  {
    id: "largo-caballero-dictadura",
    title: "Francisco Largo Caballero: Defensa de la col·laboració amb Primo de Rivera (1924)",
    type: "Font primària - Article polític",
    category: "Dictadura",
    excerpt: `"Se ha dicho que nosotros colaboramos con la Dictadura. No es exacto (...). Nosotros no hemos apoyado al régimen dictatorial; lo que hemos hecho es aprovechar las circunstancias para defender los intereses de la clase trabajadora (...).

Si la UGT hubiese adoptado una posición de resistencia, habría sido aplastada como lo ha sido la CNT (...). Nuestros afiliados trabajan, cobran sus jornales, tienen sus casas del pueblo abiertas, sus cooperativas funcionando (...). ¿Se nos puede reprochar que hayamos elegido la supervivencia de la organización frente al heroísmo estéril?..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític i sindical. Es tracta d'un article de Francisco Largo Caballero (1869-1946), líder de la UGT i del PSOE, publicat el 1924 per justificar la postura de la UGT davant la dictadura de Primo de Rivera. Largo Caballero era conseller d'Estat del règim dictatorial (1924-1929), fet que va generar fortes crítiques dins i fora del socialisme espanyol. El destinatari eren els militants socialistes i l'opinió d'esquerres. El propòsit era defensar-se de les acusacions de col·laboracionisme.",
      analisi: "El text justifica la postura de la UGT amb diversos arguments: 1) No és col·laboració amb el règim sinó aprofitament de les circumstàncies per defensar els interessos obrers; 2) La resistència hauria significat la destrucció de l'organització, com va passar amb la CNT; 3) Gràcies a aquesta postura, els afiliats mantenen la feina, les cases del poble i les cooperatives; 4) La supervivència de l'organització és preferible a l''heroisme estèril'. L'argument és pragmàtic: davant la impossibilitat de canviar el règim, cal adaptar-s'hi per preservar les conquestes obreres. L'estil és defensiu, amb interrogacions retòriques i comparacions amb la CNT.",
      context: "El text s'escriu en el context de la dictadura de Primo de Rivera (1923-1930). Mentre la CNT era perseguida i il·legalitzada, la UGT va adoptar una postura de col·laboració que incloïa la participació en els comitès paritaris de l'Organització Corporativa Nacional. Largo Caballero va ser conseller d'Estat entre 1924 i 1929. Aquesta postura va ser molt criticada per la CNT, pels comunistes i per sectors del propi PSOE. Largo Caballero argumentava que la col·laboració havia permès mantenir l'organització i aconseguir millores per als treballadors.",
      valoracio: "El text és representatiu del dilema entre puresa i eficàcia que sovint afronten els moviments socials sota règims autoritaris. La postura de Largo Caballero va ser controvertida: per als crítics, era una traïció als principis; per als defensors, era pragmatisme que va permetre la supervivència del moviment. La comparació amb la CNT és parcial: la CNT va pagar un preu alt per la seua resistència, però va mantenir intacta la seua coherència ideològica. Largo Caballero evolucionaria després cap a posicions revolucionàries durant la Segona República, com si volgués compensar la moderació anterior. Com a font, el text il·lustra les tensions internes del socialisme espanyol i els dilemes de l'acció sindical sota dictadures.",
    },
  },
  {
    id: "ortega-error-berenguer",
    title: "José Ortega y Gasset: 'El Error Berenguer' (1930)",
    type: "Font primària - Article periodístic",
    category: "Dictadura",
    excerpt: `"Esto es el 'error Berenguer': creer que después de siete años de haber estado España uncida al régimen más anómalo que registra su historia, basta con que unos cuantos señores se reúnan en el Ministerio de la Gobernación para que todo vuelva a estar como estaba (...).

No es posible la continuidad legal entre lo ilegal y lo legal (...). Era forzoso que el poder público adoptase formas nuevas, las más amplias, las más fecundas (...). Españoles: vuestro Estado no existe. ¡Reconstruidlo!

Delenda est Monarchia."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític i periodístic. Es tracta de l'article 'El Error Berenguer', publicat per José Ortega y Gasset (1883-1955) al diari El Sol el 15 de novembre de 1930. Ortega era el filòsof més influent de l'Espanya del moment, autor d'obres com 'La España invertebrada' (1921) i 'La rebelión de las masas' (1929). L'article va tenir un impacte enorme i és considerat un dels detonants de la caiguda de la monarquia. El destinatari era l'opinió pública culta. El propòsit era deslegitimar l'intent de tornada a la normalitat constitucional i demanar un canvi de règim.",
      analisi: "El text desenvolupa un argument contundent: després de set anys de dictadura, no és possible tornar a la situació anterior com si res no haguera passat. El 'error Berenguer' és creure que n'hi ha prou amb reunir uns senyors al ministeri per restaurar la legalitat. La il·legalitat de la dictadura ha trencat la continuïtat legal de la monarquia. Cal crear formes noves de poder públic, les 'més amplies' (és a dir, democràtiques). La frase final en llatí ('Delenda est Monarchia', 'Cal destruir la monarquia') és una paràfrasi de Cató ('Delenda est Carthago') i té un efecte retòric demolidor. L'estil és brillant, incisiu, amb frases curtes i contundents.",
      context: "L'article es publica durant la 'Dictablanda' del general Berenguer (gener 1930 - febrer 1931), intent de transició ordenada cap al sistema constitucional després de la dimissió de Primo de Rivera. Berenguer pretenia tornar a la Constitució de 1876 i convocar eleccions, però es trobava amb l'oposició creixent dels republicans, socialistes i intel·lectuals. El Pacte de San Sebastián (agost 1930) havia unit l'oposició contra la monarquia. L'intent de pronunciament de Jaca (desembre 1930) i l'afusellament de Galán i García Hernández van intensificar el clima revolucionari.",
      valoracio: "L'article és un dels textos polítics més influents de la història contemporània espanyola. Ortega, que no era un home de partit, es pronunciava clarament a favor de la República. La seua autoritat intel·lectual va donar legitimitat al republicanisme i va contribuir a deslegitimar la monarquia. L'argument és sòlid: la monarquia s'havia identificat amb la dictadura i havia perdut la legitimitat. Com a font, l'article mostra el paper dels intel·lectuals en la crisi de la Restauració. Ortega representava les classes mitjanes cultes que havien perdut la fe en la monarquia. Quatre mesos després de l'article, les eleccions municipals del 12 d'abril de 1931 donarien la victòria als republicans a les grans ciutats i es proclamaria la Segona República.",
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

  const categories = [...new Set(sources.map((s) => s.category))];

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
            Tria una font històrica per analitzar-la seguint l'estructura PAU ({sources.length} fonts disponibles)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <Badge key={cat} variant="outline">
                {cat}: {sources.filter(s => s.category === cat).length}
              </Badge>
            ))}
          </div>
          <Select onValueChange={handleSourceSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una font..." />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <div key={category}>
                  <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                    {category}
                  </div>
                  {sources
                    .filter((source) => source.category === category)
                    .map((source) => (
                      <SelectItem key={source.id} value={source.id}>
                        {source.title}
                      </SelectItem>
                    ))}
                </div>
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
                <Badge variant="secondary">{selectedSource.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground whitespace-pre-line">
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
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    {showAnswers[field] && (
                      <div className="rounded-lg border border-accent bg-accent/10 p-4">
                        <h4 className="mb-2 font-semibold text-accent-foreground">
                          Resposta Model:
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
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
