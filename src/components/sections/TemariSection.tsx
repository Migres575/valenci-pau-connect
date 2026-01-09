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
## Introducció: La Restauració Borbònica

La Restauració borbònica (1874-1931) constitueix el període més llarg d'estabilitat constitucional de la història contemporània espanyola. El règim va nàixer arran del pronunciament del general Arsenio Martínez Campos a Sagunt el 29 de desembre de 1874, que va restaurar la monarquia en la persona d'Alfons XII, fill d'Isabel II, posant fi al Sexenni Democràtic (1868-1874).

L'artífex polític del nou sistema va ser **Antonio Cánovas del Castillo** (1828-1897), polític conservador que havia preparat minuciosament la tornada dels Borbons. Cánovas va dissenyar un sistema que pretenia superar la inestabilitat crònica del segle XIX espanyol, marcada pels pronunciaments militars, les guerres civils carlistes i l'alternança entre constitucions progressistes i moderades.

## La Constitució de 1876

La Constitució de 1876 és el text fonamental del sistema canovista. Redactada per una comissió de notables presidida per Manuel Alonso Martínez, va ser aprovada per unes Corts constituents elegides per sufragi universal masculí —la darrera vegada que aquest s'exerciria lliurement fins al 1890—.

### Principis Fonamentals

El text constitucional es caracteritza per:

**1. Sobirania Compartida**
La sobirania residia conjuntament en el Rei i les Corts, superant tant el principi de sobirania nacional de la Constitució de 1869 com la sobirania exclusivament reial del règim isabelí. Aquesta fórmula, inspirada en el liberalisme doctrinari, permetia conciliar la tradició monàrquica amb el parlamentarisme.

**2. Flexibilitat i Ambigüitat**
Cánovas va dissenyar una constitució intencionadament ambigua en molts punts, la qual cosa permetia desenvolupaments legislatius tant conservadors com liberals sense necessitat de modificar-la. Per exemple, la qüestió del sufragi no es fixava en el text constitucional, sinó que es remetia a la legislació electoral.

**3. Declaració de Drets**
Es reconeixien les llibertats individuals (expressió, reunió, associació), però la seua regulació quedava en mans de lleis ordinàries que podien restringir-les. A més, en situacions d'emergència les garanties constitucionals podien ser suspeses.

**4. Confessionalitat de l'Estat**
L'article 11 declarava la religió catòlica com a oficial de l'Estat, establint que la nació es comprometia a mantenir el culte i els seus ministres. No obstant això, s'introduïa una clàusula de tolerància religiosa privada: ningú seria molestat per les seues opinions religioses ni per l'exercici del seu culte, sempre que es respectara la moral cristiana i no es realitzaren manifestacions públiques.

### Prerrogativa Reial

Un element clau del sistema era la **prerrogativa reial**, és a dir, les facultats executives del monarca. El Rei tenia la potestat de:

- **Nomenar i cessar lliurement els ministres**, sense necessitat de comptar amb la majoria parlamentària
- **Convocar, suspendre i dissoldre les Corts**, podent convocar noves eleccions quan ho considerara oportú
- **Sancionar i promulgar les lleis**, amb capacitat de veto suspensiu
- **Comandar les Forces Armades** com a cap suprem

Aquesta prerrogativa era fonamental per al funcionament del torn pacífic: quan un govern es desgastava, el Rei encarregava la formació de govern al líder de l'oposició dinàstica, qui convocava eleccions que inevitablement guanyava.

## El Torn Pacífic: Bipartidisme i Alternança

El **torn pacífic** o **turnismo** era el mecanisme d'alternança acordada entre els dos grans partits dinàstics: el Partit Liberal-Conservador i el Partit Liberal-Fusionista. Aquest sistema, mai no explicitat formalment, va funcionar eficaçment des de 1881 fins a principis del segle XX.

### Els Partits Dinàstics

**Partit Liberal-Conservador** (fundat per Cánovas del Castillo)
- Representava els interessos de l'alta burgesia agrària, industrial i financera
- Defensava l'ordre social, la propietat i la influència de l'Església catòlica
- Propugnava un sufragi censatari restringit
- Política proteccionista en matèria econòmica
- Líders destacats: Cánovas, Francisco Silvela, Antonio Maura, Eduardo Dato

**Partit Liberal-Fusionista** (fundat per Práxedes Mateo Sagasta)
- Aglutinava els antics progressistes, demòcrates i part dels republicans moderats
- Defensava les llibertats individuals i una certa secularització
- Va impulsar el sufragi universal masculí (1890), la llei d'associacions i el juí per jurats
- Política lliurecanvista moderada
- Líders destacats: Sagasta, Segismundo Moret, José Canalejas

### Funcionament del Torn

El mecanisme del torn funcionava de la següent manera:

1. Quan un govern s'havia desgastat o havia perdut cohesió, el Rei exercia la seua prerrogativa i encarregava govern a l'altre partit dinàstic
2. El nou president de govern proposava al Rei la dissolució de les Corts i la convocatòria d'eleccions
3. El Ministeri de Governació, a través dels governadors civils provincials, organitzava l'**encasellat**
4. Les xarxes caciquils garantien els resultats previstos mitjançant diversos mecanismes de control i manipulació electoral

## Mecanismes de Control Electoral

El sistema electoral de la Restauració es caracteritzava per la manipulació sistemàtica del vot, especialment en les zones rurals, on vivia la majoria de la població.

### L'Encasellat

