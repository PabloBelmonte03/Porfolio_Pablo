// Lista de proyectos (de momento con ejemplos, luego puedes cambiarlos)
const projects = [
  {
    title: "My Community",
    description: "Aplicación para comunidades de vecinos y administradores de Fincas.",
    github: "https://github.com/PabloBelmonte03/PFC-Pablo-Belmonte/tree/main"
  },
  {
    title: "Práctica final Acceso a datos.",
    description: "Un cliente nos ha solicitado implementar un sistema para la gestión de restaurantes.",
    github: "https://github.com/PabloBelmonte03/Practica-Final-AC"
  },
    {
    title: "Práctica para aprender Python.",
    description: "Algunos ejercicios para aprender Python viniendo de desarrollar con java.",
    github: "https://github.com/PabloBelmonte03/Pr-ctica-Python"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>

      {/* Grid de tarjetas */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
