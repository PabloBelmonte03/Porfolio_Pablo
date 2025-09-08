"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Sección que ocupa toda la pantalla y tiene imagen de fondo
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/fondo.jpg')" }}
    >
      {/* Capa oscura encima de la imagen para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido centrado encima de la capa oscura */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white"
        >
          Pablo Belmonte Botella
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl text-gray-200"
        >
          Desarrollador de software junior 🚀
        </motion.p>

        <div className="mt-6 flex gap-4 justify-center">
          <a href="/CV_Pablo.pdf" 
            download className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
            Descargar CV
          </a>


          <a
            href="https://github.com/PabloBelmonte03"
            target="_blank"
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