L'**encasellat** era el procés de distribució prèvia dels escons entre els dos partits dinàstics. El Ministeri de Governació elaborava la llista de candidats que havien de resultar electes en cada circumscripció, assignant a cada partit les seues "caselles". Fins i tot es reservaven alguns escons per a les minories (carlistes, republicans) per donar una aparença de pluralisme.

El procés incloïa negociacions entre el ministre, els governadors civils i els líders locals de cada partit. Els candidats oficials rebien el suport de tot l'aparell administratiu, mentre que els candidats no inclosos a l'encasellat eren considerats "cuneros" si procedien d'altres circumscripcions o "disidents" si s'enfrontaven al candidat oficial del seu propi partit.

### El Caciquisme

El **caciquisme** era el sistema de control polític local exercit per figures influents anomenades "cacics". El cacic era generalment un terratinent, comerciant o professional amb recursos econòmics i influència social en una comarca determinada.

**Funcions del cacic:**
- Actuar com a intermediari entre el poder central i les comunitats locals
- Garantir els resultats electorals desitjats pel govern
- Distribuir favors: llocs de treball, favoritisme en contractes, ajornament de deutes, protecció davant la justícia
- Controlar l'administració local: ajuntaments, jutjats, guàrdia civil

**Tipus de cacics:**
- Cacics rurals: terratinents i rics propietaris que controlaven l'economia i l'ocupació local
- Cacics professionals: advocats, notaris, metges que exercien influència a través dels seus serveis
- Cacics polítics: diputats i senadors que actuaven com a intermediaris amb Madrid

### El Pucherazo

El **pucherazo** era el conjunt de pràctiques fraudulentes utilitzades per garantir els resultats electorals. El terme prové de "puchero" (olla), al·ludint a les urnes com a recipients on es cuinaven els resultats.

**Tècniques de manipulació electoral:**
- **Falsificació del cens**: inclusió de persones mortes o inexistents i exclusió d'opositors
- **Vot dels morts (lázaros)**: fer votar persones difuntes o absents
- **Trencament d'urnes**: destruir urnes amb resultats adversos al·legant incidents
- **Compra de vots**: pagament directe o en espècie (àpats, regals)
- **Coacció**: amenaces d'acomiadament, desnonament o represàlies administratives
- **Manipulació del recompte**: alteració de les actes electorals
- **Ronda volant**: grups de votants que votaven diverses vegades en col·legis diferents

El caciquisme i el frau electoral eren més efectius en les zones rurals, amb alta taxa d'analfabetisme i dependència econòmica. En les grans ciutats, el control era més difícil, i allí apareixien diputats republicans, socialistes o catalanistes.

## La Societat de la Restauració

### Estructura Social

La societat espanyola del darrer terç del segle XIX mantenia una estructura fortament jeràrquica:

**Classes Dirigents:**
- Noblesa terratinent: propietària de grans finques, especialment a Andalusia, Extremadura i Castella
- Alta burgesia industrial: concentrada a Catalunya i el País Basc
- Burgesia financera: vinculada a la banca i els negocis internacionals
- Elit política: els "notables" que ocupaven càrrecs en l'administració i el parlament

**Classes Mitjanes:**
- Petita i mitjana burgesia comercial i industrial
- Professions liberals: advocats, metges, enginyers, professors
- Funcionariat: cada vegada més nombrós amb l'expansió de l'Estat

**Classes Populars:**
- Camperolat: la majoria de la població, amb situacions molt diverses segons les regions
- Proletariat industrial: concentrat a Catalunya, País Basc i algunes zones mineres
- Artesanat urbà: en declivi davant la industrialització
- Servei domèstic: molt nombrós a les ciutats

### El Problema Agrari

Espanya era un país eminentment agrari. El 70% de la població activa treballava en l'agricultura, però l'estructura de la propietat era molt desigual:

- Al sud (Andalusia, Extremadura, Castella la Nueva) predominava el **latifundi**, grans finques treballades per jornalers sense terra que patien atur estacional i condicions miserables
- Al nord (Galícia, zones de Castella) predominava el **minifundi**, petites parcel·les insuficients per mantenir una família
- A Catalunya, País Valencià i algunes zones del nord existia una pagesia mitjana més pròspera

La "qüestió agrària" va ser un dels grans problemes irresolubles de la Restauració, font de conflictes socials i de l'expansió de l'anarquisme entre el camperolat andalús.

### Els Inicis del Moviment Obrer

Durant la Restauració es van consolidar les dues grans tendències del moviment obrer espanyol:

**L'Anarquisme:**
- Major implantació a Catalunya, Aragó, País Valencià i Andalusia
- Rebutjava la participació política i apostava per l'acció directa
- Va fundar la Federació Regional Espanyola de l'AIT (1870)
- Diverses tendències: anarcocol·lectivisme, anarcocomunisme, anarcosindicalisme

**El Socialisme:**
- Major implantació a Madrid, País Basc i Astúries
- Fundació del PSOE (1879) i la UGT (1888) per Pablo Iglesias
- Estratègia gradualista: participació electoral i sindicalisme de masses
- Menor implantació que l'anarquisme fins a principis del segle XX

### Els Nacionalismes Perifèrics

Durant el darrer terç del segle XIX van emergir els moviments nacionalistes a Catalunya, el País Basc i, en menor mesura, Galícia.

**El Catalanisme:**
- Arrels en la Renaixença cultural (recuperació de la llengua i la literatura)
- Valentí Almirall: "Lo Catalanisme" (1886), federalisme catalanista
- Enric Prat de la Riba: nacionalisme conservador, Lliga Regionalista (1901)
- Bases de Manresa (1892): projecte d'autonomia

