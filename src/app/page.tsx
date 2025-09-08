// src/app/page.tsx
import Principal from "./components/Principal";
import Sobre_Mi from "./components/Sobre_Mi";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";

export default function Home() {

  return (

    <main className="bg-gray-900 text-white min-h-screen">
      <Principal />
      <Sobre_Mi />
      <Habilidades />
      <Proyectos />
      <Experiencia />
      <Contacto />
    </main>

  );

}
