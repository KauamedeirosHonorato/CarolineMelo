import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center overflow-hidden bg-nude-light"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />
        <img
          src="/Image/OlhoFoco.jpg" // Corrigido para Image maiúsculo
          alt="Close up of beautiful female eye with long lashes"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 mt-12 md:mt-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-graphite leading-tight mb-6">
              Realce sua{" "}
              <span className="italic text-[#E2725B]">Beleza Natural</span> com
              Técnicas de Excelência
            </h1>

            <p className="font-sans text-graphite/80 text-lg leading-relaxed mb-8 border-l-2 border-[#E2725B] pl-4 sm:pl-6">
              Cuidar de você é a minha especialidade. Aqui, cada detalhe é
              pensado para elevar sua autoestima, intensificar sua expressão e
              trazer leveza para o seu dia. Sobrancelhas, cílios e epilação
              feitas com precisão, sensibilidade e amor — porque a sua beleza
              merece ser valorizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="terracota"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=554498509063&text=Quero+real%C3%A7ar+minha+beleza.+Gostaria+de+agendar+um+atendimento.&type=phone_number&app_absent=0",
                    "_blank"
                  )
                }
              >
                Agendar Atendimento no WhatsApp
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Procedimento
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-rose mb-2">
          Explore
        </span>

        <motion.div
          className="w-[1px] h-12 bg-gray-rose"
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};
