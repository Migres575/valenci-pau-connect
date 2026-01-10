import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Sword, BookOpen, Crown, AlertTriangle, Skull, Flag } from "lucide-react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  details: string;
  category: "politic" | "social" | "militar" | "cultural";
  image?: string;
  person?: string;
}

const events: TimelineEvent[] = [
  {
    year: 1874,
    title: "Pronunciament de Sagunt",
    description: "Martínez Campos proclama Alfons XII com a rei, iniciant la Restauració borbònica.",
    details: "El general Arsenio Martínez Campos es pronuncia a Sagunt (29 de desembre) proclamant Alfons XII com a rei d'Espanya. Acaba el Sexenni Democràtic i comença la Restauració, dissenyada per Antonio Cánovas del Castillo.",
    category: "politic",
    person: "Alfonso XII",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/1875-01-08%2C_La_Ilustraci%C3%B3n_Espa%C3%B1ola_y_Americana%2C_Sagunto_%28Valencia%29%2C_Proclamaci%C3%B3n_del_rey_Alfonso_XII_por_la_brigada_Daban%2C_al_mando_del_general_Mart%C3%ADnez_Campos%2C_el_29_de_diciembre_de_1874_%28cropped%29.jpg/1280px-thumbnail.jpg"
  },
  {
    year: 1875,
    title: "Alfons XII entra a Madrid",
    description: "El nou rei arriba a la capital espanyola rebut per multituds.",
    details: "Alfons XII entra triomfalment a Madrid el 14 de gener, consolidant la restauració de la monarquia borbònica després del turbulent Sexenni Democràtic.",
    category: "politic",
    person: "Alfonso XII"
  },
  {
    year: 1876,
    title: "Constitució de 1876",
    description: "S'aprova la Constitució canovista amb sobirania compartida i sufragi censatari.",
    details: "La Constitució més longeva de la història espanyola estableix el marc legal de la Restauració: sobirania compartida Rei-Corts, àmplia prerrogativa reial, catolicisme oficial amb tolerància privada, i flexibilitat per permetre governs liberals i conservadors.",
    category: "politic",
    person: "Cánovas del Castillo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/C%C3%A1novas_%28Kaulak%29.jpg/220px-C%C3%A1novas_%28Kaulak%29.jpg"
  },
  {
    year: 1878,
    title: "Pau de Zanjón",
    description: "Fi de la Guerra dels Deu Anys a Cuba amb promeses de reforma mai complides.",
    details: "El pacte posa fi a la primera guerra independentista cubana, prometent reformes polítiques i administratives que el govern espanyol mai implementarà, sembrant les llavors de futures revoltes.",
    category: "militar"
  },
  {
    year: 1879,
    title: "Fundació del PSOE",
    description: "Pablo Iglesias funda el Partit Socialista Obrer Espanyol a Madrid.",
    details: "En una impremta clandestina de Madrid, Pablo Iglesias funda el primer partit marxista espanyol, que adoptarà una estratègia gradualista d'acció sindical i participació electoral.",
    category: "social"
  },
  {
    year: 1881,
    title: "Primer Govern Liberal",
    description: "Sagasta arriba al poder, iniciant-se el sistema de torn pacífic.",
    details: "Práxedes Mateo Sagasta forma el primer govern liberal de la Restauració, consolidant el sistema de torn pacífic dissenyat per Cánovas. Els dos partits dinàstics s'alternaran en el poder de manera pactada.",
    category: "politic",
    person: "Sagasta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pr%C3%A1xedes_Mateo_Sagasta%2C_de_Jean_Laurent_%28cropped%29.jpg/220px-Pr%C3%A1xedes_Mateo_Sagasta%2C_de_Jean_Laurent_%28cropped%29.jpg"
  },
  {
    year: 1885,
    title: "Mort d'Alfons XII",
    description: "Mor el rei i comença la regència de Maria Cristina de Habsburg.",
    details: "Alfons XII mor de tuberculosi als 27 anys. La seua vídua Maria Cristina de Habsburg assumeix la regència en nom del futur Alfons XIII, que naixerà sis mesos després.",
    category: "politic"
  },
  {
    year: 1885,
    title: "Pacte del Pardo",
    description: "Cánovas i Sagasta acorden el funcionament del torn pacífic.",
    details: "Davant la mort del rei, els dos líders polítics formalitzen el sistema de torn per garantir l'estabilitat durant la regència. Aquest pacte consagra l'alternança pactada i el paper regulador de la Corona.",
    category: "politic"
  },
  {
    year: 1888,
    title: "Fundació de la UGT",
    description: "Es crea la Unió General de Treballadors, sindicat socialista.",
    details: "A Barcelona, coincidint amb l'Exposició Universal, es funda la UGT com a braç sindical del PSOE. Adoptarà una estratègia reformista i de negociació, distanciant-se de l'acció directa anarquista.",
    category: "social"
  },
  {
    year: 1890,
    title: "Sufragi Universal Masculí",
    description: "S'aprova el sufragi universal masculí, encara que manipulat pel caciquisme.",
    details: "Sagasta aprova el sufragi universal masculí, però el sistema caciquil neutralitza la seua capacitat democratitzadora. L'encasellat i el pucherazo continuen determinant els resultats electorals.",
    category: "politic"
  },
  {
    year: 1892,
    title: "Bases de Manresa",
    description: "El catalanisme polític presenta el seu projecte d'autonomia.",
    details: "L'Assemblea de Manresa aprova les Bases per a la Constitució Regional Catalana, primer projecte articulat d'autogovern català. Representa el pas del catalanisme cultural al polític.",
    category: "politic"
  },
  {
    year: 1895,
    title: "Grito de Baire - Inici de la insurrecció cubana",
    description: "Comença la Guerra d'Independència de Cuba amb el Grito de Baire.",
    details: "El 24 de febrer, els independentistes cubans liderats per José Martí, Máximo Gómez i Antonio Maceo reprenen la lluita armada. Martí morirà al maig, però la guerra s'estendrà per tota l'illa.",
    category: "militar"
  },
  {
    year: 1895,
    title: "Fundació del PNB",
    description: "Sabino Arana funda el Partit Nacionalista Basc.",
    details: "Sabino Arana funda el PNB a Bilbao, combinant la defensa de la tradició foral, el catolicisme integrista i un nacionalisme ètnic basat en la puresa de raça i la llengua euskera.",
    category: "politic"
  },
  {
    year: 1897,
    title: "Assassinat de Cánovas",
    description: "Antonio Cánovas del Castillo és assassinat per l'anarquista Angiolillo.",
    details: "L'8 d'agost, l'anarquista italià Michele Angiolillo assassina Cánovas als banys de Santa Àgueda. L'artífex del sistema de la Restauració mor deixant el Partit Conservador sense lideratge clar.",
    category: "politic",
    person: "Cánovas del Castillo"
  },
  {
    year: 1898,
    title: "Explosió del Maine",
    description: "L'enfonsament del cuirassat nord-americà al port de l'Havana precipita la guerra.",
    details: "El 15 de febrer, el USS Maine explota al port de l'Havana. Malgrat que probablement va ser un accident intern, la premsa nord-americana culpa Espanya amb el lema 'Remember the Maine!'",
    category: "militar"
  },
  {
    year: 1898,
    title: "Desastre del 98",
    description: "Pèrdua de Cuba, Puerto Rico i Filipines després de la guerra amb els EUA.",
    details: "Les derrotes navals de Cavite (1 de maig) i Santiago de Cuba (3 de juliol) sellen la pèrdua de l'imperi colonial. El Tractat de París (desembre) oficialitza la cessió de Cuba, Puerto Rico, Filipines i Guam.",
    category: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Destruction_of_Admiral_Cervera%27s_fleet_at_Santiago_de_Cuba.png/300px-Destruction_of_Admiral_Cervera%27s_fleet_at_Santiago_de_Cuba.png"
  },
  {
    year: 1901,
    title: "Fundació de la Lliga Regionalista",
    description: "Es crea el principal partit catalanista, liderat per Prat de la Riba.",
    details: "Enric Prat de la Riba funda la Lliga Regionalista, que esdevindrà la força hegemònica del catalanisme conservador i burgès fins a la Segona República.",
    category: "politic"
  },
  {
    year: 1901,
    title: "Oligarquía y Caciquismo",
    description: "Joaquín Costa publica la seua obra magna del regeneracionisme.",
    details: "Costa denuncia l'oligarquia i el caciquisme com els mals d'Espanya, proposant la famosa fórmula 'Escuela y despensa' i l'arribada d'un 'cirurgià de ferro' que regenere el país.",
    category: "cultural"
  },
  {
    year: 1902,
    title: "Majoria d'Edat d'Alfons XIII",
    description: "Alfons XIII assumeix el poder directe com a rei d'Espanya.",
    details: "El 17 de maig, en complir 16 anys, Alfons XIII jura la Constitució i assumeix personalment el poder. El seu regnat serà molt més intervencionista que la prudent regència de la seua mare.",
    category: "politic",
    person: "Alfonso XIII",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Alfonso_XIII_de_Espa%C3%B1a_by_Kaulak.jpg/220px-Alfonso_XIII_de_Espa%C3%B1a_by_Kaulak.jpg"
  },
  {
    year: 1903,
    title: "Mort de Sagasta",
    description: "Mor l'artífex liberal del torn pacífic.",
    details: "La mort de Sagasta (gener 1903) obre una crisi de lideratge al Partit Liberal similar a la que patia el conservador des de 1897. El torn començarà a funcionar amb dificultats creixents.",
    category: "politic"
  },
  {
    year: 1905,
    title: "Incidents del ¡Cu-Cut!",
    description: "Oficials assalten redaccions de premsa catalanista a Barcelona.",
    details: "El 25 de novembre, oficials de l'exèrcit assalten les redaccions del setmanari ¡Cu-Cut! i del diari La Veu de Catalunya per una caricatura antimilitarista. Precipitarà la Llei de Jurisdiccions.",
    category: "militar"
  },
  {
    year: 1906,
    title: "Llei de Jurisdiccions",
    description: "Les ofenses a l'exèrcit passen a la jurisdicció militar.",
    details: "En lloc de castigar els militars agressors, el govern aprova una llei que sotmet a tribunals militars les ofenses a l'exèrcit. Unirà tot el catalanisme en Solidaritat Catalana.",
    category: "politic"
  },
  {
    year: 1906,
    title: "La Nacionalitat Catalana",
    description: "Prat de la Riba publica el text doctrinal del catalanisme polític.",
    details: "L'obra defineix Catalunya com una nació amb cultura, llengua i caràcter propis, establint el principi que cada nació ha de tenir el seu Estat. Serà referent del catalanisme durant tot el segle XX.",
    category: "cultural"
  },
  {
    year: 1906,
    title: "Solidaritat Catalana",
    description: "Coalició catalanista que guanya les eleccions a Catalunya.",
    details: "Com a resposta a la Llei de Jurisdiccions, totes les forces catalanes (excepte lerrouxistes i republicans federals) s'uneixen en Solidaritat Catalana, que arrassarà a les eleccions de 1907.",
    category: "politic"
  },
  {
    year: 1907,
    title: "Govern d'Antonio Maura",
    description: "El 'llarg govern' de Maura intenta la 'revolució des de dalt'.",
    details: "Maura arriba al poder amb un programa regeneracionista: acabar amb el caciquisme mitjançant la Llei d'Administració Local, política social moderada i descentralització. Governarà fins al 1909.",
    category: "politic",
    person: "Antonio Maura",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Antonio_Maura_Montaner.jpg/220px-Antonio_Maura_Montaner.jpg"
  },
  {
    year: 1909,
    title: "Setmana Tràgica de Barcelona",
    description: "Revolta popular contra la guerra del Marroc, durament reprimida.",
    details: "La mobilització de reservistes per la guerra del Marroc provoca una revolta anticlerical i antimilitarista a Barcelona (26 juliol - 2 agost). La repressió serà brutal: 116 morts, 5 condemnes a mort (incloent Ferrer i Guàrdia). Maura cau.",
    category: "social",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cremant_convents._Setmana_Tr%C3%A0gica%2C_Barcelona%2C_1909.jpg/300px-Cremant_convents._Setmana_Tr%C3%A0gica%2C_Barcelona%2C_1909.jpg"
  },
  {
    year: 1910,
    title: "Fundació de la CNT",
    description: "Es crea la Confederació Nacional del Treball, sindicat anarcosindicalista.",
    details: "A Barcelona, diverses societats obreres funden la CNT, que adoptarà la tàctica de l'acció directa i la vaga general. Es convertirà en el sindicat majoritari a Catalunya, Aragó i Andalusia.",
    category: "social"
  },
  {
    year: 1910,
    title: "Govern de Canalejas",
    description: "El reformisme liberal intenta modernitzar Espanya.",
    details: "José Canalejas forma govern amb un programa reformista: Llei del Candau (limitant congregacions religioses), servei militar obligatori sense redempció, projecte de mancomunitats. Serà assassinat el 1912.",
    category: "politic",
    person: "José Canalejas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jos%C3%A9_Canalejas_1912.jpg/220px-Jos%C3%A9_Canalejas_1912.jpg"
  },
  {
    year: 1912,
    title: "Protectorat del Marroc",
    description: "El Tractat de Fes estableix el protectorat espanyol al nord del Marroc.",
    details: "Espanya aconsegueix el protectorat sobre la zona nord del Marroc (el Rif), territori muntanyós habitat per tribus berbers que mai no acceptaran completament el domini colonial.",
    category: "politic"
  },
  {
    year: 1912,
    title: "Assassinat de Canalejas",
    description: "El president del govern José Canalejas és assassinat per un anarquista.",
    details: "El 12 de novembre, l'anarquista Manuel Pardiñas assassina Canalejas davant una llibreria de Madrid. Mor l'última esperança de reforma efectiva dins el sistema de la Restauració.",
    category: "politic"
  },
  {
    year: 1914,
    title: "Mancomunitat de Catalunya",
    description: "Primera experiència d'autogovern català des del segle XVIII.",
    details: "S'aprova la constitució de la Mancomunitat de Catalunya, que agrupa les quatre diputacions provincials catalanes. Prat de la Riba serà el primer president. Es dissoldrà el 1925.",
    category: "politic"
  },
  {
    year: 1914,
    title: "Primera Guerra Mundial - Neutralitat espanyola",
    description: "Espanya es declara neutral en la Gran Guerra.",
    details: "El govern declara la neutralitat, però la societat es divideix entre aliadòfils (liberals, esquerres) i germanòfils (conservadors, exèrcit). La neutralitat permetrà un boom econòmic per les exportacions.",
    category: "politic"
  },
  {
    year: 1917,
    title: "Crisi de 1917 - Juntes de Defensa",
    description: "Les Juntes Militars de Defensa es rebel·len contra el govern.",
    details: "El juny, les Juntes de Defensa (organitzacions d'oficials de graduació mitjana) presenten un manifest exigint millores. El govern capitula, legitimant la intervenció militar en política.",
    category: "militar"
  },
  {
    year: 1917,
    title: "Assemblea de Parlamentaris",
    description: "Diputats catalanistes, republicans i socialistes exigeixen Corts constituents.",
    details: "El juliol, diputats reunits a Barcelona demanden convocatòria de Corts constituents i autonomia regional. Liderats per Cambó, són dispersats per la força sense aconseguir els seus objectius.",
    category: "politic"
  },
  {
    year: 1917,
    title: "Vaga General Revolucionària",
    description: "UGT i CNT convoquen vaga general per enderrocar el sistema.",
    details: "L'agost, una vaga general revolucionària intenta enderrocar el règim i proclamar la república. Durament reprimida per l'exèrcit (més de 70 morts), fracassa per manca de coordinació amb les altres crisis.",
    category: "social"
  },
  {
    year: 1919,
    title: "Vaga de La Canadenca",
    description: "Espanya aconsegueix la jornada de vuit hores, primera d'Europa.",
    details: "La vaga a Barcelona Traction (La Canadenca) es converteix en vaga general. Després de 44 dies, el govern concedeix la jornada de vuit hores, la primera llei d'aquest tipus a Europa.",
    category: "social"
  },
  {
    year: 1919,
    title: "Inici del Pistolerisme",
    description: "Comença la guerra social a Barcelona entre patrons i sindicats.",
    details: "La patronal catalana organitza grups armats (Sindicat Lliure) que assassinen líders obrers. La CNT respon amb atemptats. Entre 1919 i 1923 hi haurà més de 200 morts en aquesta guerra social.",
    category: "social"
  },
  {
    year: 1921,
    title: "Desastre d'Annual",
    description: "Derrota militar al Marroc amb milers de morts. S'obre l'Expedient Picasso.",
    details: "El 22 de juliol, les forces d'Abd el-Krim ataquen Annual. La retirada es converteix en desfeta: entre 8.000 i 13.000 soldats morts. El general Picasso investiga les responsabilitats, que podrien implicar el rei.",
    category: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Monte_Arruit_calaveras.jpg/300px-Monte_Arruit_calaveras.jpg"
  },
  {
    year: 1921,
    title: "Assassinat d'Eduardo Dato",
    description: "El president del govern és assassinat per anarquistes.",
    details: "El 8 de març, tres anarquistes assassinen el president Dato a Madrid com a revenja pels assassinats de líders obrers a Barcelona. És el tercer president assassinat des de 1897.",
    category: "politic"
  },
  {
    year: 1923,
    title: "Colp de Primo de Rivera",
    description: "Miguel Primo de Rivera dona un colp d'estat amb suport del rei.",
    details: "El 13 de setembre, el Capità General de Catalunya es pronuncia a Barcelona. Alfons XIII, en lloc de defensar la Constitució, encarrega govern al dictador. Comença el Directori Militar.",
    category: "politic",
    person: "Primo de Rivera",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PrimoRivera-Franzen.jpg/220px-PrimoRivera-Franzen.jpg"
  },
  {
    year: 1925,
    title: "Desembarcament d'Alhucemas",
    description: "Victòria militar hispanofranesa que posa fi a la Guerra del Rif.",
    details: "El 8 de setembre, una operació conjunta hispanofrancesa desembarca a la badia d'Alhucemas. La victòria portarà a la rendició d'Abd el-Krim el 1926 i posa fi a la guerra del Marroc.",
    category: "militar"
  },
  {
    year: 1925,
    title: "Directori Civil",
    description: "Primo de Rivera substitueix els militars per ministres civils.",
    details: "El desembre, Primo de Rivera forma un govern civil, intentant institucionalitzar la dictadura. Crea la Unión Patriótica com a partit únic i l'Organització Corporativa Nacional per controlar les relacions laborals.",
    category: "politic"
  },
  {
    year: 1927,
    title: "FAI",
    description: "Es funda la Federació Anarquista Ibèrica.",
    details: "Els sectors més revolucionaris de l'anarquisme funden la FAI a València, que mantindrà la pressió insurreccionalista dins la CNT i s'oposarà a qualsevol col·laboració amb el poder.",
    category: "social"
  },
  {
    year: 1929,
    title: "Exposicions Internacionals",
    description: "Barcelona i Sevilla celebren exposicions que mostren l'Espanya de la Dictadura.",
    details: "L'Exposició Internacional de Barcelona i la Iberoamericana de Sevilla són els grans aparadors del règim. L'endeutament per finançar-les agreuja la crisi econòmica que s'acosta.",
    category: "cultural"
  },
  {
    year: 1930,
    title: "Dimissió de Primo de Rivera",
    description: "Primo de Rivera dimiteix. Comença la 'Dictablanda' de Berenguer.",
    details: "El 28 de gener, sense suports, Primo de Rivera presenta la dimissió al rei i marxa a l'exili. El general Berenguer intenta una transició ordenada cap a la legalitat, però el sistema ja és irrecuperable.",
    category: "politic"
  },
  {
    year: 1930,
    title: "Pacte de San Sebastián",
    description: "Republicans, socialistes i catalanistes acorden acabar amb la monarquia.",
    details: "El 17 d'agost, l'oposició republicana signa un pacte per derrocar la monarquia. S'acorda formar un govern provisional i convocar Corts constituents. Els socialistes s'hi afegiran a l'octubre.",
    category: "politic"
  },
  {
    year: 1930,
    title: "Sublevació de Jaca",
    description: "Intent de pronunciament republicà, durament reprimit.",
    details: "El 12 de desembre, els capitans Fermín Galán i Ángel García Hernández es pronuncien a Jaca. El fracàs i el seu afusellament els converteixen en màrtirs de la causa republicana.",
    category: "militar"
  },
  {
    year: 1931,
    title: "Eleccions Municipals del 12 d'abril",
    description: "La victòria republicana a les grans ciutats precipita la caiguda de la monarquia.",
    details: "Les eleccions municipals es converteixen en plebiscit sobre la monarquia. Els republicans guanyen a les capitals de província. El resultat demostra que la monarquia ha perdut el suport urbà.",
    category: "politic"
  },
  {
    year: 1931,
    title: "Proclamació de la Segona República",
    description: "El 14 d'abril es proclama la Segona República Espanyola.",
    details: "Davant els resultats electorals, Alfons XIII marxa a l'exili sense abdicar. El 14 d'abril es proclama la República a les principals ciutats. Comença un nou període de la història espanyola.",
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Proclamaci%C3%B3n_de_la_II_Rep%C3%BAblica_%28Puerta_del_Sol%2C_Madrid%29.jpg/300px-Proclamaci%C3%B3n_de_la_II_Rep%C3%BAblica_%28Puerta_del_Sol%2C_Madrid%29.jpg"
  },
];