**El Nacionalisme Basc:**
- Sabino Arana: fundador del PNB (1895)
- Barreja de tradició foral, catolicisme integrista i antiindustrialisme
- Defensa de la raça basca i la llengua euskera
- Inicial independentisme que evolucionaria cap a l'autonomisme

## Política Colonial: Cuba, Filipines i el Marroc

La política colonial va ser una de les preocupacions constants de la Restauració:

### Cuba i Puerto Rico

Les dues colònies americanes que restaven a Espanya eren Cuba i Puerto Rico. Cuba era econòmicament importantíssima per la producció de sucre i tabac, i existia un poderós lobby de comerciants i propietaris d'esclaus que s'oposava a qualsevol reforma.

La **Guerra dels Deu Anys (1868-1878)** va acabar amb la Pau de Zanjón, que prometia reformes mai complides. El descontentament va provocar la **Guerra Chiquita (1879-1880)** i, finalment, la **Guerra d'Independència (1895-1898)**.

### Filipines

A l'arxipèlag filipí també va créixer el moviment independentista, encapçalat per figures com José Rizal i Andrés Bonifacio. La insurrecció de 1896 va coincidir amb la guerra de Cuba.

### El Marroc

Des de la guerra de 1859-1860, Espanya mantenia interessos al nord d'Àfrica. La Conferència d'Algesires (1906) i el Tractat de 1912 van establir el protectorat espanyol sobre la zona nord del Marroc, que seria font de conflictes durant dècades.
    `,
  },
  {
    id: 2,
    title: "La Crisi del 98 i el Regeneracionisme",
    icon: AlertTriangle,
    description: "Pèrdua de les últimes colònies i reflexió nacional",
    content: `
## La Guerra de Cuba i les Filipines

### Antecedents: El Grito de Baire (1895)

El 24 de febrer de 1895, l'independentisme cubà va reprendre la lluita armada amb l'anomenat "Grito de Baire". L'estratègia dels insurgents, liderats per Máximo Gómez i Antonio Maceo, consistia a estendre la guerra cap a l'oest de l'illa i destruir les plantacions de sucre per fer inviable econòmicament el domini espanyol.

**Causes de la insurrecció:**
- Incompliment de les promeses de la Pau de Zanjón (1878)
- Política proteccionista espanyola que perjudicava els interessos econòmics cubans
- Creixent intervencionisme nord-americà
- Lideratge de José Martí i el Partit Revolucionari Cubà

### La Resposta Espanyola

El govern espanyol va enviar successius contingents de tropes fins a reunir un exèrcit de 200.000 homes, el major que mai havia creuat l'Atlàntic. Els generals Martínez Campos i, posteriorment, Valeriano Weyler van intentar controlar la situació.

**La política de reconcentració de Weyler:**
El general Weyler va implementar una política de "reconcentració" de la població rural en zones controlades per l'exèrcit espanyol per aïllar els rebels. Aquesta mesura va provocar una catàstrofe humanitària amb milers de morts per fam i malalties, i va generar una forta condemna internacional, especialment als Estats Units.

### La Intervenció Nord-americana

Els Estats Units havien mostrat interès per Cuba durant dècades. La política expansionista nord-americana, els interessos econòmics (inversions en la indústria sucrera) i la campanya de la premsa sensacionalista (periòdics de Hearst i Pulitzer) van crear un clima favorable a la intervenció.

**L'explosió del Maine (15 de febrer de 1898):**
L'enfonsament del cuirassat USS Maine en el port de l'Havana —probablement per un accident intern— va ser atribuït a Espanya per la premsa groga nord-americana amb el lema "Remember the Maine!". El 25 d'abril de 1898, els Estats Units van declarar la guerra a Espanya.

### La Guerra Hispanoamericana

La guerra va ser breu i desigual. La flota espanyola del Pacífic va ser destruïda a Cavite (Filipines) l'1 de maig de 1898 i la de l'Atlàntic a Santiago de Cuba el 3 de juliol. Sense capacitat de reforçar les guarnicions ni d'enfrontar la marina nord-americana, el govern de Sagasta va sol·licitar l'armistici.

**Causes de la derrota:**
- Superioritat tecnològica i industrial dels Estats Units
- Distància geogràfica i impossibilitat de reforçar les colònies
- Desgast de l'exèrcit espanyol per anys de guerra irregular
- Manca de suport internacional a Espanya
- Ineficàcia de la marina espanyola

## El Tractat de París (10 de desembre de 1898)

El Tractat de París va sancionar les pèrdues territorials espanyoles:

- **Cuba** obtenia la independència, encara que sota tutela nord-americana
- **Puerto Rico** era cedit als Estats Units
- **Filipines** eren venudes als Estats Units per 20 milions de dòlars
- **Guam** passava a control nord-americà

Espanya perdia els darrers vestigis del seu imperi colonial americà i asiàtic, conservant només les possessions africanes (Guinea, Sàhara, Marroc).

## La Crisi del 98: Dimensions i Conseqüències

### La Dimensió Política

El Desastre del 98 va posar en qüestió tot el sistema de la Restauració. Es va criticar:

- La corrupció i ineficàcia de la classe política
- El sistema del torn i el caciquisme
- L'absència de polítiques reals de modernització
- La gestió de la guerra: improvisació, manca de preparació, decisions errades

**Reaccions polítiques:**
- Els partits dinàstics van mantenir el poder però amb creixent deslegitimació
- Creixement de les forces republicanes i catalanistes
- Intensificació del debat sobre la "regeneració" d'Espanya
- Primera gran fractura en el consens de la Restauració

### La Dimensió Econòmica

