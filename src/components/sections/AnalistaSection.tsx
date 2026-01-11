import React, { useState } from "react";

// --- DADES DE LES 12 FONTS AMB ESTRUCTURA DE RESPOSTA PAU ---
const sources = [
  {
    id: 1, year: 1874, title: "Manifest de Sandhurst", cat: "Sistema Canovista",
    text: "Por virtud de la espontánea y solemne abdicación de mi augusta madre... soy el único que representa el derecho monárquico en España. Ni de la española ni de las demás monarquías europeas puede esperarse hoy que sean absolutistas; la nuestra debe ser liberal.",
    guia: {
      id: "Font primària, text polític. Redactat per Cánovas i signat per Alfons XII (desembre 1874).",
      analisi: "Idees clau: Legitimisme borbònic, monarquia com a única solució d'ordre, caràcter liberal i catòlic.",
      context: "Final del Sexenni Democràtic. Cánovas prepara el retorn dels Borbons per via civil i política.",
      valoracio: "Document fundacional. Estableix la base de la Restauració: ordre social i monarquia constitucional."
    }
  },
  {
    id: 2, year: 1876, title: "Constitució de 1876", cat: "Sistema Canovista",
    text: "Art. 18. La potestad de hacer las leyes reside en las Cortes con el Rey. Art. 11. La religión Católica es la del Estado. Art. 19. Les Corts són bicamerals (Senat i Congrés).",
    guia: {
      id: "Font primària, text jurídic. És la Constitució de la Restauració borbònica.",
      analisi: "Sobirania compartida (Rei/Corts), confessionalitat de l'Estat, declaració de drets limitable per llei.",
      context: "Cánovas dissenya un text 'elàstic' que permeti governar a conservadors i liberals (torn pacífic).",
      valoracio: "Peça clau de l'estabilitat canovista. Va durar fins al 1931 (tret del parèntesi de Primo de Rivera)."
    }
  },
  {
    id: 3, year: 1892, title: "Bases de Manresa", cat: "Nacionalisme",
    text: "Base 3a. La llengua catalana serà la única que, ab caràcter oficial, podrà usar-se á Catalunya. Base 7a. Del Poder legislatiu regional s'encarregaran les Corts catalanes.",
    guia: {
      id: "Font primària, document polític aprovat per la Unió Catalanista (1892).",
      analisi: "Reivindica la sobirania de Catalunya, corts pròpies, oficialitat del català i sistema fiscal propi.",
      context: "Transició del catalanisme cultural (Renaixença) al projecte polític davant el centralisme estatal.",
      valoracio: "Document fundacional del catalanisme. Tot i el seu to tradicionalista, fixa les demandes històriques."
    }
  },
  {
    id: 4, year: 1898, title: "Joaquín Costa: Oligarquía y Caciquismo", cat: "Oposició",
    text: "No es una forma de gobierno; es una enfermedad social. Los oligarcas y los caciques forman una red que cubre todo el país. Hay que europeizar España con escuela y despensa.",
    guia: {
      id: "Font primària, assaig polític. Joaquín Costa és el principal intel·lectual del Regeneracionisme.",
      analisi: "Defineix el sistema com una farsa on una minoria (oligarquia) controla el país via cacics locals.",
      context: "Post-desastre del 98. Xoc nacional que qüestiona la corrupció i el retard d'Espanya.",
      valoracio: "L'anàlisi més influent sobre el fracàs del sistema canovista. Inspira els intents de reforma posteriors."
    }
  },
  {
    id: 5, year: 1906, title: "Prat de la Riba: La Nacionalitat Catalana", cat: "Nacionalisme",
    text: "Catalunya és una nació. La nacionalitat és una unitat de cultura, llengua i història. L'Estat no és sinó l'organització política de la Nació.",
    guia: {
      id: "Font primària, assaig doctrinal d'Enric Prat de la Riba (Lliga Regionalista).",
      analisi: "Distingeix Nació (fet cultural) d'Estat (fet polític). Reclama l'autogovern per a Catalunya.",
      context: "Creixement del nacionalisme català després del tancament de caixes i la Llei de Jurisdiccions.",
      valoracio: "Base teòrica del catalanisme conservador que culminarà en la Mancomunitat (1914)."
    }
  },
  {
    id: 6, year: 1906, title: "Lerroux: Jóvenes Bárbaros", cat: "Oposició",
    text: "Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente... destruid sus templos, acabad con sus dioses. No os detengáis ante nada.",
    guia: {
      id: "Font primària, discurs radical d'Alejandro Lerroux, líder del republicanisme radical.",
      analisi: "Retòrica violenta, anticlerical i populista per mobilitzar l'obrerisme contra l'ordre establert.",
      context: "Tensió social a Barcelona i competència entre el nacionalisme burgès i el republicanisme obrer.",
      valoracio: "Mostra el radicalisme que portarà a la Setmana Tràgica (1909) i la fractura de la societat."
    }
  },
  {
    id: 7, year: 1907, title: "El Pucherazo (Caricatura)", cat: "Sistema Canovista",
    text: "Caricatura de l'època on es veu la manipulació física de les urnes durant el recompte.",
    guia: {
      id: "Font primària iconogràfica. Denúncia del frau electoral sistemàtic.",
      analisi: "Mostra el mètode del 'pucherazo' per assegurar la victòria del candidat pactat (encasellat).",
      context: "El torn pacífic depenia de la manipulació total de les eleccions per part dels cacics i el Govern.",
      valoracio: "Símbol de la manca de democràcia i la desconnexió entre l'Espanya real i l'oficial."
    }
  },
  {
    id: 8, year: 1909, title: "Manifest de la Solidaritat Obrera", cat: "Oposició",
    text: "Considerant que la guerra de Marroc és un crim... el proletariat ha de respondre amb la vaga general per aturar aquest atropellament.",
    guia: {
      id: "Font primària, manifest sindical de la Solidaritat Obrera (pre-CNT).",
      analisi: "Oposició a la lleva de reservistes per a la guerra del Marroc i crida a la vaga general.",
      context: "Inici de la Setmana Tràgica a Barcelona. Descontentament pel sistema de quotes i el militarisme.",
      valoracio: "Marca el divorci definitiu entre l'Estat i les masses obreres catalanes."
    }
  },
  {
    id: 9, year: 1917, title: "Manifest de la Vaga General", cat: "Oposició",
    text: "El sistema está agotado. Pedimos un gobierno provisional, elecciones sinceras y una asamblea constituyente.",
    guia: {
      id: "Font primària, manifest conjunt UGT-CNT (agost 1917).",
      analisi: "Demanda de democratització real i solució a la crisi econòmica post-Guerra Mundial.",
      context: "Triple crisi de 1917: Militar (Juntes), Política (Assemblea) i Social (Vaga).",
      valoracio: "Demostra que el sistema canovista ja no pot mantenir l'estabilitat social i política."
    }
  },
  {
    id: 10, year: 1923, title: "Manifest de Primo de Rivera", cat: "Dictadura",
    text: "Ha llegado el momento de libertar a la Patria de los profesionales de la política... de los que nos ofrecen el cuadro de desdichas que empezaron el año 98.",
    guia: {
      id: "Font primària, proclama del cop d'Estat del 13 de setembre de 1923.",
      analisi: "Justificació del cop: ordre, unitat nacional i fi de la corrupció política utilitzant retòrica militar.",
      context: "Crisi del parlamentarisme, desastre d'Annual al Marroc i forta conflictivitat social.",
      valoracio: "Fi de la Constitució de 1876 i inici d'un règim autoritari amb suport reial."
    }
  },
  {
    id: 11, year: 1924, title: "Largo Caballero i els Comitès Paritaris", cat: "Dictadura",
    text: "Aprovecharemos las circunstancias para defender a la clase trabajadora... si la UGT hubiese adoptado resistencia, habría sido aplastada.",
    guia: {
      id: "Font primària, text del líder socialista Largo Caballero.",
      analisi: "Pragmatisme: la UGT col·labora amb la Dictadura per sobreviure i obtenir millores laborals.",
      context: "Política corporativista de Primo de Rivera que buscava integrar el socialisme moderat.",
      valoracio: "Mostra la fractura de l'esquerra: el socialisme col·labora mentre l'anarquisme és reprimit."
    }
  },
  {
    id: 12, year: 1930, title: "Pacte de Sant Sebastià", cat: "Dictadura",
    text: "Els representants de les forces republicanes acorden la creació d'un Comitè Revolucionari per a la instauració de la República.",
    guia: {
      id: "Font primària, document polític d'unificació de l'oposició (agost 1930).",
      analisi: "Acord per enderrocar la monarquia i reconèixer el dret a l'autonomia de Catalunya.",
      context: "Fi de la Dictadura (Dictablanda). Desprestigi d'Alfons XIII per la seva unió amb el dictador.",
      valoracio: "Document clau que prepara el camí cap a la proclamació de la Segona República."
    }
  }
];