const categories = {
  politic: { label: "Polític", color: "bg-primary", icon: Crown },
  social: { label: "Social", color: "bg-accent", icon: Users },
  militar: { label: "Militar", color: "bg-destructive", icon: Sword },
  cultural: { label: "Cultural", color: "bg-secondary", icon: BookOpen },
};

const decades = [
  { start: 1874, end: 1879, label: "1874-1879" },
  { start: 1880, end: 1889, label: "1880-1889" },
  { start: 1890, end: 1899, label: "1890-1899" },
  { start: 1900, end: 1909, label: "1900-1909" },
  { start: 1910, end: 1919, label: "1910-1919" },
  { start: 1920, end: 1931, label: "1920-1931" },
];

export function CronologiaSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedDecade, setSelectedDecade] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents = events
    .filter((e) => filter === "all" || e.category === filter)
    .filter((e) => {
      if (selectedDecade === "all") return true;
      const decade = decades.find((d) => d.label === selectedDecade);
      return decade && e.year >= decade.start && e.year <= decade.end;
    });

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          Cronologia Interactiva
        </h2>
        <p className="mt-2 text-muted-foreground">
          Eix cronològic dels principals esdeveniments (1874-1931)
        </p>
      </div>

      {/* Decade Navigation */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex justify-center gap-1 min-w-max pb-2">
          <Button
            variant={selectedDecade === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDecade("all")}
          >
            Tot el període
          </Button>
          {decades.map((decade) => (
            <Button
              key={decade.label}
              variant={selectedDecade === decade.label ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDecade(decade.label)}
            >
              {decade.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
          className="gap-2"
        >
          <Calendar className="h-4 w-4" />
          Tots
        </Button>
        {Object.entries(categories).map(([key, { label, icon: Icon }]) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(key)}
            className="gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>

      {/* Timeline Visual */}
      <div className="relative mb-8">
        {/* Progress bar showing period */}
        <div className="h-2 w-full rounded-full bg-muted mb-8">
          <div className="h-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary" style={{ width: '100%' }} />
        </div>
        
        {/* Year markers */}
        <div className="flex justify-between text-xs font-medium text-muted-foreground mb-4">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">1874</span>
          <span className="bg-muted px-2 py-1 rounded">1890</span>
          <span className="bg-muted px-2 py-1 rounded">1902</span>
          <span className="bg-muted px-2 py-1 rounded">1917</span>
          <span className="bg-muted px-2 py-1 rounded">1923</span>
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">1931</span>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => {
          const categoryInfo = categories[event.category];
          const Icon = categoryInfo.icon;

          return (
            <Card
              key={`${event.year}-${event.title}`}
              className={`cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] ${
                selectedEvent === event ? "ring-2 ring-primary shadow-lg" : ""
              }`}
              onClick={() => setSelectedEvent(selectedEvent === event ? null : event)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {event.image ? (
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={event.image} 
                        alt={event.person || event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${categoryInfo.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="font-mono">
                        {event.year}
                      </Badge>
                      <Badge className={`${categoryInfo.color} text-primary-foreground text-xs`}>
                        {categoryInfo.label}
                      </Badge>
                    </div>
                    <h3 className="font-serif font-semibold text-foreground line-clamp-2">
                      {event.title}
                    </h3>
                    {event.person && (
                      <p className="text-xs text-muted-foreground mt-1">
                        👤 {event.person}
                      </p>
                    )}
                  </div>
                </div>
                
                {selectedEvent === event && (
                  <div className="mt-4 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.description}
                    </p>
                    <p className="text-sm text-foreground">
                      {event.details}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No hi ha esdeveniments per als filtres seleccionats.</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{events.filter(e => e.category === 'politic').length}</div>
            <div className="text-sm text-muted-foreground">Esdeveniments polítics</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">{events.filter(e => e.category === 'social').length}</div>
            <div className="text-sm text-muted-foreground">Esdeveniments socials</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-destructive">{events.filter(e => e.category === 'militar').length}</div>
            <div className="text-sm text-muted-foreground">Esdeveniments militars</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-secondary-foreground">{events.filter(e => e.category === 'cultural').length}</div>
            <div className="text-sm text-muted-foreground">Esdeveniments culturals</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
