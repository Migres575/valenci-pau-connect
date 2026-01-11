import React, { useState } from "react";

// --- BASE DE DADES ESTRATÈGICA AMB GUIES DE REDACCIÓ (12 FONTS) ---
const sources = [
  {
    id: 1, year: 1874, title: "Manifest de Sandhurst", cat: "Sistema Canovista",
    text: "Por virtud de la espontánea y solemne abdicación de mi augusta madre... soy el único que representa el derecho monárquico en España. Ni de la española ni de las demás monarquías europeas puede esperarse hoy que sean absolutistas; la nuestra debe ser liberal.",
    pistes: {
      identificacio: "Font primària, text polític de caràcter programàtic. Escrit per Cánovas del Castillo i firmat pel príncep Alfons XII. Situat al desembre de 1874, poc abans de la Restauració.",
      analisi: "Idees clau: 1) Legitimitat dinàstica borbònica. 2) Promesa de monarquia constitucional i liberal (no absolutista). 3) Paper de l'Església (catolicisme).",
      context: "Context de crisi final del Sexenni Democràtic (República presidencialista de Serrano). Intent de restaurar la monarquia per via pacífica i civil per evitar el protagonisme militar.",
      valoracio: "És el document que fixa les bases del sistema canovista: ordre, propietat i monarquia liberal. Serà l'eix de la Constitució de 1876."
    }
  },
  {
    id: 2, year: 1876, title: "Constitució de 1876", cat: "Sistema Canovista",
    text: "Art. 11. La religión Católica, Apostólica, Romana, es la del Estado... Art. 18. La potestad de hacer las leyes reside en las Cortes con el Rey. Art. 19. Las Cortes se componen de dos Cuerpos Colegisladores: el Senado y el Congreso.",
    pistes: {
      identificacio: "Font primària, text jurídic (Carta Magna). Redactada sota la supervisió de Cánovas per donar estabilitat al nou règim.",
      analisi: "Elements essencials: Sobirania compartida (Rei/Corts), confessionalitat de l'Estat, sistema bicameral i drets limitats per lleis posteriors.",
      context: "Consolidació de la Restauració. Es busca un text 'elàstic' que permeti governar tant a conservadors com a liberals sense haver de canviar la Constitució cada cop (Torn Pacífic).",
      valoracio: "Peça clau de l'estabilitat canovista. Tot i la seva aparença liberal, va permetre el control oligàrquic del país durant dècades."
    }
  },
  {
    id: 3, year: 1892, title: "Bases de Manresa", cat: "Nacionalisme",
    text: "Base 3a. La llengua catalana serà la única que, ab caràcter oficial, podrà usar-se á Catalunya. Base 4a. Sols los catalans podran desempenyar á Catalunya càrrechs públics. Base 6a. Catalunya serà la única sobirana de sa administració interna.",
    pistes: {
      identificacio: "Font primària, text polític (projecte d'estatut). Aprovat per l'Assemblea de la Unió Catalanista el març de 1892.",
      analisi: "Demandes: Sobirania interna total, oficialitat exclusiva del català, restabliment de les Corts pròpies i de les institucions històriques catalanes.",
      context: "Pas del catalanisme cultural (Renaixença) al catalanisme polític. Reacció contra el model d'estat centralista i uniformitzador de la Restauració.",
      valoracio: "Document fundacional del nacionalisme català contemporani. Tot i el seu to tradicionalista (regionalista), marca el camí de l'autogovern futur."
    }
  },
  {
    id: 4, year: 1898, title: "Joaquín Costa: Oligarquía y Caciquismo", cat: "Oposició i Crisis",
    text: "No es una forma de gobierno; es una enfermedad social (...). Con este régimen de oligarquía y caciquismo no hay libertad, ni hay sufragio, ni hay instituciones. Los oligarcas y los caciques forman una red que cubre todo el país.",
    pistes: {
      identificacio: "Font primària, assaig polític/sociològic (1901). Autor: Joaquín Costa, principal ideòleg del Regeneracionisme.",
      analisi: "Denúncia de la 'farsa electoral'. L'oligarquia (Madrid) i els cacics (local) segresten el vot popular. Espanya és un 'país mort' políticament.",
      context: "Crisi del 98 (Desastre de Cuba). El país s'adona que el sistema canovista està corromput i desconnectat de la societat real.",
      valoracio: "Crítica clau que obligarà el sistema a intentar reformes ('revolució des de dalt') per sobreviure, tot i que acabaran fracassant."
    }
  },
  {
    id: 5, year: 1906, title: "Prat de la Riba: La Nacionalitat Catalana", cat: "Nacionalisme",
    text: "Catalunya és una nació (...). La nacionalitat és una unitat de cultura, una llengua, una història. L'Estat no és sinó l'organització política de la Nació. Poden haver-hi Estats que tinguin diverses nacions.",
    pistes: {
      identificacio: "Font primària, assaig doctrinal. Autor: Enric Prat de la Riba, líder de la Lliga Regionalista.",
      analisi: "Teoria de la nació: diferencia Nació (fet biològic i cultural) d'Estat (fet polític). Catalunya és una nació i té dret a un Estat propi o a l'autonomia.",
      context: "Ascens del catalanisme polític conservador i burgès. Creació de la Solidaritat Catalana després de la Llei de Jurisdiccions.",
      valoracio: "Llibre de capçalera del nacionalisme català que va servir de base teòrica per a la futura Mancomunitat de Catalunya."
    }
  },
  {
    id: 6, year: 1906, title: "Alejandro Lerroux: Jóvenes Bárbaros", cat: "Oposició i Crisis",
    text: "Jóvenes bárbaros de hoy: entrad a saco en la civilización decadente y miserable de este país de sus templos y degollad a sus dioses. No os detengáis ante nada. Hay que elevar al pueblo.",
    pistes: {
      identificacio: "Font primària, discurs o article periodístic. Autor: Alejandro Lerroux, líder del republicanisme radical.",
      analisi: "Retòrica violenta, anticlerical i revolucionària. Crida a l'acció directa de les classes obreres contra l'ordre establert i l'Església.",
      context: "Creixement del republicanisme de masses a Barcelona. Divisió entre el catalanisme burgès i l'obrerisme radicalitzat.",
      valoracio: "Explica el clima de tensió que portaria a la Setmana Tràgica de 1909 i la desconfiança del sistema cap a les masses urbanes."
    }
  },
  {
    id: 7, year: 1907, title: "El Sistema del Pucherazo (Caricatura)", cat: "Sistema Canovista",
    text: "Imatge d'una urna essent manipulada (el 'puchero') on s'introdueixen vots falsos o es fan desaparèixer els reals.",
    pistes: {
      identificacio: "Font primària iconogràfica (caricatura política). Publicada generalment en revistes satíriques com 'La Campana de Gràcia'.",
      analisi: "Denúncia visual del frau electoral: l'Encasellat (decidir qui guanya abans de votar) i el Pucherazo (manipulació de l'urna).",
      context: "Funcionament real del sistema del Torn Pacífic. El Ministeri de la Governació pactava els resultats amb els cacics locals.",
      valoracio: "Il·lustra perfectament la manca de democràcia real durant la Restauració i el control social de les zones rurals."
    }
  },
  {
    id: 8, year: 1909, title: "Manifest de la Solidaritat Obrera", cat: "Oposició i Crisis",
    text: "Considerant que la guerra de Marroc és un crim de lesa humanitat... el proletariat ha de respondre amb la vaga general per aturar aquest atropellament.",
    pistes: {
      identificacio: "Font primària, manifest sindical. Signat per la Solidaritat Obrera (futura CNT).",
      analisi: "Oposició a la lleva de reservistes per a la guerra del Marroc (sistema de quotes injust). Crida a la vaga general revolucionària.",
      context: "Inici de la Setmana Tràgica de Barcelona. Descontentament popular pel Barranc del Llop i el pes de l'Església i l'exèrcit.",
      valoracio: "Marca la ruptura definitiva entre les classes obreres i el règim de la Restauració, forçant la dimissió de Maura."
    }
  },
  {
    id: 9, year: 1917, title: "Manifest de la Vaga General", cat: "Oposició i Crisis",
    text: "Consideramos que el sistema está agotado... Pedimos un gobierno provisional, elecciones sinceras y una asamblea constituyente que resuelva los problemas del país.",
    pistes: {
      identificacio: "Font primària, manifest polític-sindical. Signat per la UGT i la CNT de forma conjunta l'agost de 1917.",
      analisi: "Demandes: Fi del sistema de la Restauració, democratització real de l'estat i solució a l'encariment de la vida (post-Guerra Mundial).",
      context: "Triple crisi de 1917: Militar (Juntes de Defensa), Política (Assemblea de Parlamentaris) i Social (Vaga General).",
      valoracio: "Punt d'inflexió que demostra la descomposició irreversible del sistema canovista davant la pressió del moviment obrer."
    }
  },
  {
    id: 10, year: 1923, title: "Manifest de Primo de Rivera", cat: "Dictadura",
    text: "Al país y al Ejército: Ha llegado para nosotros el momento... de libertar a la Patria de los profesionales de la política, de los que nos ofrecen el cuadro de desdichas e inmoralidades que empezaron el año 98.",
    pistes: {
      identificacio: "Font primària, text polític (proclama militar). Autor: General Miguel Primo de Rivera, 13 de setembre de 1923.",
      analisi: "Justificació del cop: Regeneracionisme militar, fi de la corrupció política ('vella política'), lluita contra el separatisme i el comunisme.",
      context: "Crisi total del parlamentarisme, desastre d'Annual (Marroc), pistolerisme a Barcelona i por de l'expedient Picasso.",
      valoracio: "Liquidació del sistema constitucional de 1876 i inici d'una dictadura de 7 anys amb la complicitat d'Alfons XIII."
    }
  },
  {
    id: 11, year: 1924, title: "Largo Caballero i els Comitès Paritaris", cat: "Dictadura",
    text: "Nosaltres no hem donat suport a la dictadura, però aprofitarem els mecanismes legals per defensar els treballadors davant el capitalisme, ja que la via revolucionària ha estat esclafada.",
    pistes: {
      identificacio: "Font primària, article o declaració política. Autor: Largo Caballero (PSOE/UGT).",
      analisi: "Col·laboracionisme pragmàtic: la UGT accepta participar en el sistema corporatiu de Primo de Rivera per sobreviure i obtenir millores laborals.",
      context: "La Dictadura va prohibir la CNT (via repressiva) però va intentar integrar el socialisme moderat (via corporativa) per mantenir la pau social.",
      valoracio: "Mostra la divisió estratègica de l'esquerra davant l'autoritarisme i el creixement de la UGT durant els anys 20."
    }
  },
  {
    id: 12, year: 1930, title: "El Pacte de Sant Sebastià", cat: "Dictadura",
    text: "Els representants de les forces republicanes i constitucionalistes acorden la creació d'un Comitè Revolucionari per a la instauració de la República i el reconeixement de la personalitat de Catalunya.",
    pistes: {
      identificacio: "Font primària, document polític (acord d'oposició). Agost de 1930.",
      analisi: "Objectiu: Enderrocar la monarquia d'Alfons XIII. Compromís amb el nacionalisme català per redactar un Estatut d'Autonomia.",
      context: "Final de la Dictadura (Dictablanda de Berenguer). Desprestigi total del Rei per haver lligat la seva sort a la del dictador Primo de Rivera.",
      valoracio: "Document clau que prepara el canvi de règim cap a la Segona República (14 d'abril de 1931)."
    }
  }
];