Contràriament al que es podria esperar, les conseqüències econòmiques del Desastre no van ser catastròfiques:

**Aspectes negatius:**
- Pèrdua dels mercats colonials protegits
- Ruïna d'empreses vinculades al comerç colonial
- Cost humà: milers de soldats morts, la majoria per malalties tropicals

**Aspectes positius:**
- Repatriació de capitals colonials ("capital repatriat") que es va invertir a la península
- Estímul a la indústria nacional davant la pèrdua de mercats captius
- Creació de nous bancs (Banco Hispano Americano, 1901)
- Inici d'un cicle de creixement econòmic moderat

### La Dimensió Moral i Cultural

La derrota va provocar una profunda crisi de consciència nacional. Es va qüestionar:

- La identitat nacional espanyola i el seu lloc al món
- El mite de l'imperi i la grandesa històrica
- La capacitat d'Espanya per modernitzar-se
- Les causes del "retard" espanyol respecte a Europa

Aquesta reflexió col·lectiva va donar lloc a dos grans moviments intel·lectuals: el **Regeneracionisme** i la **Generació del 98**.

## El Regeneracionisme

### Joaquín Costa i el Regeneracionisme Polític

**Joaquín Costa (1846-1911)** és la figura central del regeneracionisme. Jurista, historiador, economista i polític aragonès, va dedicar la seua vida a denunciar els mals d'Espanya i proposar solucions.

**Obres principals:**
- "Oligarquía y Caciquismo como la forma actual de gobierno en España" (1901)
- "Colectivismo agrario en España" (1898)
- "Reconstitución y europeización de España" (1900)

**Diagnòstic de Costa:**
Costa considerava que Espanya patia un "mal govern" que impedia el seu progrés. Els responsables eren:

- L'**oligarquia**: minoria de notables que monopolitzava el poder polític i econòmic
- El **caciquisme**: sistema de control polític local que falsejava la representació
- Els "polítics professionals": classe dirigent parasitària i corrupta

**Propostes de Costa:**
El lema de Costa era **"Escuela y despensa"**, és a dir, educació i desenvolupament econòmic. Concretament proposava:

- Reforma educativa profunda: escolarització universal, formació tècnica, "europeïtzació" del pensament
- Política hidràulica: construcció d'embassaments i canals per modernitzar l'agricultura
- Reforma agrària: accés dels camperols a la terra
- Reforma de l'administració: acabar amb el caciquisme i democratitzar el sistema
- Política de colonització interior: repoblació i posada en cultiu de terres ermes

Costa també va proposar l'arribada d'un "cirurgià de ferro" que regenerara el país, figura ambigua que podia interpretar-se en clau democràtica o autoritària.

### Altres Corrents Regeneracionistes

**Regeneracionisme militar:**
Alguns militars, com Joaquín Costa (distint del polític), Polavieja o Weyler, van proposar reformes des d'una perspectiva castrense, sovint amb ressonàncies autoritàries.

**Regeneracionisme des dels partits dinàstics:**
- **Francisco Silvela** (conservador): intent de reformes administratives i moralització de la vida pública
- **Antonio Maura** (conservador): "revolució des de dalt" per democratitzar el sistema des de dins
- **José Canalejas** (liberal): reformisme social, separació Església-Estat

**Regeneracionisme educatiu:**
- La **Institución Libre de Enseñanza** de Giner de los Ríos: reforma pedagògica, laïcisme, formació integral
- Extensió de l'educació primària
- Creació de la Junta para Ampliación de Estudios (1907)

## La Generació del 98

### Caracterització

La Generació del 98 és un grup d'escriptors i pensadors units per la seua reflexió sobre Espanya arran del Desastre. Entre els seus membres destaquen: **Miguel de Unamuno, Pío Baroja, Azorín, Ramiro de Maeztu, Antonio Machado i Ramón María del Valle-Inclán**.

**Temes principals:**
- El "problema d'Espanya": causes del retard, identitat nacional
- Castella com a essència d'Espanya: paisatge, llengua, tradició
- L'intrahistoria: vida quotidiana del poble front a la història oficial
- Subjectivisme i preocupacions existencials
- Crítica social des de perspectives diverses

**Diferències amb el Regeneracionisme:**
Si el regeneracionisme era essencialment polític i proposava reformes concretes, la Generació del 98 era principalment literària i filosòfica, més interessada en qüestions d'identitat i existència que en programes de govern.

### Unamuno i el Problema d'Espanya

**Miguel de Unamuno (1864-1936)** és potser la figura intel·lectual més important de l'època. La seua reflexió sobre Espanya va evolucionar:

- **Primera etapa (1895):** "En torno al casticismo" proposa l'"europeïtzació" d'Espanya, l'obertura a les influències modernes
- **Etapa posterior:** revalorització del que és "castís", de l'essència espanyola front a l'europeisme

Unamuno va encunyar conceptes com la **intrahistoria** (la història silenciosa del poble humil) i va reflexionar sobre la tensió entre tradició i modernitat, fe i raó.

## Conseqüències del 98 a Llarg Termini

### En l'Àmbit Polític

- Crisi del sistema del torn, que mai no tornaria a funcionar tan fluidament
- Creixement de forces polítiques alternatives: republicanisme, catalanisme, socialisme
- Debilitament del consens entre les elits sobre el model d'Estat
- Creixent intervencionisme militar en la política

### En l'Àmbit Social

- Intensificació de les demandes de reforma
- Conscienciació de les classes mitjanes sobre els problemes nacionals
- Tensió entre modernitzadors i forces conservadores
- Qüestionament de les estructures tradicionals (Església, caciquisme, oligarquia)

