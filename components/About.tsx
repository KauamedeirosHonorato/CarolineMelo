import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  const features = [
    "Atendimento com horário agendado",
    "Técnicas delicadas, seguras e atualizadas",
    "Materiais individuais e ambiente higienizado",
    "Resultados naturais e duradouros",
    "Atendimento acolhedor e cheio de propósito",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-nude-light/50 -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-rose-gold/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* --- MUDANÇAS AQUI ---
                 1. Removido 'aspect-[3/4]' para não forçar uma proporção muito alta.
                 2. Adicionado alturas fixas responsivas 'h-[450px] lg:h-[550px]' para controlar o tamanho do "modal".
              */}
              <div className="relative w-full max-w-md mx-auto h-[450px] lg:h-[550px] overflow-hidden rounded-sm shadow-xl bg-gray-100">
                <img
                  src="./public/image/PerfilMelo.jpg"
                  alt="Caroline Melo Profissional"
                  /* --- MUDANÇA AQUI ---
                     Adicionado 'object-top'. Isso garante que, se a imagem precisar ser cortada
                     para preencher o espaço, ela priorize mostrar a parte superior (o rosto),
                     em vez de cortar o centro.
                  */
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 border-[2px] border-black/100 m-0 pointer-events-none" />
              </div>
              {/* Offset decorative box */}
              {/* Ajustado a altura da caixa decorativa para acompanhar a nova altura da imagem */}
              <div className="absolute -bottom-0 -right-1 w-full h-full border border-gold-opaque/0 -z-10 hidden md:block" />
            </motion.div>
          </div>

          {/* Text Side - (Sem alterações necessárias aqui) */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gold-opaque font-sans text-xs tracking-[0.2em] uppercase font-bold">
                Sobre Mim
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-graphite mt-4 mb-6">
                Caroline Melo
              </h2>
              <div className="w-16 h-[2px] bg-rose-gold mb-8" />

              <div className="font-sans text-graphite/80 leading-relaxed space-y-4">
                <p>
                  Olá! Eu sou Caroline Melo, designer de sobrancelhas e
                  Depiladora há quase 10 anos, apaixonada por transformar
                  olhares e proporcionar experiências únicas de cuidado.
                </p>
                <p>
                  Trabalho com técnicas avançadas, olhar detalhista e uma
                  energia extremamente sensível — porque acredito que beleza e
                  emocional caminham juntos. Meu propósito é oferecer um
                  atendimento acolhedor, seguro e totalmente personalizado.
                </p>
                <p>
                  Cada cliente recebe atenção especial, respeito ao formato
                  natural do rosto e um resultado que realça sua verdadeira
                  beleza. Seja bem-vinda ao meu espaço. Aqui, você é cuidada com
                  carinho, profissionalismo e intenção.
                </p>
              </div>

              {/* Methodology / Features */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-serif text-xl text-graphite mb-6">
                  Como Funciona o Atendimento
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm font-sans text-graphite/80"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-gold-opaque shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <div className="inline-block">
                  <h4
                    className="font-serif text-4xl"
                    style={{ color: "#E2725B" }}
                  >
                    10+
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-[#E2725B] mt-1">
                    Anos de Experiência
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