export default function SimuladorPAU() {
  const [active, setActive] = useState(sources[0]);
  const [pas, setPas] = useState("identificacio");

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER PRO */}
        <header style={{ backgroundColor: '#1e293b', color: 'white', padding: '30px', borderRadius: '20px', marginBottom: '30px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800', letterSpacing: '-0.025em' }}>Simulador de Comentari PAU</h1>
              <p style={{ margin: '5px 0 0', opacity: 0.7, fontSize: '14px', fontWeight: '500' }}>Dominis Documentals 1874 — 1930 | Història d'Espanya</p>
            </div>
            <div style={{ backgroundColor: '#3b82f6', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold' }}>
              12 Fonts Crítiques
            </div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '30px' }}>
          
          {/* LLISTA DE DOCUMENTS */}
          <aside style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Línia Temporal</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sources.map(s => (
                <button 
                  key={s.id}
                  onClick={() => { setActive(s); setPas("identificacio"); }}
                  style={{ 
                    textAlign: 'left', padding: '15px', borderRadius: '12px', border: '1px solid',
                    cursor: 'pointer', transition: '0.2s',
                    backgroundColor: active.id === s.id ? '#eff6ff' : 'white',
                    borderColor: active.id === s.id ? '#3b82f6' : '#f1f5f9'
                  }}
                >
                  <div style={{ fontWeight: '800', fontSize: '14px', color: active.id === s.id ? '#1e40af' : '#1e293b' }}>{s.title}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', fontWeight: 'bold' }}>{s.year} • {s.cat}</div>
                </button>
              ))}
            </div>
          </aside>

          {/* EDITOR DE RESPOSTA */}
          <main style={{ backgroundColor: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '15px', borderLeft: '6px solid #1e293b', marginBottom: '40px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }}>Text Original del Document</h4>
              <p style={{ margin: 0, fontStyle: 'italic', fontSize: '18px', lineHeight: '1.7', color: '#334155', fontWeight: '500' }}>
                "{active.text}"
              </p>
            </div>

            <div style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '10px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b' }}>Estructura de Resposta PAU</h3>
            </div>

            {/* NAV DE PASSOS */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
              {["identificacio", "analisi", "context", "valoracio"].map((key) => (
                <button 
                  key={key}
                  onClick={() => setPas(key)}
                  style={{ 
                    flex: 1, padding: '12px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                    fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', transition: '0.2s',
                    backgroundColor: pas === key ? '#1e293b' : '#f1f5f9',
                    color: pas === key ? 'white' : '#64748b'
                  }}
                >
                  {key.replace('identificacio', '1. ID').replace('analisi', '2. Anàlisi').replace('context', '3. Context').replace('valoracio', '4. Valoració')}
                </button>
              ))}
            </div>

            {/* CONTINGUT DE LA PISTA */}
            <div style={{ padding: '30px', backgroundColor: '#fffbeb', border: '2px solid #fef3c7', borderRadius: '15px' }}>
              <h5 style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#92400e', fontWeight: '800' }}>
                Pistes per redactar l'apartat de {pas.toUpperCase()}:
              </h5>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.8', color: '#1e293b', fontWeight: '500' }}>
                {active.pistes[pas as keyof typeof active.pistes]}
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