### En l'Àmbit Cultural

- Renovació literària i artística (Modernisme, Generació del 98)
- Debat intel·lectual sobre la identitat espanyola
- Expansió de la premsa i la vida cultural urbana
- Noves institucions educatives i científiques
    `,
  },
  {
    id: 3,
    title: "Descomposició del Sistema (1902-1923)",
    icon: TrendingDown,
    description: "Crisi política, social i militar del règim restauracionista",
    content: `
## El Regnat d'Alfons XIII (1902-1931)

### L'Arribada al Poder

Alfons XIII (1886-1941) va assumir personalment el poder el 17 de maig de 1902, en complir els setze anys. Fill pòstum d'Alfons XII, havia estat educat per la seua mare, la regent Maria Cristina de Habsburg, en un ambient cortesà i militar.

**Característiques del nou monarca:**
- Personalitat activa i intervencionista, a diferència de la prudent regència de la seua mare
- Inclinació cap als sectors militars i conservadors
- Us extensiu de la prerrogativa reial per influir en la política
- Interessos personals en determinades àrees (exèrcit, Morocco)

El regnat d'Alfons XIII coincideix amb la fase de descomposició del sistema de la Restauració. El rei va ser cada vegada més protagonista de la vida política, cosa que acabaria comprometent a la monarquia en les crisis successives.

## La Crisi dels Partits Dinàstics

### La Mort dels Líders Històrics

El sistema del torn havia funcionat gràcies al lideratge indiscutit de Cánovas i Sagasta, que garantien la disciplina dels seus respectius partits. La mort de Cánovas (assassinat el 1897) i Sagasta (1903) va obrir una crisi de lideratge que fragmentaria els dos grans partits.

**Conseqüències de la fragmentació:**
- Multiplicació de faccions internes en cada partit
- Governs inestables i de curta durada
- Dificultat per aplicar programes reformistes coherents
- Creixent desprestigi del parlamentarisme

### Els Intents Reformistes

Malgrat les dificultats, alguns líders van intentar reformar el sistema des de dins:

**Antonio Maura (Partit Conservador):**
Maura va governar en dues etapes (1903-1904 i 1907-1909). El seu programa de "revolució des de dalt" pretenia:
- Democratitzar el sistema acabant amb el caciquisme
- Reforma de l'administració local
- Política social moderada
- Descentralització administrativa

La **Llei d'Administració Local** de 1907 pretenia sanejar les eleccions locals, però mai no va arribar a aplicar-se plenament. La Setmana Tràgica de Barcelona (1909) va posar fi al govern de Maura.

**José Canalejas (Partit Liberal):**
Canalejas va governar entre 1910 i 1912, quan va ser assassinat per un anarquista. El seu programa incloïa:
- La "Llei del Candau" (1910): limitació de les congregacions religioses
- Servei militar obligatori sense redempció en metàl·lic
- Mancomunitats: primera experiència d'autonomia regional (Catalunya, 1914)
- Reformes laborals moderades

L'assassinat de Canalejas va privar el sistema de la seua darrera esperança de reforma efectiva.

### El Govern de Concentració i la Crisi de 1917

L'esclat de la Primera Guerra Mundial (1914) va trobar Espanya dividida entre aliadòfils (liberals, esquerres) i germanòfils (conservadors, sectors de l'exèrcit). Malgrat la neutralitat oficial, el conflicte va agreujar les tensions internes.

**Efectes de la guerra:**
- Boom econòmic: exportacions a tots dos bàndols, industrialització accelerada
- Inflació galopant que erosionava els salaris
- Beneficis extraordinaris per a industrials i terratinents
- Creixent conflictivitat social

## La Crisi de 1917

L'any 1917 va ser el moment de major crisi del sistema abans del colp de Primo de Rivera. Es van produir tres moviments simultanis però no coordinats:

### Les Juntes Militars de Defensa

L'exèrcit espanyol patia problemes greus: excés d'oficials, sous baixos, ascensos per mèrits de guerra (africanisme) que xocaven amb l'escalafó tradicional. El juny de 1917, les **Juntes de Defensa** (organitzacions corporatives d'oficials) van presentar un manifest exigint:

- Millores salarials i professionals
- Fi dels ascensos per mèrits de guerra
- Major atenció a l'exèrcit peninsular front a l'africanisme

El govern de Eduardo Dato va acabar cedint a les demandes militars, legitimant la intervenció de l'exèrcit en la política.

### L'Assemblea de Parlamentaris

El juliol de 1917, diputats i senadors —principalment catalanistes de la Lliga, republicans i socialistes— es van reunir a Barcelona en una **Assemblea de Parlamentaris** no convocada pel govern. L'assemblea va exigir:

- Convocatòria de Corts constituents
- Reforma constitucional
- Autonomia per a les regions

El moviment, encapçalat per Francesc Cambó (Lliga Regionalista), va ser dissolt per la força pública sense aconseguir els seus objectius.

### La Vaga General Revolucionària

L'agost de 1917, la UGT i la CNT van convocar una **vaga general revolucionària** que pretenia enderrocar el sistema i proclamar la república. La vaga va ser especialment seguida a Astúries, Biscaia, Catalunya i Madrid.

**Fracàs de la vaga:**
- Manca de coordinació amb les Juntes i l'Assemblea
- Repressió militar contundent
- Més de 70 morts i milers de detinguts
- Els líders socialistes (Largo Caballero, Besteiro, Saborit) van ser condemnats a cadena perpètua (amnistiats el 1918)

