import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Bipartidisme",
    definition: "Sistema polític en què dos partits principals —el Conservador i el Liberal— s'alternaven en el poder de manera pactada. Aquest sistema, dissenyat per Cánovas del Castillo, garantia l'estabilitat però excloïa altres forces polítiques i socials. El bipartidisme espanyol de la Restauració es diferenciava del britànic perquè no reflectia la voluntat popular, sinó que era el resultat de la manipulació electoral sistemàtica. Els dos partits representaven sectors de l'oligarquia amb diferències programàtiques mínimes: els conservadors eren més propers a l'Església i defensaven el proteccionisme, mentre que els liberals eren més laics i lliurecanvistes. Ambdós partits, però, compartien l'acceptació de la monarquia, la Constitució de 1876 i el rebuig a les reformes profundes.",
    category: "Sistema Polític",
    relatedTerms: ["Torn Pacífic", "Encasellat", "Partit Conservador", "Partit Liberal"],
  },
  {
    term: "Torn Pacífic",
    definition: "Mecanisme de rotació acordada entre el Partit Conservador (Cánovas) i el Partit Liberal (Sagasta) per alternar-se en el govern. Quan un partit mostrava signes de desgast, el Rei exercia la seua prerrogativa i encarregava la formació de govern a l'altre. El nou govern convocava eleccions, que sempre guanyava gràcies al control del procés electoral. Aquest sistema va funcionar de 1881 fins a principis del segle XX, quan la fragmentació dels partits el va fer inviable. El torn no estava regulat per cap llei, sinó que era un acord tàcit entre els líders dels dos partits, basat en la confiança mútua i el respecte a les 'regles del joc'. La mort de Cánovas (1897) i Sagasta (1903) va debilitar el sistema, ja que cap dels seus successors tenia la mateixa autoritat per mantenir la disciplina dels partits.",
    category: "Sistema Polític",
    relatedTerms: ["Bipartidisme", "Prerrogativa Reial", "Encasellat"],
  },
  {
    term: "Caciquisme",
    definition: "Sistema de control polític local exercit pels cacics, notables rurals amb poder econòmic i social que garantien els resultats electorals desitjats pel govern. Els cacics actuaven com a intermediaris entre el poder central i les comunitats locals, oferint favors (feina, préstecs, protecció davant la justícia) a canvi de vots. El caciquisme era especialment efectiu en àrees rurals amb alta taxa d'analfabetisme i dependència econòmica. Hi havia diversos tipus de cacics: els grans terratinents, que controlaven l'ocupació de jornalers; els professionals liberals (advocats, notaris, metges) que oferien els seus serveis; i els polítics que actuaven com a intermediaris amb Madrid. El caciquisme no era exclusiu d'Espanya, però va assolir-hi una extensió i pervivència notables. El sistema es basava tant en la recompensa (favors, préstecs) com en la coacció (amenaces de desnonament, acomiadament o represàlies judicials).",
    category: "Sistema Polític",
    relatedTerms: ["Encasellat", "Pucherazo", "Oligarquia"],
  },
  {
    term: "Encasellat",
    definition: "Procés de distribució prèvia dels escons entre els partits dinàstics abans de les eleccions. El Ministeri de Governació, a través dels governadors civils provincials, elaborava una 'casella' (encasellat) amb els candidats que havien de guanyar en cada circumscripció. El procés implicava negociacions entre el ministre, els governadors i els cacics locals. Fins i tot es reservaven alguns escons per a l'oposició (republicans, carlistes) per donar aparença de pluralisme. Els candidats oficials rebien tot el suport de l'aparell administratiu, mentre que els que s'enfrontaven a l'encasellat eren considerats 'cuneros' (forans) o 'disidents'. Una vegada pactat l'encasellat, els cacics locals s'encarregaven de garantir els resultats mitjançant la pressió, el frau o la compra de vots. L'encasellat és una prova de la fictícia democràcia de la Restauració: les eleccions no decidien res, simplement ratificaven acords previs entre les elits.",
    category: "Mecanismes Electorals",
    relatedTerms: ["Pucherazo", "Caciquisme", "Governador Civil"],
  },
  {
    term: "Pucherazo",
    definition: "Conjunt de pràctiques fraudulentes per manipular els resultats electorals. El terme prové de 'puchero' (olla), referint-se a les urnes on es 'cuinaven' els resultats. Les tècniques incloïen: falsificació del cens electoral (inclusió de difunts, exclusió d'opositors); el 'vot dels morts' o 'lázaros' (fer votar persones difuntes o absents); trencament d'urnes quan els resultats eren adversos; coacció directa als votants (amenaces, intimidació); compra de vots (amb diners, menjar o beguda); alteració de les actes durant el recompte; i la 'ronda volant' (grups de votants que votaven múltiples vegades). El pucherazo era l'instrument final per garantir l'encasellat pactat prèviament. Era més efectiu a les zones rurals que a les ciutats, on el control era més difícil i apareixien diputats d'oposició autèntica.",
    category: "Mecanismes Electorals",
    relatedTerms: ["Encasellat", "Caciquisme"],
  },
  {
    term: "Regeneracionisme",
    definition: "Moviment intel·lectual i polític sorgit arran del Desastre del 98 que advocava per la modernització d'Espanya. Joaquín Costa, el seu màxim exponent, va resumir el programa amb el lema 'Escuela y despensa' (educació i desenvolupament econòmic). Els regeneracionistes diagnosticaven que Espanya patia un 'mal govern' causat per l'oligarquia i el caciquisme, que impedien el progrés nacional. Proposaven reformes profundes: educació universal i moderna; política hidràulica (embassaments, canals); reforma agrària per donar terra als camperols; europeïtzació del pensament i les institucions; i regeneració moral de la vida pública. Costa també va proposar l'arribada d'un 'cirurgià de ferro' que regenerara el país, figura ambigua que podia interpretar-se en clau democràtica o autoritària. El regeneracionisme va influir en polítics com Maura i Canalejas, encara que les reformes proposades mai no es van aplicar plenament.",
    category: "Moviments",
    relatedTerms: ["Desastre del 98", "Joaquín Costa", "Generació del 98"],
  },
  {
    term: "Expedient Picasso",
    definition: "Investigació militar dirigida pel general Juan Picasso sobre les responsabilitats del Desastre d'Annual (juliol-agost 1921), on moriren entre 8.000 i 13.000 soldats espanyols a mans de les forces rifenyes d'Abd el-Krim. L'expedient, de més de 2.000 pàgines, revelava greus negligències: falta de subministraments i armament adequat; posicions indefensables i línies de comunicació massa esteses; indisciplina i descoordinació entre les unitats; possibles malversacions de fons; i decisions temeraries del general Silvestre, comandant de la zona. L'expedient apuntava també a responsabilitats polítiques que podien implicar el mateix rei Alfons XIII, que hauria encoratjat l'ofensiva imprudent. La discussió de l'expedient a les Corts estava prevista per a l'octubre de 1923, però el colp d'estat de Primo de Rivera (setembre) ho va impedir. Molts contemporanis van interpretar el colp com un intent de protegir el rei i els alts comandaments de les responsabilitats pel desastre.",
    category: "Esdeveniments",
    relatedTerms: ["Desastre d'Annual", "Annual", "Abd el-Krim", "Guerra del Rif"],
  },
  {
    term: "Unión Patriótica",
    definition: "Organització política creada per Primo de Rivera el 1924 com a intent de crear un partit únic de suport a la dictadura. Inspirada vagament en el feixisme italià però sense la seua base ideològica coherent, la UP pretenia aglutinar 'tots els espanyols de bona voluntat' al voltant del règim. La seua ideologia era difusa: catolicisme, patriotisme, rebuig dels 'vells polítics', corporativisme. Els seus membres procedien de sectors diversos: catòlics, mauristes, conservadors, funcionaris, oportunistes. La UP mai no va aconseguir convertir-se en un veritable moviment de masses. Era més una xarxa clientelar de suport al dictador que un partit polític modern. Va desaparèixer amb la caiguda de Primo de Rivera i els seus membres es van dispersar: alguns cap al carlisme, altres cap a Falange, altres cap al centredreta republicà. L'experiència de la UP va demostrar la dificultat de crear un feixisme autèntic a Espanya.",
    category: "Dictadura",
    relatedTerms: ["Primo de Rivera", "Directori Civil", "Feixisme"],
  },
  {
    term: "Prerrogativa Reial",
    definition: "Facultats executives que la Constitució de 1876 atorgava al monarca. El rei tenia el poder de nomenar i cessar lliurement els ministres, sense necessitat de comptar amb la majoria parlamentària; convocar, suspendre i dissoldre les Corts, podent convocar noves eleccions; sancionar i promulgar les lleis, amb capacitat de veto; i comandar les Forces Armades. Aquesta prerrogativa era fonamental per al funcionament del torn pacífic: quan un govern es desgastava, el rei encarregava govern a l'altre partit dinàstic, i el nou president convocava eleccions que inevitablement guanyava. La prerrogativa convertia el monarca en àrbitre del sistema polític. Alfons XIII va fer un ús extensiu d'aquesta facultat, intervenint activament en la política. El seu suport al colp de Primo de Rivera (1923) va demostrar els riscos d'una prerrogativa massa àmplia.",
    category: "Sistema Polític",
    relatedTerms: ["Torn Pacífic", "Constitució de 1876", "Alfons XIII"],
  },
  {
    term: "Sobirania Compartida",
    definition: "Principi constitucional pel qual la sobirania residia conjuntament en el Rei i les Corts, no exclusivament en la nació ni en el monarca. Aquest concepte, inspirat en el liberalisme doctrinari, era la base de la Constitució de 1876. Superava tant la sobirania nacional de la Constitució de 1869 (que negava al rei poder constituent) com la sobirania exclusivament reial del règim isabelí. La fórmula permetia un equilibri entre tradició monàrquica i parlamentarisme: el rei no era un simple cap d'Estat simbòlic, però tampoc un monarca absolut. Els crítics del sistema assenyalaven que la 'sobirania compartida' era una ficció que emmascarava el poder real de l'oligarquia.",
    category: "Sistema Polític",
    relatedTerms: ["Constitució de 1876", "Prerrogativa Reial"],
  },
  {
    term: "Desastre del 98",
    definition: "Nom amb què es coneix la pèrdua de les últimes colònies espanyoles (Cuba, Puerto Rico, Filipines i Guam) després de la guerra amb els Estats Units el 1898. El conflicte va esclatar arran de la insurrecció cubana (1895) i va precipitar-se amb l'explosió del USS Maine a l'Havana (febrer 1898). La guerra va ser breu i desigual: la flota espanyola va ser destruïda a Cavite (Filipines) i Santiago de Cuba en poques hores. El Tractat de París (desembre 1898) va sancionar les pèrdues. Més enllà de les conseqüències territorials i econòmiques, el Desastre va provocar una profunda crisi moral i política: es va qüestionar la capacitat d'Espanya per modernitzar-se, la validesa del sistema de la Restauració i la identitat nacional. El Desastre va donar lloc al moviment regeneracionista i a la reflexió de la Generació del 98.",
    category: "Esdeveniments",
    relatedTerms: ["Regeneracionisme", "Generació del 98", "Guerra de Cuba"],
  },
  {
    term: "Setmana Tràgica",
    definition: "Revolta popular que va tenir lloc a Barcelona entre el 26 de juliol i el 2 d'agost de 1909. Va ser provocada per la crida a files de reservistes per a la Guerra del Marroc. La protesta va derivar en una insurrecció urbana amb barricades, enfrontaments amb l'exèrcit, crema d'esglésies i convents, i vaga general. La revolta va ser durament reprimida: més de 100 morts, centenars de ferits i detinguts, i diverses condemnes a mort, entre elles la del pedagog anarquista Francesc Ferrer i Guàrdia, que va provocar protestes internacionals. La Setmana Tràgica va posar fi al govern de Maura i va evidenciar les tensions socials de la Barcelona industrial: antimilitarisme, anticlericalisme, anarquisme. Va ser un precedent dels conflictes que sacsejaran Catalunya en les dècades següents.",
    category: "Esdeveniments",
    relatedTerms: ["Guerra del Marroc", "Anarquisme", "Ferrer i Guàrdia"],
  },
  {
    term: "Desastre d'Annual",
    definition: "Derrota militar espanyola ocorreguda al juliol-agost de 1921 a la zona d'Annual (Rif marroquí) davant les forces d'Abd el-Krim. El que havia de ser una retirada ordenada es va convertir en una desbandada que va provocar entre 8.000 i 13.000 morts. Es van perdre totes les posicions ocupades des de 1909 i milers de soldats van ser fets presoners en condicions indignes. El general Silvestre, comandant de la zona, va morir durant la retirada. El Desastre va provocar una crisi política profunda: es va obrir l'Expedient Picasso per investigar responsabilitats, que apuntaven cap als alts comandaments i, segons alguns, cap al rei. La discussió de l'expedient a les Corts era imminent quan Primo de Rivera va donar el colp d'estat (setembre 1923), fet que molts van interpretar com un intent de protegir els implicats.",
    category: "Esdeveniments",
    relatedTerms: ["Expedient Picasso", "Abd el-Krim", "Guerra del Rif"],
  },
  {
    term: "Generació del 98",
    definition: "Grup d'escriptors i pensadors units per la seua reflexió sobre Espanya arran del Desastre del 98. Els seus membres principals són Miguel de Unamuno, Pío Baroja, Azorín (José Martínez Ruiz), Ramiro de Maeztu, Antonio Machado i Ramón María del Valle-Inclán. Es caracteritzen per: la preocupació pel 'problema d'Espanya' (causes del retard, identitat nacional); la valoració de Castella com a essència d'Espanya (paisatge, llengua, tradició); el concepte d'intrahistoria (vida quotidiana del poble humil front a la història oficial); el subjectivisme i les preocupacions existencials; i la renovació estètica i lingüística. A diferència del regeneracionisme, més polític i programàtic, la Generació del 98 és fonamentalment literària i filosòfica, més interessada en qüestions d'identitat i existència que en propostes concretes de reforma.",
    category: "Moviments",
    relatedTerms: ["Regeneracionisme", "Desastre del 98", "Unamuno"],
  },
  {
    term: "Juntes Militars de Defensa",
    definition: "Organitzacions corporatives d'oficials de l'exèrcit espanyol creades a partir de 1916 per defensar interessos professionals. Reclamaven millores salarials, ascensos per antiguitat (front als ascensos per mèrits de guerra dels africanistes) i major atenció a l'exèrcit peninsular. El juny de 1917 van presentar un manifest que el govern de Dato va acabar acceptant, legitimant la intervenció de l'exèrcit en la política. Les Juntes representaven el malestar d'un exèrcit sobredimensionat i mal pagat, però també una deriva corporativista i intervencionista que culminaria amb el colp de Primo de Rivera (1923). La seua actuació el 1917 va ser un element clau de la triple crisi d'aquell any (Juntes, Assemblea de Parlamentaris, vaga general).",
    category: "Sistema Polític",
    relatedTerms: ["Crisi de 1917", "Africanisme", "Exèrcit"],
  },
  {
    term: "Assemblea de Parlamentaris",
    definition: "Reunió de diputats i senadors (principalment catalanistes de la Lliga, republicans i socialistes) celebrada a Barcelona el juliol de 1917 sense convocatòria governamental. Liderada per Francesc Cambó, l'Assemblea va exigir la convocatòria de Corts constituents, la reforma de la Constitució i l'autonomia per a les regions. El govern la va considerar sediciosa i va mobilitzar la força pública per dissoldre-la. L'Assemblea va ser un intent de reformar el sistema des de dins, impulsat pel catalanisme polític, però va fracassar per la repressió governamental i la manca de coordinació amb altres moviments (Juntes militars, vaga obrera). Va ser un dels tres elements de la crisi de 1917 que va accelerar la descomposició del sistema de la Restauració.",
    category: "Esdeveniments",
    relatedTerms: ["Crisi de 1917", "Cambó", "Lliga Regionalista"],
  },
  {
    term: "Catalanisme",
    definition: "Moviment polític i cultural que defensava la personalitat diferenciada de Catalunya i reclamava formes d'autogovern. Les seues arrels es troben en la Renaixença cultural (recuperació de la llengua i la literatura catalanes) del segle XIX. Valentí Almirall va publicar 'Lo Catalanisme' (1886), primera formulació del catalanisme polític. Les Bases de Manresa (1892) van ser el primer projecte d'autonomia. El 1901 es va fundar la Lliga Regionalista (Prat de la Riba, Cambó), partit conservador i catalanista que va dominar la política catalana fins als anys vint. Davant la política anticatalana de Primo de Rivera, el catalanisme es va radicalitzar i es va vincular amb el republicanisme (Esquerra Republicana de Catalunya, 1931). El catalanisme va evolucionar des del regionalisme cultural fins al nacionalisme polític, amb un ventall de posicions que anaven de l'autonomisme al separatisme.",
    category: "Moviments",
    relatedTerms: ["Lliga Regionalista", "Mancomunitat", "Cambó", "Prat de la Riba"],
  },
  {
    term: "Mancomunitat de Catalunya",
    definition: "Primera institució d'autogovern català de l'època contemporània, creada el 1914 sota el govern liberal de Canalejas. Agrupava les quatre diputacions provincials catalanes (Barcelona, Girona, Lleida, Tarragona) i tenia competències en obres públiques, cultura, sanitat i beneficència. Va ser presidida per Enric Prat de la Riba (1914-1917) i després per Josep Puig i Cadafalch (1917-1923). La Mancomunitat va impulsar la normalització de la llengua catalana, la creació d'institucions culturals (Institut d'Estudis Catalans, Biblioteca de Catalunya) i un ambiciós programa d'infraestructures (xarxa de telèfons, carreteres). Primo de Rivera la va dissoldre el 1925 com a part de la seua política anticatalana. La Mancomunitat va ser un precedent de la Generalitat republicana i va demostrar la capacitat d'autogovern de Catalunya.",
    category: "Esdeveniments",
    relatedTerms: ["Catalanisme", "Prat de la Riba", "Canalejas"],
  },
  {
    term: "Anarquisme",
    definition: "Moviment polític i social que propugnava l'abolició de l'Estat i de tota forma d'autoritat coercitiva. A Espanya, l'anarquisme va tenir una implantació molt superior a la d'altres països europeus, especialment a Catalunya, Aragó, País Valencià i Andalusia. La Federació Regional Espanyola de l'AIT (1870) va ser la primera organització anarquista. L'anarquisme espanyol presentava diverses tendències: l'anarcocol·lectivisme (propietat col·lectiva dels mitjans de producció), l'anarcocomunisme (distribució segons les necessitats) i l'anarcosindicalisme (acció sindical directa). Rebutjava la participació política i apostava per l'acció directa: vagues, boicots, sabotatge. La CNT (Confederació Nacional del Treball, 1910) va ser la gran central sindical anarquista, amb centenars de milers d'afiliats. L'anarquisme va ser durament reprimit durant la Restauració i la dictadura de Primo de Rivera.",
    category: "Moviments",
    relatedTerms: ["CNT", "Acció Directa", "Sindicalisme"],
  },
  {
    term: "CNT (Confederació Nacional del Treball)",
    definition: "Central sindical anarcosindicalista fundada a Barcelona el 1910. Representava la tendència majoritària del moviment obrer espanyol, especialment a Catalunya, Aragó, País Valencià i Andalusia. Defensava l'acció directa (vagues, boicots) i rebutjava la participació política. La seua implantació va créixer espectacularment durant el 'trienni bolxevic' (1918-1921), superant el milió d'afiliats. La CNT va protagonitzar conflictes històrics com la vaga de la Canadenca (1919), que va aconseguir la jornada de vuit hores. Durant la dictadura de Primo de Rivera va ser il·legalitzada i va operar clandestinament. La FAI (Federació Anarquista Ibèrica, 1927) va radicalitzar la CNT cap a posicions insurrecionistes. La CNT seria un actor clau durant la Segona República i la Guerra Civil.",
    category: "Moviments",
    relatedTerms: ["Anarquisme", "Anarcosindicalisme", "FAI"],
  },
  {
    term: "PSOE (Partit Socialista Obrer Espanyol)",
    definition: "Partit polític fundat a Madrid el 1879 per Pablo Iglesias i altres militants obrers. Inspirat en el socialisme marxista, defensava la lluita de classes, la socialització dels mitjans de producció i la participació electoral per aconseguir reformes. A diferència de l'anarquisme, el PSOE propugnava l'acció política i el gradualisme. El 1888 va fundar la UGT (Unió General de Treballadors), el seu sindicat afiliat. El PSOE tenia major implantació a Madrid, País Basc i Astúries. Pablo Iglesias va ser el primer diputat socialista (1910). Durant la Restauració, el PSOE era minoritari comparat amb l'anarquisme, però va créixer en influència. La seua postura durant la dictadura de Primo de Rivera va ser ambigua: Largo Caballero va col·laborar com a conseller d'Estat, cosa que va provocar divisions internes.",
    category: "Moviments",
    relatedTerms: ["UGT", "Pablo Iglesias", "Socialisme"],
  },
  {
    term: "UGT (Unió General de Treballadors)",
    definition: "Central sindical socialista fundada a Barcelona el 1888, estretament vinculada al PSOE. Defensava el sindicalisme de masses i la negociació col·lectiva, així com la participació política a través del PSOE. Tenia major implantació a Madrid, País Basc, Astúries i zones mineres. A diferència de la CNT, la UGT adoptava una estratègia més moderada i gradualista. Durant la dictadura de Primo de Rivera, la UGT va participar en l'Organització Corporativa Nacional (comitès paritaris), cosa que va provocar crítiques dels sectors més radicals del moviment obrer. Largo Caballero, líder de la UGT, va ser conseller d'Estat del dictador. Aquesta col·laboració tenia l'objectiu de mantenir l'organització legal i aconseguir millores per als treballadors, però va ser molt controvertida.",
    category: "Moviments",
    relatedTerms: ["PSOE", "Socialisme", "Sindicalisme"],
  },
  {
    term: "Nacionalisme Basc (PNV)",
    definition: "Moviment polític que defensava la personalitat diferenciada del País Basc i reclamava formes d'autogovern. Va ser fundat per Sabino Arana el 1895 amb la creació del Partit Nacionalista Basc (Euzko Alderdi Jeltzalea - EAJ/PNV). El nacionalisme d'Arana combinava: la reivindicació de la tradició foral; un catolicisme integrista; l'exaltació de la raça basca (euskalduna) front als immigrants (maketos); la defensa de la llengua euskera; i un inicial independentisme que evolucionaria cap a l'autonomisme. El PNV era inicialment molt conservador i antiindustrialista (veia en la indústria i la immigració una amenaça a l'essència basca), però va anar evolucionant cap a posicions més moderades i interclassistes. Durant la Restauració, el PNV va anar creixent fins a convertir-se en la força hegemònica de la política basca.",
    category: "Moviments",
    relatedTerms: ["Sabino Arana", "Foralisme", "Euskera"],
  },
  {
    term: "Africanisme",
    definition: "Corrent dins l'exèrcit espanyol format pels militars que havien fet carrera a les guerres colonials del Marroc (Rif). Els africanistes defensaven els ascensos per mèrits de guerra (front a l'escalafó per antiguitat dels peninsulars), tenien una mentalitat combativa i autoritària, i es consideraven l'elit de l'exèrcit. Entre els africanistes destacats es trobaven Francisco Franco, José Sanjurjo, Emilio Mola, Manuel Goded i Juan Yagüe, que tindrien paper protagonista en el colp d'estat de 1936 i la Guerra Civil. L'africanisme va entrar en conflicte amb les Juntes de Defensa (1917), que representaven els oficials peninsulars. La victòria al Marroc (desembarcament d'Alhucemas, 1925) va reforçar el prestigi dels africanistes i la seua influència en la política espanyola.",
    category: "Sistema Polític",
    relatedTerms: ["Guerra del Rif", "Annual", "Franco"],
  },
  {
    term: "Pacte de San Sebastián",
    definition: "Acord polític signat el 17 d'agost de 1930 a San Sebastián entre republicans, socialistes i catalanistes per derrocar la monarquia i proclamar la República. Hi van participar representants dels republicans d'esquerres (Azaña, Marcelino Domingo), republicans radicals (Lerroux), republicans galleguistes (Casares Quiroga), catalanistes (Macià, Companys), socialistes (Prieto, Fernando de los Ríos) i d'altres forces. Es va crear un Comitè Revolucionari que prepararia l'acció insurrecional. L'intent de pronunciament de Jaca (desembre 1930) va fracassar, però les eleccions municipals del 12 d'abril de 1931 van donar la victòria a les candidatures republicanes a les grans ciutats. Dos dies després, el 14 d'abril, es proclamava la Segona República.",
    category: "Esdeveniments",
    relatedTerms: ["Segona República", "Azaña", "Jaca"],
  },
  {
    term: "Pistolerisme",
    definition: "Fenomen de violència entre organitzacions obreres i patronals que va assolar Barcelona entre 1919 i 1923. Davant la força del sindicalisme cenetista, la patronal catalana va organitzar grups armats (el Sindicat Lliure, els escamots de Martínez Anido, els pistolerus del Baró de Köening) que assassinaven líders obrers. La CNT va respondre amb atemptats contra patrons, policies i autoritats. El governador civil Martínez Anido i el cap de policia Arlegui van aplicar la 'llei de fugues' (assassinat de detinguts al·legant intent de fuga). Entre les víctimes es troben Salvador Seguí 'el Noi del Sucre', líder de la CNT, i l'advocat laboralista Francesc Layret. El pistolerisme va provocar més de 200 morts i va crear un clima de guerra civil que va contribuir a justificar el colp de Primo de Rivera.",
    category: "Esdeveniments",
    relatedTerms: ["CNT", "Sindicat Lliure", "Martínez Anido"],
  },
  {
    term: "Constitució de 1876",
    definition: "Text constitucional fonamental del sistema de la Restauració, vigent des de 1876 fins al 1931 (amb el parèntesi de la dictadura de Primo de Rivera). Va ser redactada per una comissió de notables sota la direcció d'Alonso Martínez i promoguda per Cánovas del Castillo. Les seues característiques principals eren: sobirania compartida entre el Rei i les Corts; declaració de drets individuals amb garanties que podien ser suspeses; confessionalitat catòlica de l'Estat amb tolerància privada d'altres cultes; prerrogativa reial àmplia; bicameralisme (Congrés i Senat); i flexibilitat constitucional que permetia desenvolupaments tant conservadors com liberals. La Constitució de 1876 és la més longeva de la història constitucional espanyola. La seua flexibilitat va permetre una estabilitat sense precedents, però també va facilitar la manipulació electoral i el caciquisme.",
    category: "Sistema Polític",
    relatedTerms: ["Cánovas del Castillo", "Sobirania Compartida", "Prerrogativa Reial"],
  },
  {
    term: "Oligarquia",
    definition: "Minoria de notables (grans propietaris agraris, alta burgesia industrial i financera, elit política) que monopolitzava el poder polític i econòmic a l'Espanya de la Restauració. Joaquín Costa, en la seua obra 'Oligarquía y Caciquismo' (1901), va diagnosticar que Espanya estava governada no pel poble, sinó per una oligarquia que utilitzava el caciquisme per controlar les eleccions i mantenir el seu domini. L'oligarquia no constituïa un bloc homogeni: hi havia tensions entre terratinents i industrials, entre proteccionistes i lliurecanvistes, entre conservadors i liberals. Però compartien l'interès per mantenir l'ordre social, evitar reformes profundes i controlar l'aparell de l'Estat. El regeneracionisme va criticar l'oligarquia com a responsable del retard d'Espanya.",
    category: "Sistema Polític",
    relatedTerms: ["Caciquisme", "Regeneracionisme", "Joaquín Costa"],
  },
  {
    term: "Govern de Concentració",
    definition: "Tipus de govern format per representants de diverses faccions dels partits dinàstics davant la impossibilitat de formar governs homogenis. A mesura que el sistema del torn es descomposava (especialment a partir de 1917), els governs d'un sol partit es van fer inviables per la fragmentació interna. Els governs de concentració reunien conservadors i liberals de diverses tendències, però eren intrínsecament inestables i de curta durada. Representaven l'agonia del sistema de la Restauració: incapaços d'afrontar els problemes estructurals (qüestió social, Marroc, catalanisme) però tampoc de reformar-se. La successió de governs de concentració efímers entre 1917 i 1923 va crear un clima de desprestigi del parlamentarisme que va facilitar el colp de Primo de Rivera.",
    category: "Sistema Polític",
    relatedTerms: ["Crisi de 1917", "Descomposició del sistema"],
  },
  {
    term: "Directori Militar",
    definition: "Primera fase de la dictadura de Primo de Rivera (setembre 1923 - desembre 1925), durant la qual el govern estava format exclusivament per militars. El Directori va estar presidit per Primo de Rivera i format per vuit generals i un contraalmirall. Les seues mesures principals van ser: suspensió de la Constitució de 1876; dissolució de les Corts; declaració de l'estat de guerra; dissolució d'ajuntaments i diputacions; nomenament de delegats governatius militars; censura de premsa; repressió de la CNT; i inici de les operacions per acabar la guerra del Rif. El Directori Militar pretenia ser una solució transitòria per 'sanejar' el sistema, però es va prolongar i va donar pas al Directori Civil.",
    category: "Dictadura",
    relatedTerms: ["Primo de Rivera", "Directori Civil", "Colp d'Estat"],
  },
  {
    term: "Directori Civil",
    definition: "Segona fase de la dictadura de Primo de Rivera (desembre 1925 - gener 1930), durant la qual es van incorporar ministres civils al govern. Representava l'intent d'institucionalitzar el règim i passar d'una dictadura purament militar a una de caràcter més polític. Ministres destacats van ser José Calvo Sotelo (Hisenda), Eduardo Aunós (Treball) i Rafael Benjumea (Obres Públiques). Durant el Directori Civil es van crear la Unión Patriótica (partit únic del règim) i l'Assemblea Nacional Consultiva (substitut de les Corts). Es va impulsar una política econòmica intervencionista (monopolis estatals, proteccionisme) i un ambiciós programa d'obres públiques. El Directori Civil va fracassar en el seu intent de crear un sistema polític estable i va caure quan Primo de Rivera va perdre el suport de l'exèrcit i el rei.",
    category: "Dictadura",
    relatedTerms: ["Primo de Rivera", "Directori Militar", "Unión Patriótica"],
  },
];

export function GlossariSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [...new Set(glossaryTerms.map((t) => t.category))];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Glossari de Termes
        </h2>
        <p className="mt-2 text-muted-foreground">
          Definicions detallades per a l'examen de selectivitat
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cerca un terme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory("all")}
          >
            Tots ({glossaryTerms.length})
          </Badge>
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredTerms.map((item) => (
          <Card key={item.term} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="font-serif text-xl text-foreground">
                  {item.term}
                </CardTitle>
                <Badge variant="secondary" className="shrink-0">
                  {item.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.definition}
              </p>
              {item.relatedTerms && item.relatedTerms.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-foreground">
                    Termes relacionats:
                  </span>
                  {item.relatedTerms.map((related) => (
                    <Badge
                      key={related}
                      variant="outline"
                      className="cursor-pointer text-xs hover:bg-accent"
                      onClick={() => setSearchTerm(related)}
                    >
                      {related}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No s'han trobat termes amb els criteris de cerca.
          </p>
        </div>
      )}
    </section>
  );
}
