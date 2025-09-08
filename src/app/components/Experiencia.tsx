// Experiencia y educación en forma de timeline

const timeline = [
  { year: "2025 - Actual", text: "Ayudante de cocina - Foster's Hollywood" },
  { year: "2025", text: "Prácticas DAM – Residencia de mayores Doña Rosa (400h)" },
  { year: "2022", text: "Prácticas SMR – Residencia de mayores Doña Rosa (380h)" },
  { year: "2023 - 2025", text: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)" },
  { year: "2020 - 2022", text: "Técnico en Sistemas Microinformáticos y Redes (SMR)" }
];

export default function Timeline() {

  return (

    <section className="py-20 bg-gray-800">

      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-10">Experiencia y Formación</h2>

      {/* Lista del timeline */}
      <div className="max-w-3xl mx-auto space-y-6">

        {timeline.map((item, index) => (

          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <span className="font-semibold">{item.year}</span>
            <p className="text-gray-300">{item.text}</p>
          </div>


        ))}

      </div>

    </section>

  );
  
}
