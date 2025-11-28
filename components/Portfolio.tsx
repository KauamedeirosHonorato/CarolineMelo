import React from "react";
import { motion } from "framer-motion";

const results = [
  {
    id: 2,
    title: "Design Natural",
    img: "./image/Procedimento2.jpg",
    category: "Sobrancelhas",
  },
  {
    id: 3,
    title: "Brow Lamination",
    img: "./image/Procedimento3.jpg",
    category: "Sobrancelhas",
  },
  {
    id: 1,
    title: "Lifting de Cílios",
    img: "./image/Procedimento4.jpg",
    category: "Cílios",
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-rose-gold font-sans text-xs tracking-[0.2em] uppercase font-bold">
              Portfólio
            </span>
            <h2 className="font-serif text-4xl text-graphite mt-4 mb-4">
              Procedimentos
            </h2>
            <p className="font-sans text-graphite/70 leading-relaxed">
              Resultados que transformam e elevam a autoestima. Aqui você vê a
              naturalidade, precisão e cuidado presentes em cada atendimento.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              {/* ALTERAÇÃO: Troquei aspect-ratio por altura fixa (h-[400px] mobile / h-[500px] desktop)
                 Isso padroniza o tamanho dos cards.
              */}
              <div className="h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm bg-gray-100 shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  /* ALTERAÇÃO: Adicionado 'object-top' para focar no rosto/olhos
                     e reduzido um pouco o scale do hover para ser mais sutil.
                  */
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay com Gradiente e Card de Informação */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                {/* ALTERAÇÃO: O card de texto agora tem largura de 90% (w-[90%]) 
                   para não tocar nas bordas, dando um ar mais sofisticado.
                */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
