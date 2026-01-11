import { Card, CardContent } from "@/components/ui/card";

interface HistoricalFigureProps {
  name: string;
  role: string;
  years: string;
  imageUrl: string;
  description?: string;
  className?: string;
}

export function HistoricalFigure({ 
  name, 
  role, 
  years, 
  imageUrl, 
  description,
  className = "" 
}: HistoricalFigureProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover object-top transition-transform hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=300&background=1a365d&color=f5f0e6&font-size=0.4`;
            }}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-serif font-bold text-foreground">{name}</h3>
          <p className="text-sm text-accent font-medium">{role}</p>
          <p className="text-xs text-muted-foreground">{years}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Historical figures data for reuse - using reliable image sources
export const historicalFigures = {
  canovas: {
    name: "Antonio Cánovas del Castillo",
    role: "Artífex de la Restauració",
    years: "1828-1897",
    imageUrl: "https://www.congreso.es/docu/imgHistoria/HC_PresidenteCongreso_11.jpg",
    description: "Polític conservador, dissenyador del sistema de la Restauració i el torn pacífic. Assassinat per un anarquista."
  },
  sagasta: {
    name: "Práxedes Mateo Sagasta",
    role: "Líder del Partit Liberal",
    years: "1825-1903",
    imageUrl: "https://www.congreso.es/docu/imgHistoria/HC_PresidenteCongreso_08.jpg",
    description: "Líder liberal, va aprovar el sufragi universal masculí (1890). Artífex de l'alternança amb Cánovas."
  },
  alfonsoXII: {
    name: "Alfons XII",
    role: "Rei d'Espanya",
    years: "1857-1885",
    imageUrl: "https://www.casareal.es/sitios/ListasAux/Galeria/20130422-HISTORIA-REYES-ES/rey_alfonso_xii/alfonso_xii_retrato_1.jpg",
    description: "Primer monarca de la Restauració. El seu breu regnat (1874-1885) va consolidar el sistema canovista."
  },
  alfonsoXIII: {
    name: "Alfons XIII",
    role: "Rei d'Espanya",
    years: "1886-1941",
    imageUrl: "https://www.casareal.es/sitios/ListasAux/Galeria/20130422-HISTORIA-REYES-ES/rey_alfonso_xiii/alfonso_xiii_retrato_1.jpg",
    description: "Fill pòstum d'Alfons XII. Rei intervencionista que va recolzar el colp de Primo de Rivera. Marxà a l'exili el 1931."
  },
  maura: {
    name: "Antonio Maura",
    role: "President del Govern",
    years: "1853-1925",
    imageUrl: "https://www.congreso.es/docu/imgHistoria/HC_PresidenteCongreso_17.jpg",
    description: "Polític conservador que va proposar la 'revolució des de dalt'. Caigut després de la Setmana Tràgica (1909)."
  },
  canalejas: {
    name: "José Canalejas",
    role: "President del Govern",
    years: "1854-1912",
    imageUrl: "https://www.congreso.es/docu/imgHistoria/HC_PresidenteCongreso_19.jpg",
    description: "Reformista liberal, va aprovar la Llei del Candau i les Mancomunitats. Assassinat per un anarquista."
  },
  primoDeRivera: {
    name: "Miguel Primo de Rivera",
    role: "Dictador (1923-1930)",
    years: "1870-1930",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/PrimoRivera-Franzen.jpg",
    description: "General que va donar el colp d'estat de 1923 amb suport d'Alfons XIII. Dimiteix el 1930."
  },
  costa: {
    name: "Joaquín Costa",
    role: "Pensador Regeneracionista",
    years: "1846-1911",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/JoaquinCosta_%28cropped%29.jpg",
    description: "Autor de 'Oligarquía y Caciquismo'. Va proposar 'Escuela y despensa' i un 'cirurgià de ferro'."
  },
  pratDeLaRiba: {
    name: "Enric Prat de la Riba",
    role: "President de la Mancomunitat",
    years: "1870-1917",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Prat_de_la_Riba.jpg",
    description: "Líder de la Lliga Regionalista i autor de 'La Nacionalitat Catalana'. Primer president de la Mancomunitat."
  },
  pabloIglesias: {
    name: "Pablo Iglesias",
    role: "Fundador del PSOE",
    years: "1850-1925",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pablo_Iglesias.jpg",
    description: "Fundador del PSOE (1879) i la UGT (1888). Líder del socialisme espanyol durant dècades."
  },
  martinezCampos: {
    name: "Arsenio Martínez Campos",
    role: "General restaurador",
    years: "1831-1900",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Arsenio_Mart%C3%ADnez-Campos_Ant%C3%B3n.jpg",
    description: "General que va protagonitzar el pronunciament de Sagunt (1874) que va restaurar la monarquia borbònica."
  },
  dato: {
    name: "Eduardo Dato",
    role: "President del Govern",
    years: "1856-1921",
    imageUrl: "https://www.congreso.es/docu/imgHistoria/HC_PresidenteCongreso_20.jpg",
    description: "Polític conservador, va aprovar la Llei de Jurisdiccions. Assassinat per anarquistes el 1921."
  },
};
