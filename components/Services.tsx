import React from "react";
import { motion } from "framer-motion";
import { Service } from "../types";

const beautyServices: Service[] = [
  {
    id: 1,
    title: "Designer Reconstructivo",
    price: "R$ 70,00",
    description:
      "Técnica completa que reconstrói o desenho natural das sobrancelhas, valorizando a simetria do rosto. Ideal para quem deseja sobrancelhas naturais, cheias e com acabamento impecável.",
    image: "./image/Reconstrutivo.jpg",
  },
  {
    id: 2,
    title: "Brow Lamination",
    price: "R$ 150,00",
    description:
      "Com Reconstrução e Coloração (opcional). Tratamento que alinha, hidrata e remodela os fios, criando sobrancelhas mais cheias, definidas e sofisticadas.",
    image: "./image/Laminado.webp",
  },
  {
    id: 3,
    title: "Lash Lifting com Tratamento de Reconstrução",
    price: "R$ 150,00",
    description:
      "Técnica que curva, realça e trata os fios naturais, proporcionando efeito de cílios alongados, nutridos e com maior durabilidade — tudo sem extensões ou necessidade de manutenção.",
    image: "./image/lash.jpg",
  },
];

const epilationServices = [
  {
    name: "Depilação de Nariz",
    price: "R$ 20,00",
    desc: "Remoção delicada dos pelos internos pela raiz.",
  },
  {
    name: "Depilação de Orelha",
    price: "R$ 20,00",
    desc: "Elimina os fiozinhos indesejados da região pela raiz.",
  },
  {
    name: "Depilação de Axila",
    price: "R$ 30,00",
    desc: "Técnica precisa que remove todos os pelos pela raiz.",
  },
  {
    name: "Depilação Meia Perna",
    price: "R$ 40,00",
    desc: "Pele lisa e uniforme do joelho até o tornozelo.",
  },
  {
    name: "Depilação Perna Inteira",
    price: "R$ 60,00",
    desc: "Suavidade e acabamento perfeito por muito mais tempo.",
  },
  {
    name: "Depilação Virilha Cavada",
    price: "R$ 50,00",
    desc: "Remove apenas os excessos laterais da virilha.",
  },
  {
    name: "Depilação Virilha Completa",
    price: "R$ 60,00",
    desc: "Depilação detalhada de toda a região íntima.",
  },
  {
    name: "Depilação Facial Completa",
    price: "R$ 60,00",
    desc: "Com hidratação e proteção solar.",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-nude-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-gold font-sans text-xs tracking-[0.2em] uppercase font-bold">
            Nossos Tratamentos
          </span>
          <h2 className="font-serif text-4xl text-graphite mt-4">
            Menu de Serviços
          </h2>
          <div className="w-12 h-[1px] bg-gold-opaque mx-auto mt-6" />
        </div>

        {/* Section 1: Design & Embelezamento */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl text-graphite mb-8 text-center md:text-left pl-4 border-l-4 border-rose-gold">
            Designer & Embelezamento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beautyServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm border border-transparent hover:border-gray-rose/20 flex flex-col"
              >
                <div className="overflow-hidden mb-6 h-64 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-nude-deep/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif text-xl text-graphite group-hover:text-gold-opaque transition-colors">
                    {service.title}
                  </h3>
                  {service.price && (
                    <span className="font-sans font-medium text-rose-gold text-sm whitespace-nowrap ml-2">
                      {service.price}
                    </span>
                  )}
                </div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed px-1 pb-4 flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Epilação List */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-rose/10">
          <h3 className="font-serif text-2xl text-graphite mb-10 text-center md:text-left pl-4 border-l-4 border-gold-opaque">
            Menu de Depilação{" "}
            <span className="text-base font-sans text-gray-400 font-normal ml-2">
              (Pela raiz)
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {epilationServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col border-b border-dashed border-gray-200 pb-4 last:border-0 md:last:border-b"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-serif text-lg text-graphite">
                    {item.name}
                  </h4>
                  <span className="font-sans font-medium text-gold-opaque">
                    {item.price}
                  </span>
                </div>
                <p className="font-sans text-xs text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