### Conseqüències de 1917

La crisi de 1917 va demostrar que:
- El sistema de la Restauració havia perdut capacitat de resposta
- L'exèrcit era un poder autònom capaç d'imposar-se al govern civil
- Les forces d'oposició (catalanisme, obrerisme) no eren encara prou fortes per enderrocar el sistema
- La monarquia s'identificava cada vegada més amb la repressió

A partir de 1917, els governs van ser cada vegada més inestables i efímers. Es van formar governs de "concentració" que reunien diverses faccions però que eren incapaços d'afrontar els problemes estructurals.

## La Qüestió Social (1917-1923)

### El "Trienni Bolxevic" (1918-1921)

L'impacte de la Revolució Russa (1917) i la crisi postbèl·lica van provocar una onada de conflictivitat social a tota Europa. A Espanya, el període 1918-1921 és conegut com a "trienni bolxevic" pel temor que la revolució s'estenguera.

**Al camp andalús:**
- Ocupacions de finques pels jornalers
- Vagues de segadors
- Demandes de repartiment de la terra
- Dura repressió per la Guàrdia Civil

**A les zones industrials:**
- Vagues massives a Barcelona, Biscaia i Astúries
- Demandes de jornada de vuit hores (aconseguida el 1919)
- Creixement espectacular de la CNT

### La Guerra Social a Barcelona (1919-1923)

Barcelona va viure una situació de violència extrema entre el sindicalisme revolucionari (CNT) i la patronal, amb el suport de les forces de l'ordre.

**La Vaga de la Canadenca (febrer-març 1919):**
Conflicte a la companyia elèctrica Barcelona Traction que es va convertir en vaga general. Va acabar amb la concessió de la jornada de vuit hores, la primera d'Europa.

**El Pistolerisme:**
Davant la força del sindicalisme, la patronal catalana va organitzar grups armats (el "Sindicat Lliure" i els escamots de Martínez Anido) que assassinaven líders obrers. La CNT va respondre amb atemptats contra patrons i policies. Entre 1919 i 1923 van morir més de 200 persones en aquesta guerra social.

**Figures destacades:**
- Salvador Seguí "el Noi del Sucre": líder de la CNT, assassinat el 1923
- Francesc Layret: advocat laboralista, assassinat el 1920
- Eduardo Dato: president del govern, assassinat per anarquistes el 1921

## La Guerra del Marroc i el Desastre d'Annual

### El Protectorat del Marroc

Espanya havia aconseguit un protectorat sobre el nord del Marroc (el Rif) en virtut dels acords amb França (1904) i el Tractat de 1912. La zona era muntanyosa, de difícil control, habitada per tribus berbers que no acceptaven la dominació estrangera.

**La Guerra del Rif:**
Des de 1909 (any de la Setmana Tràgica), l'exèrcit espanyol lluitava per controlar el territori. La guerra era impopular a Espanya: afectava especialment els fills de famílies humils que no podien pagar la "quota" per evitar el servei militar.

### El Desastre d'Annual (juliol-agost 1921)

El 22 de juliol de 1921, les tropes rifenyes comandades per **Abd el-Krim** van atacar la posició d'Annual. El que havia de ser una retirada ordenada es va convertir en una desfeta total.

**Conseqüències immediates:**
- Entre 8.000 i 13.000 soldats espanyols morts
- Pèrdua de tot el territori ocupat des de 1909
- Captures i maltractament de presoners
- Mort del general Silvestre, comandant de la zona

### L'Expedient Picasso

El govern va encarregar al general **Juan Picasso** una investigació sobre les responsabilitats del desastre. L'**Expedient Picasso** va revelar:

- Negligències greus dels comandaments militars
- Manca de preparació i subministraments
- Corrupció i malversació de fons
- Possible implicació del rei Alfons XIII, que hauria encoratjat l'ofensiva temerària del general Silvestre

L'expedient mai no va arribar a debatre's plenament a les Corts perquè el colp d'estat de Primo de Rivera ho va impedir. Molts contemporanis van considerar que el colp pretenia, entre altres coses, evitar que les responsabilitats del rei quedaren al descobert.

## L'Agonia del Sistema (1921-1923)

### Governs Inestables

Entre 1921 i 1923 es van succeir diversos governs incapaços de fer front als problemes:

- Crisi econòmica postbèl·lica
- Conflictivitat social extrema
- Desprestigi del parlamentarisme
- Guerra impopular al Marroc
- Terrorisme anarquista i pistolerisme patronal

### Clima Previ al Colp

L'estiu de 1923, Espanya vivia una situació de crisi generalitzada:

- Preparació de la discussió de l'Expedient Picasso
- Assassinats polítics constants
- Demandes d'ordre per part de les classes mitjanes i conservadores
- Sectors militars descontents per la situació al Marroc

El 13 de setembre de 1923, el general Miguel Primo de Rivera, Capità General de Catalunya, es va pronunciar a Barcelona. El rei Alfons XIII, lluny de defensar la Constitució, va acceptar el fet consumat i va encarregar govern al dictador.
    `,
  },
  {
    id: 4,
    title: "La Dictadura de Primo de Rivera (1923-1931)",
    icon: Shield,
    description: "El colp d'estat i el règim dictatorial",
    content: `
## El Colp d'Estat del 13 de Setembre de 1923

### Context Immediat

El colp de Primo de Rivera no va ser un pronunciament clàssic del segle XIX, sinó un moviment que comptava amb suports civils amplis i amb l'aquiescència del rei. La situació de crisi generalitzada havia generat un clima favorable a solucions autoritàries.

