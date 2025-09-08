export default function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>

      {/* Texto */}
      <p className="text-gray-300 mb-4">
        Si quieres hablar conmigo, puedes contactarme directamente:
      </p>

      {/* Links de contacto */}
      <div className="flex flex-col gap-3 items-center">
        <a href="mailto:pbelmontebotella@gmail.com" className="text-blue-400 hover:underline">
          📧 pbelmontebotella@gmail.com
        </a>
        <a href="tel:+34646704774" className="text-blue-400 hover:underline">
          📱 646 70 47 74
        </a>
        <a href="https://github.com/PabloBelmonte03" target="_blank" className="text-blue-400 hover:underline">
          🐙 GitHub
        </a>
      </div>
    </section>
  );
}
