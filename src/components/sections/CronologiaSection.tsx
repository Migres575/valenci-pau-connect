import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Sword, BookOpen, Crown, Landmark } from "lucide-react";

const events = [
  {
    year: 1874,
    title: "Pronunciament de Sagunt",
    cat: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mart%C3%ADnez_Campos_en_Sagunto.jpg/640px-Mart%C3%ADnez_Campos_en_Sagunto.jpg",
    desc: "El general Martínez Campos proclama Alfons XII com a rei, posant fi al Sexenni Democràtic i iniciant la Restauració borbònica."
  },
  {
    year: 1876,
    title: "Constitució de 1876",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Constituci%C3%B3n_Espa%C3%B1ola_1876.jpg/640px-Constituci%C3%B3n_Espa%C3%B1ola_1876.jpg",
    desc: "Text fonamental de la Restauració: sobirania compartida entre el Rei i les Corts, i flexibilitat per permetre el torn de partits."
  },
  {
    year: 1885,
    title: "Pacte del Pardo",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sagasta-Canovas-1885.jpg/640px-Sagasta-Canovas-1885.jpg",
    desc: "Acord entre Cánovas i Sagasta per donar suport a la regència de Maria Cristina i garantir la continuïtat del sistema bipartidista."
  },
  {
    year: 1892,
    title: "Bases de Manresa",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bases_de_Manresa_p%C3%A0gina_1.jpg/640px-Bases_de_Manresa_p%C3%A0gina_1.jpg",
    desc: "Primer document del catalanisme polític organitzat, que demanava el restabliment de les institucions catalanes i l'oficialitat de la llengua."
  },
  {
    year: 1898,
    title: "El Desastre del 98",
    cat: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sinking_of_the_Maine.jpg/640px-Sinking_of_the_Maine.jpg",
    desc: "Pèrdua de Cuba, Puerto Rico i Filipines. Provoca una profunda crisi d'identitat nacional i l'aparició del Regeneracionisme."
  },
  {
    year: 1902,
    title: "Regnat d'Alfons XIII",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alfonso_XIII_en_1902.jpg/640px-Alfonso_XIII_en_1902.jpg",
    desc: "Alfons XIII arriba a la majoria d'edat i assumeix el tron. Comença una etapa de reformes i inestabilitat política."
  },
  {
    year: 1909,
    title: "Setmana Tràgica",
    cat: "social",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Semana_Tragica_Barcelona_1909.jpg/640px-Semana_Tragica_Barcelona_1909.jpg",
    desc: "Revolta popular a Barcelona contra les lleves per a la Guerra del Marroc. Acaba amb una dura repressió i l'execució de Ferrer i Guàrdia."
  },
  {
    year: 1914,
    title: "La Mancomunitat",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Diputats_Mancomunitat_Catalunya_1914.jpg/640px-Diputats_Mancomunitat_Catalunya_1914.jpg",
    desc: "Unió de les quatre diputacions catalanes sota la presidència d'Enric Prat de la Riba. Gran impuls a les infraestructures i la cultura."
  },
  {
    year: 1917,
    title: "Crisi de 1917",
    cat: "social",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Huelga_General_Madrid_1917.jpg/640px-Huelga_General_Madrid_1917.jpg",
    desc: "Triple amenaça al sistema: Juntes de Defensa (militars), Assemblea de Parlamentaris (política) i Vaga General (social)."
  },
  {
    year: 1921,
    title: "Desastre d'Annual",
    cat: "militar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Annual_desastre.jpg/640px-Annual_desastre.jpg",
    desc: "Derrota massiva davant les tribus del Rif al Marroc. Provoca un escàndol polític (Expedient Picasso) que sacseja la monarquia."
  },
  {
    year: 1923,
    title: "Dictadura de Primo de Rivera",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Miguel_Primo_de_Rivera.jpg/640px-Miguel_Primo_de_Rivera.jpg",
    desc: "Cop d'estat militar amb el vistiplau del Rei per 'posar ordre' davant la crisi social i el fracàs del sistema parlamentari."
  },
  {
    year: 1930,
    title: "Pacte de Sant Sebastià",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Reuni%C3%B3n_Pacto_San_Sebasti%C3%A1n.jpg/640px-Reuni%C3%B3n_Pacto_San_Sebasti%C3%A1n.jpg",
    desc: "Reunió de forces republicanes, socialistes i nacionalistes per acordar la fi de la monarquia i la proclamació de la República."
  },
  {
    year: 1931,
    title: "Proclamació de la II República",
    cat: "politic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Proclamaci%C3%B3n_de_la_Rep%C3%BAblica_en_Madrid.jpg/640px-Proclamaci%C3%B3n_de_la_Rep%C3%BAblica_en_Madrid.jpg",
    desc: "Després de les eleccions municipals, el poble surt al carrer, el Rei marxa a l'exili i s'inicia una nova etapa democràtica."
  }
];

const icons: any = { politic: Crown, social: Users, militar: Sword, regional: Landmark };
const colors: any = { politic: "border-blue-500", social: "border-red-500", militar: "border-slate-700", regional: "border-amber-500" };

export function CronologiaSection() {
  return (
    <section className="py-16 px-4 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary font-bold">HISTÒRIA PAU</Badge>
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Cronologia Interactiva</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">De la Restauració a la Segona República (1874 — 1931)</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((e, i) => {
            const Icon = icons[e.cat] || BookOpen;
            const borderColor = colors[e.cat] || "border-primary";
            
            return (
              <Card key={i} className={`overflow-hidden border-none border-l-8 ${borderColor} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="h-64 overflow-hidden relative bg-slate-200">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary text-white text-xl font-black px-4 py-2 shadow-lg">{e.year}</Badge>
                  </div>
                  {/* ReferrerPolicy evita que Wikipedia ens bloquege la imatge */}
                  <img 
                    src={e.image} 
                    alt={e.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                <CardContent className="p-8 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{e.cat}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{e.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{e.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
