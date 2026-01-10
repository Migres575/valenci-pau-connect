import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Sword, BookOpen, Crown } from "lucide-react";

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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Alfonso_XII_de_Espa%C3%B1a%2C_by_Gonz%C3%A1lez.jpg/220px-Alfonso_XII_de_Espa%C3%B1a%2C_by_Gonz%C3%A1lez.jpg"
  },
  {
    year: 1875,
    title: "Alfons XII entra a Madrid",
    description: "El nou rei arriba a la capital espanyola rebut per multituds.",
    details: "Alfons XII entra triomfalment a Madrid el 14 de gener, consolidant la restauració de la monarquia borbònica després del turbulent Sexenni Democràtic.",
    category: "politic",
    person: "Alfonso XII",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Alfonso_XII_de_Espa%C3%B1a%2C_by_Gonz%C3%A1lez.jpg/220px-Alfonso_XII_de_Espa%C3%B1a%2C_by_Gonz%C3%A1lez.jpg"
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
    category: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Arsenio_Mart%C3%ADnez_Campos.jpg/220px-Arsenio_Mart%C3%ADnez_Campos.jpg"
  },
  {
    year: 1879,
    title: "Fundació del PSOE",
    description: "Pablo Iglesias funda el Partit Socialista Obrer Espanyol a Madrid.",
    details: "En una impremta clandestina de Madrid, Pablo Iglesias funda el primer partit marxista espanyol, que adoptarà una estratègia gradualista d'acció sindical i participació electoral.",
    category: "social",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pablo_Iglesias_Posse.jpg/220px-Pablo_Iglesias_Posse.jpg"
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
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mar%C3%ADa_Cristina_de_Habsburgo-Lorena%2C_reina_regente_de_Espa%C3%B1a.jpg/220px-Mar%C3%ADa_Cristina_de_Habsburgo-Lorena%2C_reina_regente_de_Espa%C3%B1a.jpg"
  },
  {
    year: 1885,
    title: "Pacte del Pardo",
    description: "Cánovas i Sagasta acorden el funcionament del torn pacífic.",
    details: "Davant la mort del rei, els dos líders polítics formalitzen el sistema de torn per garantir l'estabilitat durant la regència. Aquest pacte consagra l'alternança pactada i el paper regulador de la Corona.",
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Palacio_Real_de_El_Pardo_%28cropped%29.jpg/300px-Palacio_Real_de_El_Pardo_%28cropped%29.jpg"
  },
  {
    year: 1888,
    title: "Fundació de la UGT",
    description: "Es crea la Unió General de Treballadors, sindicat socialista.",
    details: "A Barcelona, coincidint amb l'Exposició Universal, es funda la UGT com a braç sindical del PSOE. Adoptarà una estratègia reformista i de negociació, distanciant-se de l'acció directa anarquista.",
    category: "social",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Exposici%C3%B3n_Universal_de_Barcelona_1888_-_Arco_de_Triunfo.jpg/300px-Exposici%C3%B3n_Universal_de_Barcelona_1888_-_Arco_de_Triunfo.jpg"
  },
  {
    year: 1890,
    title: "Sufragi Universal Masculí",
    description: "S'aprova el sufragi universal masculí, encara que manipulat pel caciquisme.",
    details: "Sagasta aprova el sufragi universal masculí, però el sistema caciquil neutralitza la seua capacitat democratitzadora. L'encasellat i el pucherazo continuen determinant els resultats electorals.",
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Congreso_de_los_Diputados_%28Espa%C3%B1a%29_06.jpg/300px-Congreso_de_los_Diputados_%28Espa%C3%B1a%29_06.jpg"
  },
  {
    year: 1892,
    title: "Bases de Manresa",
    description: "El catalanisme polític presenta el seu projecte d'autonomia.",
    details: "L'Assemblea de Manresa aprova les Bases per a la Constitució Regional Catalana, primer projecte articulat d'autogovern català. Representa el pas del catalanisme cultural al polític.",
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bases_de_Manresa.jpg/220px-Bases_de_Manresa.jpg"
  },
  {
    year: 1895,
    title: "Grito de Baire - Inici de la insurrecció cubana",
    description: "Comença la Guerra d'Independència de Cuba amb el Grito de Baire.",
    details: "El 24 de febrer, els independentistes cubans liderats per José Martí, Máximo Gómez i Antonio Maceo reprenen la lluita armada. Martí morirà al maig, però la guerra s'estendrà per tota l'illa.",
    category: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jose_Marti_portrait.jpg/220px-Jose_Marti_portrait.jpg"
  },
  {
    year: 1895,
    title: "Fundació del PNB",
    description: "Sabino Arana funda el Partit Nacionalista Basc.",
    details: "Sabino Arana funda el PNB a Bilbao, combinant la defense de la tradició foral, el catolicisme integrista i un nacionalisme ètnic basat en la puresa de raça i la llengua euskera.",
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sabino_Arana.jpg/220px-Sabino_Arana.jpg"
  },
  {
    year: 1897,
    title: "Assassinat de Cánovas",
    description: "Antonio Cánovas del Castillo és assassinat per l'anarquista Angiolillo.",
    details: "L'8 d'agost, l'anarquista italià Michele Angiolillo assassina Cánovas als banys de Santa Àgueda. L'artífex del sistema de la Restauració mor deixant el Partit Conservador sense lideratge clar.",
    category: "politic",
    person: "Cánovas del Castillo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/C%C3%A1novas_%28Kaulak%29.jpg/220px-C%C3%A1novas_%28Kaulak%29.jpg"
  },
  {
    year: 1898,
    title: "Explosió del Maine",
    description: "L'enfonsament del cuirassat nord-americà al port de l'Havana precipita la guerra.",
    details: "El 15 de febrer, el USS Maine explota al port de l'Havana. Malgrat que probablement va ser un accident intern, la premsa nord-americana culpa Espanya amb el lema 'Remember the Maine!'",
    category: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/USS_Maine_h61015.jpg/300px-USS_Maine_h61015.jpg"
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
    category: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Prat_de_la_Riba.jpg/220px-Prat_de_la_Riba.jpg"
  },
  {
    year: 1901,
    title: "Oligarquía y Caciquismo",
    description: "Joaquín Costa publica la seua obra magna del regeneracionisme.",
    details: "Costa denuncia l'oligarquia i el caciquisme com els mals d'Espanya, proposant la famosa fórmula 'Escuela y despensa' i l'arribada d'un 'cirurgià de ferro' que regenere el país.",
    category: "cultural",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Joaqu%C3%ADn_Costa%2C_de_Compay.jpg/220px-Joaqu%C3%ADn_Costa%2C_de_Compay.jpg"
  },
  {
    year: 1902,
    title: "Majoria d'Edat d'Alfons XIII",
    description: "Alfons XIII assumeix el poder directe com a rei d'Espanya.",
    details: "El 17 de maig, en complir 16 anys, Alfons XIII jura la Constitució i assumeix personalment el poder. El seu regnat serà molt més intervencionista que la prudent regència de la seua mare.",
    category: "politic",
    person: "Alfonso XIII",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Alfonso_XIII_de_Espa%C3%B1a_by_Kaulak.jpg/220px-Alfonso_XIII_de_Espa%C3%B1a_by_Kaulak.jpg"
  }
];const categories = {
  politic: { label: "Polític", color: "bg-blue-600", icon: Crown },
  social: { label: "Social", color: "bg-orange-500", icon: Users },
  militar: { label: "Militar", color: "bg-red-700", icon: Sword },
  cultural: { label: "Cultural", color: "bg-emerald-600", icon: BookOpen },
};