**Suports del colp:**
- **Sectors de l'exèrcit:** Especialment els africanistes i els descontents amb la política marroquina
- **Burgesia catalana:** Esperava ordre davant el terrorisme i el sindicalisme revolucionari
- **Sectors catòlics i conservadors:** Veien en l'anarquisme una amenaça a l'ordre social
- **Classes mitjanes urbanes:** Cansades de la inestabilitat i la corrupció política
- **Sectors monàrquics:** Preocupats per les responsabilitats de l'Expedient Picasso

### El Manifest del 13 de Setembre

El manifest amb què Primo de Rivera justificava el colp és un document clau. S'adreçava a "Espanya i l'Exèrcit" i presentava el pronunciament com una operació de salvament nacional.

**Contingut del manifest:**
- Crítica ferotge als "polítics professionals" com a responsables de la decadència
- Retòrica regeneracionista: neteja de la vida pública
- Promesa de solució als problemes nacionals: ordre, Marroc, economia
- Caràcter provisional del règim: es presentava com un parèntesi per sanejar el sistema

**El paper d'Alfons XIII:**
El rei no va ordenar a l'exèrcit defensar la Constitució, com era la seua obligació. Va acceptar el colp i va encarregar govern a Primo de Rivera. Aquesta decisió vincularia per sempre la monarquia a la dictadura i contribuiria a la seua caiguda el 1931.

## El Directori Militar (1923-1925)

### Estructura del Poder

Durant la primera fase, Primo de Rivera va governar amb un **Directori Militar** format exclusivament per generals i caps de l'exèrcit.

**Mesures immediates:**
- Suspensió de la Constitució de 1876
- Dissolució de les Corts
- Declaració de l'estat de guerra
- Dissolució de diputacions i ajuntaments
- Nomenament de delegats governatius militars

### Política d'Ordre Públic

La dictadura va acabar ràpidament amb el pistolerisme i la violència social a Barcelona:

- Repressió contundent de la CNT, que va ser il·legalitzada
- Detenció de líders anarquistes i comunistes
- Censura de premsa
- Prohibició de manifestacions i vagues

La UGT i el PSOE, en canvi, van adoptar una postura més ambigua. Largo Caballero va arribar a col·laborar amb el règim com a conseller d'Estat, cosa que li valdria fortes crítiques posteriors.

### La Qüestió Catalana

Una de les primeres mesures de Primo de Rivera va ser l'atac al catalanisme:

- Dissolució de la Mancomunitat de Catalunya (1925)
- Prohibició de l'ús oficial del català
- Clausura del camp del Futbol Club Barcelona
- Persecució de símbols catalanistes

Paradoxalment, Primo de Rivera havia rebut suport inicial de la burgesia catalana, que havia confiat en les seues promeses d'ordre. L'atac al catalanisme va trencar aquesta aliança i va empènyer el catalanisme cap a posicions republicanes.

## La Fi de la Guerra del Rif

### El Desembarcament d'Alhucemas (1925)

L'èxit més notable de la dictadura va ser la victòria definitiva sobre Abd el-Krim al Marroc. El 8 de setembre de 1925, una operació conjunta hispanofrancesa va desembarcar a la badia d'Alhucemas, al cor del Rif.

**Desenvolupament de l'operació:**
- 18.000 soldats espanyols i forces franceses
- Primera operació amfíbia moderna de la història
- Participació destacada de la Legió i els Regulars
- Direcció del general José Sanjurjo

La rendició d'Abd el-Krim a França el 1926 va posar fi a la guerra. El Marroc va quedar pacificat i Primo de Rivera va aparèixer com a salvador de l'exèrcit i venjador d'Annual.

### Conseqüències del Marroc

La victòria al Marroc va tenir diversos efectes:

- Reforç del prestigi de la dictadura
- Consolidació d'un grup de militars "africanistes" que tindrien paper destacat en la Guerra Civil (Franco, Mola, Sanjurjo, Goded)
- Experiència militar que seria aplicada posteriorment contra civils espanyols

## El Directori Civil (1925-1930)

### Institucionalització del Règim

A partir de 1925, Primo de Rivera va intentar institucionalitzar la dictadura incorporant tècnics civils al govern.

**Ministres destacats:**
- José Calvo Sotelo (Hisenda): política fiscal i monopolis estatals
- Eduardo Aunós (Treball): corporativisme laboral
- Rafael Benjumea (Obres Públiques): infraestructures

### La Unión Patriótica

La **Unión Patriótica (UP)** va ser l'intent de crear un partit únic de suport a la dictadura, a imitació del feixisme italià.

**Característiques:**
- Partit sense ideologia clara més enllà del suport al dictador
- Aglutinava catòlics, conservadors i oportunistes
- Mai no va aconseguir mobilitzar masses
- Estructura burocràtica sense base popular autèntica
- Va desaparèixer amb la caiguda de la dictadura

### L'Assemblea Nacional Consultiva (1927)

Primo de Rivera va crear una **Assemblea Nacional Consultiva** com a substitut de les Corts. Els seus membres eren designats, no elegits.

**Funcions:**
- Assessorar el govern
- Redactar un projecte de constitució
- Donar aparença de legitimitat al règim

El projecte constitucional elaborat per l'Assemblea establia un règim corporatiu de tipus feixista, però mai no va arribar a aprovar-se.

## Política Econòmica

### Intervencionisme Estatal

La dictadura va aplicar una política econòmica intervencionista i proteccionista, inspirada en part en el corporativisme italià.

