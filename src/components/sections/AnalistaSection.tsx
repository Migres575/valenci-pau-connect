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
    id: "manifest-sandhurst",
    title: "Manifest de Sandhurst (1 de desembre de 1874)",
    type: "Font primària - Manifest polític",
    category: "Sistema Canovista",
    excerpt: `"Huérfano de padre, exiliado mi familia y yo, pasé dos años de mi primera juventud en destierro (...). Llegado a la mayor edad, en la plenitud de mis derechos y deberes, creo de mi obligación dirigirme a los españoles.

He recibido de España grandes pruebas de afecto (...). Cuantos me han escrito muestran igual convicción de que sólo el restablecimiento de la Monarquía constitucional puede poner término a la opresión, a la incertidumbre y a las crueles perturbaciones que experimenta España (...).

Sea la que quiera mi propia suerte, ni dejaré de ser buen español, ni como todos mis antepasados, buen católico, ni, como hombre del siglo, verdaderamente liberal."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític. Es tracta del Manifest de Sandhurst, document signat pel príncep Alfons de Borbó (futur Alfons XII) l'1 de desembre de 1874, des de l'Acadèmia Militar de Sandhurst (Anglaterra), on estudiava. El manifest va ser redactat per Antonio Cánovas del Castillo, líder del moviment alfonsí, i signat pel príncep. El destinatari era el poble espanyol i, especialment, les elits polítiques i militars. El propòsit era presentar el príncep com a alternativa a la inestabilitat de la Primera República i preparar la restauració monàrquica.",
      analisi: "El text presenta la candidatura d'Alfons de Borbó al tron espanyol. S'estructura en tres parts: 1) Presentació personal del príncep, que destaca el seu exili i la seua joventut com a elements de legitimitat (no és responsable dels errors d'Isabel II); 2) Justificació de la restauració: només la monarquia constitucional pot acabar amb l'opressió i la incertesa de la República; 3) Definició ideològica: 'bon espanyol', 'bon catòlic' i 'verdaderament liberal'. Aquesta triple definició era estratègica: conciliava tradició (catolicisme) i modernitat (liberalisme), oferint una monarquia acceptables per a conservadors i liberals. L'estil és solemne, amb un to de dignitat i moderació que contrasta amb la retòrica inflamada de l'època.",
      context: "El manifest es publica durant la Primera República espanyola (1873-1874), marcada per la inestabilitat política: quatre presidents en un any, la insurrecció cantonal, la Tercera Guerra Carlina i la Guerra de Cuba. Cánovas del Castillo havia preparat meticulosament la restauració, buscant que fos 'legal' i no un simple pronunciament militar. Tanmateix, el general Martínez Campos es va avançar amb el pronunciament de Sagunt (29 de desembre de 1874). El manifest de Sandhurst havia servit per preparar l'opinió pública i legitimarl'operació. Alfons XII entraria a Madrid el gener de 1875, iniciant el període de la Restauració.",
      valoracio: "El Manifest de Sandhurst és un document fonamental per entendre la Restauració. Revela l'estratègia de Cánovas: presentar la monarquia no com a tornada al passat (absolutisme) sinó com a superació de la inestabilitat republicana. La indefinició deliberada del manifest (liberal però catòlic, constitucional però monàrquic) permetia sumar adhesions de sectors diversos. El text anticipa els trets del sistema canovista: monarquia constitucional, bipartidisme, i integració de les dues famílies liberals. Com a font, té el valor de mostrar la construcció ideològica de la Restauració i la capacitat de Cánovas per crear un consens entre les elits. La brevetat i el to moderat del manifest contrasten amb la grandiloqüència habitual i demostren la habilitat política del seu redactor.",
    },
  },
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
    id: "pacte-pardo",
    title: "El Pacte del Pardo (1885) - Crònica periodística",
    type: "Font primària - Crònica",
    category: "Sistema Canovista",
    excerpt: `"En las últimas horas de vida del malogrado Rey Alfonso XII, los señores Cánovas del Castillo y Sagasta mantuvieron una entrevista en el Palacio del Pardo (...).

