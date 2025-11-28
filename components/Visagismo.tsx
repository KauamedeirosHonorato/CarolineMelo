import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";

// ------------------
// Ícones refinados
// ------------------

const FaceIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 4.5C9 4.5 11 4 12 4C13 4 15 4.5 15 4.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M12 4V20"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
    />
    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const TemperamentIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path d="M12 6V18" stroke="currentColor" strokeWidth="0.5" />
    <path d="M6 12H18" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const EyeDesignIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 13C3 13 6 7 12 7C18 7 21 13 21 13"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7 6C7 6 9.5 4 12 4C14.5 4 17 6 17 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M12 10V13" stroke="currentColor" strokeWidth="0.5" />
    <path d="M12 13L13.5 14.5" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const HarmonizationIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3V21" stroke="currentColor" strokeWidth="0.8" />
    <path
      d="M4 12H20"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="2 2"
    />
    <path
      d="M7 8C7 8 9 7 12 7C15 7 17 8 17 8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M7 16C7 16 9 17 12 17C15 17 17 16 17 16"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// ------------------
// Componente Principal
// ------------------

export const Visagismo: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const visagismoItems = [
    { text: "Análise de geometria facial", icon: FaceIcon },
    { text: "Estudo de temperamento e personalidade", icon: TemperamentIcon },
    { text: "Projeto personalizado de olhar", icon: EyeDesignIcon },
    { text: "Harmonização simétrica", icon: HarmonizationIcon },
  ];

  return (
    <section
      ref={containerRef}
      id="visagismo"
      className="py-20 md:py-32 bg-nude-deep/20 overflow-hidden relative"
    >
      {/* Fundo com leve parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y }}
          className="w-full h-[120%] -top-[10%] relative"
        ></motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 -z-10 -skew-y-2 origin-top-left" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Texto */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-opaque text-xs tracking-[0.2em] uppercase font-bold block mb-4">
                Consultoria Exclusiva
              </span>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-7xl text-graphite mb-8 leading-tight"
              >
                Visagismo Facial
              </motion.h2>

              <div className="w-16 h-[2px] bg-rose-gold mb-10" />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-graphite/80 leading-relaxed mb-6"
              >
                O Visagismo é a arte de criar uma imagem pessoal que revela suas
                qualidades interiores, alinhando suas características físicas
                aos princípios da linguagem visual.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-graphite/80 leading-relaxed mb-10"
              >
                A partir da análise das linhas e formas do seu rosto, criamos um
                design de sobrancelhas e cílios que harmoniza com sua essência e
                personalidade.
              </motion.p>

              <ul className="space-y-8 mb-12">
                {visagismoItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-5 text-graphite text-base"
                  >
                    <div className="group shrink-0 p-3 rounded-full bg-white border border-rose-gold/20 shadow-sm transition-all hover:shadow-md hover:border-gold-opaque/50">
                      <item.icon
                        size={26}
                        className="text-gold-opaque transition-all group-hover:scale-110 group-hover:text-[#D87A56]"
                      />
                    </div>
                    <span className="leading-relaxed pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=554498509063&text=Quero+real%C3%A7ar+minha+beleza.+Gostaria+de+agendar+um+atendimento.&type=phone_number&app_absent=0",
                    "_blank"
                  )
                }
              >
                Agendar Consultoria
              </Button>
            </motion.div>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-1/2 relative order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] rounded-t-full overflow-hidden relative shadow-2xl mx-auto max-w-md">
                <img
                  src="./public/image/Visagismo.jpg"
                  alt="Análise de Visagismo Facial"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  /* Adicionado fallback caso a imagem não carregue para não quebrar o layout */
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/500x600/E4C3B8/ffffff?text=Visagismo";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