export function CronologiaSection() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 font-serif text-primary">Cronologia Restauració i Dictadura</h2>
        <p className="text-muted-foreground italic text-lg">Explora els fites clau de la història d'Espanya (1874-1931)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => {
          const cat = categories[event.category];
          const Icon = cat.icon;
          return (
            <Card 
              key={`${event.year}-${event.title}`}
              className={`overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.03] border-l-4 ${selectedEvent === event ? "ring-2 ring-primary" : ""}`}
              style={{ borderLeftColor: 'currentColor' }}
              onClick={() => setSelectedEvent(selectedEvent === event ? null : event)}
            >
              <div className={`h-2 ${cat.color}`} />
              <CardContent className="p-5">
                <div className="flex gap-4 items-start">
                  {event.image && (
                    <img src={event.image} className="w-20 h-20 object-cover rounded-lg shadow-md border border-muted" alt={event.title} />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-black text-2xl text-primary/80">{event.year}</span>
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight mt-1">{event.title}</h3>
                    <Badge variant="secondary" className="mt-2 text-[10px] uppercase font-bold tracking-wider">
                      {cat.label}
                    </Badge>
                  </div>
                </div>
                
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  {event.description}
                </p>

                {selectedEvent === event && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-md border-t border-primary/20 animate-in fade-in slide-in-from-top-2">
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      {event.details}
                    </p>
                    {event.person && (
                      <p className="mt-2 text-[10px] font-bold text-primary uppercase">
                        Figura clau: {event.person}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