Se dice que ambos prohombres acordaron, en aquella triste ocasión, dar estabilidad al sistema constitucional, alternándose en el poder de manera ordenada, para evitar que la minoría del futuro monarca diese ocasión a pronunciamientos o intentonas.

El señor Cánovas cedió inmediatamente el poder al señor Sagasta, dando así prueba de patriotismo y altura de miras (...)"`,
    modelAnswer: {
      identificacio: "Font primària de caràcter periodístic. Es tracta d'una crònica que descriu el Pacte del Pardo, acord informal entre Antonio Cánovas del Castillo (líder conservador) i Práxedes Mateo Sagasta (líder liberal), celebrat el novembre de 1885 poc abans de la mort d'Alfons XII. Tot i que no existeix cap document escrit del pacte, les fonts de l'època en testimonien l'existència. El destinatari era l'opinió pública. El propòsit de la crònica era informar sobre l'acord i presentar-lo com un acte de patriotisme.",
      analisi: "El text descriu els elements essencials del Pacte del Pardo: 1) El context: les últimes hores de vida d'Alfons XII, que moriria amb 27 anys deixant la reina regent Maria Cristina d'Habsburg embarassada del futur Alfons XIII; 2) L'acord: l'alternança ordenada en el poder per garantir l'estabilitat durant la minoria del rei; 3) El gest: Cánovas cedeix immediatament el poder a Sagasta, demostrant que l'acord és efectiu. El text presenta el pacte com un acte de 'patriotisme i altura de mires', obviament les crítiques posteriors (que era un repartiment del poder que excloïa altres forces). L'estil és informatiu però laudatori, propi del periodisme de l'època.",
      context: "El Pacte del Pardo es produeix en un moment crític: la mort imminent d'Alfons XII (25 de novembre de 1885) obria un període d'incertesa. La reina regent Maria Cristina era estrangera i la seua legitimitat podia ser qüestionada. Existia el perill de pronunciaments militars o d'un aixecament carlista. Cánovas i Sagasta van acordar l'alternança pacífica per blindar el sistema: el Partit Liberal governaria primer (amb Sagasta, 1885-1890), donant estabilitat a la regència i aprovant reformes liberalitzadores (sufragi universal masculí, 1890). Després tornaria Cánovas. Aquest acord va consolidar el 'torn pacífic' com a mecanisme central del sistema.",
      valoracio: "El Pacte del Pardo és un moment clau de la Restauració. Demostra la capacitat dels líders dinàstics per posar l'estabilitat del sistema per davant dels interessos de partit. Però també revela les limitacions del sistema: el poder es decidia en pactes entre elits, no en les urnes. El torn pacífic, que el pacte va consolidar, excloïa les forces polítiques alternatives (republicans, socialistes, nacionalismes perifèrics) i es basava en la manipulació electoral. Com a font, el text té el valor de mostrar com es presentava el pacte a l'opinió pública (com un acte patriòtic) i permet contrastar aquesta visió amb les crítiques posteriors dels regeneracionistes, que denunciarien l'artificialitat del sistema.",
    },
  },
  {
    id: "tractat-paris",
    title: "Tractat de París (10 de desembre de 1898)",
    type: "Font primària - Tractat internacional",
    category: "Crisi del 98",
    excerpt: `"Art. 1. Espanya renuncia a tot dret de sobirania i propietat sobre Cuba. Tenint en compte que dita illa, quan siga evacuada per Espanya, va a ser ocupada pels Estats Units (...).

Art. 2. Espanya cedeix als Estats Units l'illa de Puerto Rico i les altres illes que estan ara sota la sobirania espanyola a les Índies Occidentals (...).

Art. 3. Espanya cedeix als Estats Units l'arxipèlag conegut per les Illes Filipines (...). Els Estats Units pagaran a Espanya la suma de vint milions de dòlars dins dels tres mesos següents al bescanvi de ratificacions del present Tractat."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter jurídic internacional. Es tracta d'extractes del Tractat de París, signat el 10 de desembre de 1898 entre Espanya i els Estats Units, que posava fi a la Guerra hispano-nord-americana (abril-agost 1898). El tractat va ser negociat a París i ratificat per les Corts espanyoles el març de 1899. El destinatari eren les nacions signants i la comunitat internacional. El propòsit era formalitzar jurídicament els termes de la pau i la cessió de territoris.",
      analisi: "El text estableix les condicions de la pau: 1) Cuba: Espanya renuncia a la sobirania, però l'illa no passa directament als EUA sinó que serà 'ocupada' (realment seria un protectorat fins al 1902); 2) Puerto Rico i les altres Antilles: cessió directa als EUA; 3) Filipines: cessió als EUA a canvi de 20 milions de dòlars, una compensació simbòlica. El llenguatge és fred i jurídic, típic dels tractats, però amaga una realitat dramàtica: la liquidació de l'imperi colonial espanyol. L'expressió 'Espanya renuncia' minimitza el fet que la renúncia era imposada per la derrota militar. Els Estats Units emergeixen com a potència imperial.",
      context: "El tractat culmina la Guerra hispano-nord-americana de 1898. La guerra va esclatar després de l'explosió del cuirassat Maine a l'Havana (15 de febrer de 1898) i va durar quatre mesos. La flota espanyola va ser destruïda a Cavite (Filipines) i Santiago de Cuba. El govern Sagasta, conscient de la impossibilitat de continuar la guerra, va negociar la pau. El 'Desastre del 98' va provocar una profunda crisi de consciència a Espanya: la pèrdua de les últimes colònies (Cuba, Puerto Rico, Filipines, Guam) significava la fi de l'imperi i posava en qüestió el sistema de la Restauració. El regeneracionisme i la Generació del 98 van sorgir d'aquesta crisi.",
      valoracio: "El Tractat de París és un document decisiu per entendre la crisi del 98. Marca la fi de l'imperi espanyol i l'emergència dels Estats Units com a potència mundial. Per a Espanya, el tractat va ser una humiliació: la compensació de 20 milions per Filipines era una ficció per maquillar la derrota. Les conseqüències van ser profundes: crisi econòmica (pèrdua de mercats colonials), crisi moral (el 'problema d'Espanya'), crisi política (descrèdit del sistema de la Restauració). Com a font, el tractat té un valor documental insubstituïble i permet entendre la dimensió internacional de la crisi del 98, sovint oblidada davant les reflexions interiors dels regeneracionistes.",
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
    id: "maura-revolucion",
    title: "Antonio Maura: Discurs sobre la 'Revolució des de dalt' (1902)",
    type: "Font primària - Discurs parlamentari",
    category: "Descomposició",
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
    id: "prat-riba-nacionalitat",
    title: "Enric Prat de la Riba: La Nacionalitat Catalana (1906)",
    type: "Font primària - Assaig polític",
    category: "Nacionalismes",
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
    id: "setmana-tragica-testimoni",
    title: "Testimoni de la Setmana Tràgica (1909)",
    type: "Font primària - Testimoni",
    category: "Descomposició",
    excerpt: `"El lunes 26 de julio [1909] empezó todo. Yo estaba en la fábrica cuando vinieron a decir que no habría trabajo, que había huelga general (...). Por la tarde empezaron a levantar barricadas y a quemar conventos.

La gente gritaba: '¡Abajo la guerra!' y '¡Que vayan los ricos!' (...). No era contra la religión; era contra los curas, que siempre están con los ricos (...). Quemaron más de cuarenta iglesias y conventos. Nadie lo organizó; estalló solo, como una bomba.

El viernes llegó el ejército y empezó la represión. Luego vino lo de Ferrer..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter testimonial. Es tracta del relat oral d'un testimoni anònim dels fets de la Setmana Tràgica de Barcelona (26-31 de juliol de 1909), recollit posteriorment. El testimoni era probablement un obrer de les fàbriques del Poble Nou o Sant Martí. El destinatari seria l'entrevistador o historiador que va recollir el testimoni. El propòsit era transmetre l'experiència viscuda d'aquells dies.",
      analisi: "El testimoni ofereix una visió des de baix dels fets: 1) L'inici espontani: la vaga general del dilluns 26, que va sorprendre fins i tot els participants; 2) Les consignes: 'Abajo la guerra' (contra la mobilització per a la guerra del Marroc) i 'Que vayan los ricos' (protesta de classe); 3) La violència anticlerical: crema d'esglésies i convents, justificada pel testimoni com a protesta social ('sempre estan amb els rics'), no religiosa; 4) L'espontaneïtat: 'Ningú ho va organitzar; va esclatar sol'; 5) La repressió: l'arribada de l'exèrcit i la referència a 'lo de Ferrer' (l'execució de Francesc Ferrer i Guàrdia). L'estil és oral, directe, amb expressions populars.",
      context: "La Setmana Tràgica (juliol 1909) va esclatar com a protesta contra la mobilització de reservistes per a la guerra del Marroc. El 9 de juliol s'havia produït el Desastre del Barranco del Lobo. El govern Maura va mobilitzar reservistes, molts d'ells pares de família de classes populars, mentre que els rics podien pagar per lliurar-se. La protesta va derivar en vaga general, barricades i una violenta explosió anticlerical (més de 80 edificis religiosos cremats). La repressió va ser dura: 5 condemnes a mort, entre elles la de Francesc Ferrer i Guàrdia, anarquista i pedagog, la culpabilitat del qual mai no va quedar demostrada. La seua execució va provocar protestes internacionals i la caiguda de Maura ('Maura, no!').",
      valoracio: "El testimoni és valuós perquè ofereix la perspectiva dels participants, sovint absent en les fonts oficials. Destaca l'espontaneïtat del moviment (sense direcció clara) i la motivació antimilitarista i de classe, no específicament revolucionària. L'anticlericalisme apareix com una expressió de l'antagonisme social: l'Església era percebuda com aliada de les classes dominants. Com a font, té les limitacions dels testimonis orals: subjectivitat, memòria selectiva, possible reelaboració posterior. Però permet captar l'atmosfera dels fets millor que els informes oficials. La Setmana Tràgica va marcar un punt d'inflexió: el fracàs del reformisme de Maura i l'augment de la conflictivitat social.",
    },
  },
  {
    id: "arana-bizkaia",
    title: "Sabino Arana: 'Bizkaia por su independencia' (1892)",
    type: "Font primària - Assaig polític",
    category: "Nacionalismes",
    excerpt: `"Bizkaya, antes de la inicua invasión del 25 de octubre de 1839, era un Estado libre, soberano e independiente (...). Hoy Bizkaya es una provincia más del reino de España, sujeta a las leyes que hacen los españoles para todos los españoles (...).

¿Qué nos ha traído España? Impiedad y heterodoxia, inmoralidad y corrupción de costumbres (...). Y ¿qué significa la unión con España? Significa la absorción de la raza, la desaparición del idioma, la muerte de Bizkaya (...).

Nosotros, los verdaderos bizkaínos, amamos con amor inmenso a nuestra Patria; la amamos con exclusión de cualquier otra; odiamos a España con toda nuestra alma..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter politicoideològic. Es tracta d'un fragment de l'obra 'Bizkaia por su independencia' (1892) de Sabino Arana Goiri (1865-1903), fundador del Partit Nacionalista Basc (PNB). L'obra és considerada el text fundacional del nacionalisme basc. Arana escrivia des d'una perspectiva de recuperació d'un passat mític i anava adreçat als bascos, especialment als sectors catòlics i tradicionalistes. El propòsit era despertar la consciència nacional basca i justificar la lluita per la independència.",
      analisi: "El text presenta els elements centrals del primer nacionalisme basc: 1) L'argument històric: Biscaia era un 'Estat lliure i sobirà' abans de la invasió espanyola de 1839 (abolició dels furs pels liberals); 2) La condemna d'Espanya: associada a la irreligiositat, la immoralitat i la corrupció, en contrast amb la suposada puresa basca; 3) L'amenaça d'absorció: la unió amb Espanya significa la mort de la raça, la llengua i la identitat; 4) El sentiment: amor exclusiu a la pàtria basca, odi a Espanya. El nacionalisme d'Arana és ètnic (basat en la raça, definida pels cognoms bascos), catòlic (contra el liberalisme irreligiós espanyol) i antiespanyol (radical i excloent). L'estil és passional, maniqueu, amb abundant ús d'adjectius valoratius.",
      context: "Arana escriu en un moment de transformació accelerada del País Basc: la industrialització (mines, siderúrgia) havia atret immigració espanyola, especialment a Bilbao. Arana, fill de família carlista, veia aquesta immigració com una amenaça per a la identitat basca. El nacionalisme basc naix com a reacció contra la modernització i la immigració, amb una idealització de la societat rural tradicional. El 1895, Arana va fundar el PNB, que integraria el nacionalisme amb el catolicisme i el tradicionalisme. En els últims anys de vida, Arana va evolucionar cap a posicions més moderades (autonomisme), però el PNB mantindria el nucli doctrinal de l'independentisme.",
      valoracio: "El text és fonamental per entendre el nacionalisme basc en el seu origen. La radicalitat del plantejament (odi a Espanya, exclusivisme ètnic) contrasta amb els nacionalismes coetanis com el catalanisme de Prat de la Riba, més cultural i integrador. L'èmfasi en la raça i els cognoms reflecteix les idees del segle XIX sobre les 'races' nacionals, avui rebutjades. Com a font, el text mostra la construcció ideològica d'una identitat nacional a partir de materials diversos: memòria foral, catolicisme tradicional, antimodernisme. El nacionalisme d'Arana seria un element constant de la política espanyola durant el segle XX, amb manifestacions diverses (PNB, ETA, moviments actuals).",
    },
  },
  {
    id: "manifest-junta-defensa",
    title: "Manifest de les Juntes de Defensa (1 de juny de 1917)",
    type: "Font primària - Manifest militar",
    category: "Descomposició",
    excerpt: `"Las Juntas de Defensa del Arma de Infantería (...) hacen público que se hallan constituidas en todas las guarniciones de España (...).

Nuestros fines son exclusivamente profesionales: mejora de los sueldos, reforma de la escala cerrada, supresión de los ascensos por méritos de guerra (...). No pretendemos inmiscuirnos en política; pero si el Gobierno no atiende nuestras peticiones, nos veremos obligados a tomar medidas más enérgicas (...).

El Ejército no puede continuar siendo el paria del presupuesto nacional mientras los políticos dilapidan los recursos del Estado..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter militar-corporatiu. Es tracta d'un fragment del manifest de les Juntes de Defensa, organitzacions d'oficials de l'exèrcit espanyol, publicat l'1 de juny de 1917. Les Juntes van sorgir a partir de 1916 entre els oficials d'Infanteria, insatisfets amb les seues condicions professionals. El manifest anava adreçat al govern i a l'opinió pública. El propòsit era fer públiques les reivindicacions i pressionar per obtenir-les.",
      analisi: "El text presenta les Juntes i les seues demandes: 1) Constitució: les Juntes estan organitzades a totes les guarnicions, demostrant la seua força; 2) Reivindicacions 'professionals': millora de sous, reforma de l'escala tancada (que bloquejava els ascensos), supressió dels ascensos per mèrits de guerra (que afavorien els militars africanistes); 3) Negació de finalitat política, però amenaça de 'mesures més enèrgiques'; 4) Crítica als polítics: mentre els militars són 'pàries del pressupost', els polítics 'malversen' els recursos. El to és amenaçador, corporatiu, amb un discurs antiparlamentari implícit.",
      context: "El manifest s'emmarca en la Crisi de 1917, any en què van coincidir tres crisis: la militar (Juntes de Defensa), la política (Assemblea de Parlamentaris a Barcelona) i la social (vaga general revolucionària d'agost). Les Juntes van sorgir pel malestar dels oficials peninsulars davant els ascensos dels africanistes, però van adoptar un discurs regeneracionista i antiparlamentari. El govern Dato va acabar cedint davant les Juntes (Llei de l'Exèrcit de 1918), que es van convertir en un poder fàctic. L'exèrcit es polititzava i s'erigia en 'salvador de la pàtria' davant els polítics corruptes, preparant el camí per al colp de 1923.",
      valoracio: "El manifest és clau per entendre la descomposició del sistema de la Restauració. Les Juntes exemplifiquen el creixent protagonisme polític de l'exèrcit i la debilitat del poder civil. La seua victòria sobre el govern va demostrar que el sistema no podia controlar els militars. La retòrica antiparlamentària i regeneracionista seria assumida per Primo de Rivera el 1923. Com a font, el text revela la mentalitat corporativa de l'exèrcit i la seua convicció de superioritat moral sobre els polítics. Les Juntes no van fer 'la revolució' però van debilitar fatalment el sistema constitucional.",
    },
  },
  {
    id: "assemblea-parlamentaris",
    title: "Conclusions de l'Assemblea de Parlamentaris (19 de juliol de 1917)",
    type: "Font primària - Text polític",
    category: "Descomposició",
    excerpt: `"1.º Que se abran inmediatamente las Cortes, con plena libertad para abordar los problemas constitucionales (...).

2.º Que se proceda a convocar Cortes Constituyentes que reorganicen el Estado español de arriba abajo (...).

3.º Que se establezca la autonomía de los municipios y de las regiones (...).

4.º Que se ponga fin al régimen de turno, obra de la oligarquía y el caciquismo, y se devuelva al pueblo español la soberanía que le pertenece (...).

Esta Asamblea no pretende el desorden, sino la regeneración de España dentro de la ley..."`,
    modelAnswer: {
      identificacio: "Font primària de caràcter polític. Es tracta de les conclusions de l'Assemblea de Parlamentaris, reunida a Barcelona el 19 de juliol de 1917. L'Assemblea va ser convocada per la Lliga Regionalista (Francesc Cambó) i hi van participar diputats i senadors catalanistes, republicans i fins i tot alguns dinàstics disconformes. El govern Dato havia tancat les Corts i l'Assemblea es va reunir sense autorització. El destinatari era el govern i l'opinió pública. El propòsit era exigir reformes constitucionals i l'autonomia regional.",
      analisi: "Les conclusions presenten un programa de reformes: 1) Obertura de les Corts per abordar problemes constitucionals; 2) Convocatòria de Corts Constituents per reorganitzar l'Estat; 3) Autonomia municipal i regional; 4) Fi del sistema del torn, 'obra de l'oligarquia i el caciquisme'; 5) Retorn de la sobirania al poble. L'última frase aclareix que no es busca el desordre sinó la 'regeneració dins la llei'. El text assumeix plenament el diagnòstic regeneracionista i proposa solucions democràtiques (constituent, autonomia) però sense qüestionar la monarquia. L'estil és formal, llista ordenada de demandes, propi d'un document polític.",
      context: "L'Assemblea forma part de la Crisi de 1917, juntament amb les Juntes de Defensa i la vaga general. Cambó pretenia aprofitar la debilitat del govern per imposar les demandes catalanistes i regeneracionistes. L'Assemblea va ser reprimida per la Guàrdia Civil però va tenir ressò públic. Tanmateix, el moviment es va fragmentar quan la vaga general d'agost va esclatar: Cambó es va espantar davant la revolució obrera i va abandonar l'aliança amb republicans i socialistes. El govern va reprimir la vaga i l'Assemblea es va dissoldre. L'oportunitat de reforma des de baix va quedar frustrada.",
      valoracio: "L'Assemblea de Parlamentaris representa l'intent més seriós de reformar el sistema des de la legalitat. Les seues demandes (constituent, autonomia, fi del caciquisme) eren compartides per amplis sectors. Però el moviment va fracassar per la divisió entre les forces reformistes: la burgesia catalanista va preferir l'ordre a la revolució i va abandonar els aliats obrers. Com a font, el text mostra tant les aspiracions reformistes com els límits de l'aliança entre burgesia i proletariat. La crisi de 1917 no va regenerar el sistema, però va accelerar-ne la descomposició fins al colp de 1923.",
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
