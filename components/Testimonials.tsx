import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  profession: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "A experiência foi simplesmente impecável! O design das sobrancelhas elevou totalmente minha autoestima. Surpreendente do início ao fim.",
    author: "Mariana Santos",
    profession: "Empresária",
  },
  {
    id: 2,
    content:
      "Detalhista, delicada e profissional. Nunca recebi tantos elogios sobre meu olhar. Perfeição define!",
    author: "Ana Beatriz",
    profession: "Criadora de Conteúdo",
  },
  {
    id: 3,
    content:
      "O atendimento é extremamente aconchegante e o resultado é extraordinário. Agora só confio aqui!",
    author: "Paula Vieira",
    profession: "Esteticista",
  },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full pt-16 md:pt-24 pb-40 md:pb-48 flex flex-col items-center relative z-10 bg-[#fdfbf9]"
    >
      <h2
        className="text-4xl md:text-5xl font-serif mb-14 tracking-wider"
        style={{ color: "#E2725B" }}
      >
        Depoimentos
      </h2>

      <div className="relative w-full max-w-4xl px-6">
        {/* Botões Laterais */}
        <button
          onClick={prev}
          className="absolute z-20 -left-2 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-rose-gold/30 bg-white/80 backdrop-blur-md text-rose-gold hover:bg-rose-gold hover:text-white transition-all shadow-sm hover:shadow-lg flex items-center justify-center group"
        >
          <ChevronLeft
            size={24}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
        </button>

        <button
          onClick={next}
          className="absolute z-20 -right-2 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-rose-gold/30 bg-white/80 backdrop-blur-md text-rose-gold hover:bg-rose-gold hover:text-white transition-all shadow-sm hover:shadow-lg flex items-center justify-center group"
        >
          <ChevronRight
            size={24}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="bg-white p-10 md:p-14 rounded-xl shadow-xl shadow-rose-gold/5 border border-white relative mx-auto"
          >
            <div className="absolute top-8 left-8 text-rose-gold/10">
              <Quote size={60} />
            </div>

            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl italic font-serif text-graphite/80 leading-relaxed mb-8">
                "{testimonials[index].content}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-rose-gold/30 mb-4" />
                <span className="text-lg font-semibold text-graphite tracking-wide">
                  {testimonials[index].author}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 justify-center mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 ${
                index === i
                  ? "bg-rose-gold w-8 h-1.5 rounded-full"
                  : "bg-rose-gold/20 w-1.5 h-1.5 rounded-full hover:bg-rose-gold/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Adicionando export default para garantir compatibilidade com qualquer tipo de import
export default Testimonials;