export default function AnalistaPAU() {
  const [active, setActive] = useState(sources[0]);
  const [showRes, setShowRes] = useState(false);

  // Estils inline per evitar fitxers externs i errors de build
  const styles = {
    container: { maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', borderRadius: '12px' },
    header: { backgroundColor: '#1a365d', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' as 'center' },
    grid: { display: 'grid', gridTemplateColumns: '250px 1fr', gap: '20px' },
    list: { display: 'flex', flexDirection: 'column' as 'column', gap: '10px' },
    btn: { padding: '12px', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', textAlign: 'left' as 'left', backgroundColor: 'white' },
    btnActive: { backgroundColor: '#3182ce', color: 'white', borderColor: '#3182ce' },
    content: { backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    textBlock: { backgroundColor: '#f0f4f8', padding: '20px', borderLeft: '5px solid #1a365d', fontStyle: 'italic', marginBottom: '20px', fontSize: '18px' },
    resBtn: { width: '100%', padding: '15px', backgroundColor: '#2d3748', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    resBox: { marginTop: '20px', padding: '20px', backgroundColor: '#ebf8ff', border: '1px solid #bee3f8', borderRadius: '6px' },
    label: { fontWeight: 'bold', color: '#2b6cb0', textTransform: 'uppercase' as 'uppercase', fontSize: '12px', display: 'block', marginBottom: '5px' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>ENTRENADOR PAU: 12 FONTS CLAU</h1>
        <p style={{ opacity: 0.8 }}>Història d'Espanya (1874 - 1930)</p>
      </header>

      <div style={styles.grid}>
        <aside style={styles.list}>
          {sources.map(s => (
            <button 
              key={s.id} 
              onClick={() => { setActive(s); setShowRes(false); }}
              style={{ ...styles.btn, ...(active.id === s.id ? styles.btnActive : {}) }}
            >
              <div style={{ fontWeight: 'bold' }}>{s.year} - {s.title}</div>
              <div style={{ fontSize: '11px', opacity: 0.7 }}>{s.cat}</div>
            </button>
          ))}
        </aside>

        <main style={styles.content}>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ backgroundColor: '#edf2f7', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{active.cat}</span>
          </div>
          <h2 style={{ marginTop: 0 }}>{active.title} ({active.year})</h2>
          
          <div style={styles.textBlock}>
            "{active.text}"
          </div>

          <button style={styles.resBtn} onClick={() => setShowRes(!showRes)}>
            {showRes ? "AMAGAR GUIA DE RESPOSTA" : "REVELAR GUIA DE RESPOSTA PAU"}
          </button>

          {showRes && (
            <div style={styles.resBox}>
              <div style={{ marginBottom: '15px' }}>
                <span style={styles.label}>1. Identificació i Tipologia</span>
                <p style={{ margin: 0 }}>{active.guia.id}</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <span style={styles.label}>2. Anàlisi de la Font</span>
                <p style={{ margin: 0 }}>{active.guia.analisi}</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <span style={styles.label}>3. Context Històric</span>
                <p style={{ margin: 0 }}>{active.guia.context}</p>
              </div>
              <div>
                <span style={styles.label}>4. Valoració i Conclusió</span>
                <p style={{ margin: 0 }}>{active.guia.valoracio}</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
