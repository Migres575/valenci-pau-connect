import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Aquest fitxer connecta el codi de React amb el "root" del teu index.html
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("No s'ha trobat l'element root al document.");

createRoot(rootElement).render(<App />);