**Nacionalisme econòmic:**
- CAMPSA: monopoli estatal dels petrolis (1927)
- Telefònica: monopoli de les telecomunicacions (concedit a ITT amb participació estatal)
- Proteccionisme industrial extrem
- Ajudes i subvencions a sectors "nacionals"

**Obres públiques:**
La dictadura va impulsar un ambiciós programa d'obres públiques:
- Construcció de carreteres (9.000 km nous)
- Ferrocarrils
- Pantans i política hidràulica (influència de Costa)
- Exposicions internacionals de Sevilla i Barcelona (1929)

**Finançament i deute:**
Les obres públiques es van finançar amb deute públic i amb crèdits extraordinaris que hipotecaven el futur. Quan va arribar la crisi del 29, l'Estat estava fortament endeutat.

### Política Laboral: El Corporativisme

La dictadura va intentar canalitzar les relacions laborals mitjançant estructures corporatives:

**L'Organització Corporativa Nacional (1926):**
- Comitès paritaris: representants d'obrers i patrons per sectors
- Arbitratge obligatori dels conflictes laborals
- La UGT va participar-hi (Largo Caballero, conseller d'Estat)
- La CNT ho va boicotejar des de la clandestinitat

El corporativisme primo-riverista va aconseguir una certa pau social, però a costa de la llibertat sindical i de la repressió del sindicalisme revolucionari.

## L'Oposició a la Dictadura

### L'Oposició Intel·lectual

La dictadura va enfrontar-se amb bona part del món intel·lectual espanyol:

**Unamuno:**
Miguel de Unamuno va ser un dels crítics més destacats. Desterrat a Fuerteventura (Canàries) el 1924, va fugir a França, des d'on va continuar la seua campanya contra el règim.

**L'Ateneu de Madrid:**
Centre tradicional del liberalisme espanyol, va mantenir una actitud crítica que va provocar la seua clausura temporal.

**Revistes i periòdics:**
Malgrat la censura, diverses publicacions van mantenir una línia crítica (Revista de Occidente, El Sol).

### L'Oposició Política

**Els Vells Partits Dinàstics:**
Conservadors i liberals esperaven la fi de la dictadura per recuperar el poder. Figures com Sánchez Guerra o el comte de Romanones conspiraven discretament.

**El Republicanisme:**
La dictadura va reforçar el republicanisme. Vells republicans (Lerroux, Azaña) i nous (Ortega y Gasset) es preparaven per al moment de la caiguda.

**El Catalanisme:**
L'atac a la identitat catalana va radicalitzar el moviment. Francesc Macià, líder d'Estat Català, va intentar una invasió des de França el 1926 (fracassada). El catalanisme es va vincular definitivament amb el republicanisme.

**Els Militars:**
Alguns militars es van oposar a la dictadura. La "Sanjuanada" (1926) va ser un intent de pronunciament fracassat.

### L'Oposició Obrera

**La CNT:**
Il·legalitzada, la CNT va mantenir estructures clandestines. La FAI (Federació Anarquista Ibèrica, 1927) va radicalitzar el moviment cap a l'insurrecionisme.

**El PCE:**
El Partit Comunista d'Espanya, creat el 1921, va créixer modestament en la clandestinitat, especialment entre miners i obrers industrials.

## La Caiguda de la Dictadura

### Factors de la Crisi

A partir de 1929, la dictadura va entrar en crisi irreversible:

**Crisi econòmica:**
El crac del 29 va afectar l'economia espanyola. La pesseta es va depreciar, les exportacions van caure i el deute públic es va fer insuportable.

**Pèrdua de suports:**
- L'exèrcit es va distanciar de Primo de Rivera
- La burgesia catalana estava alienada
- Els intel·lectuals eren hostils
- L'Església mantenia una actitud cada vegada més distant

**Crisi de salut:**
El dictador patia diabetis i el seu estat de salut es deteriorava.

### La Dimissió de Primo de Rivera

El 26 de gener de 1930, Primo de Rivera va consultar els capitans generals. En no obtenir el suport unànime que esperava, va presentar la dimissió al rei. Va morir poc després a París (març de 1930).

### La "Dictablanda" del General Berenguer

Alfons XIII va nomenar el general Dámaso Berenguer per encapçalar una transició ordenada cap al sistema constitucional.

**El "Error Berenguer":**
Ortega y Gasset va publicar un famós article ("El Error Berenguer") criticant la idea de tornar a la situació anterior a 1923 com si res no haguera passat. "Espanya ha deixat de ser monàrquica", afirmava.

**El Pacte de San Sebastián (agost de 1930):**
Republicans, socialistes i catalanistes van acordar a San Sebastián la constitució d'un comitè revolucionari per proclamar la República.

**L'Aixecament de Jaca (desembre de 1930):**
Els capitans Fermín Galán i Ángel García Hernández es van pronunciar a Jaca (Osca) a favor de la República. El pronunciament va fracassar i tots dos van ser afusellats, convertint-se en màrtirs republicans.

### Les Eleccions Municipals del 12 d'Abril de 1931

El govern de l'almirall Aznar va convocar eleccions municipals per al 12 d'abril de 1931, com a primer pas cap a la normalització constitucional.

**Resultats:**
- A les zones rurals (controlades pels cacics) van guanyar els monàrquics
- A les capitals de província i grans ciutats (vot més lliure) van guanyar de manera aclaparadora les candidatures republicanes i socialistes

El resultat es va interpretar com un plebiscit sobre la monarquia. El 14 d'abril de 1931, davant les manifestacions populars, Alfons XIII va abandonar Espanya sense abdicar formalment. Es proclamava la **Segona República Espanyola**.
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
