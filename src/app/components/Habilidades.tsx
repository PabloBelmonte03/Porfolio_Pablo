
//Listado de mis habilidades que se muestran con un formato de cajas.

const habilidades = [
  "Java", "PHP", "Javascript", "C#", "Kotlin", "React + Vite", ".NET MAUI",
  "SQL", "Node.js", "Laravel", "JavaFX", "Bootstrap"
];

export default function Habilidades() {

  return (

    <section className="py-20 bg-gray-800">

      <h2 className="text-3xl font-bold text-center mb-8">Lenguajes</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

        {habilidades.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>

  );

}
