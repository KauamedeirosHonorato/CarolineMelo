import React from "react";
import { MapPin, Phone, Instagram, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      // Z-INDEX: 20 (Para ficar ACIMA do Testimonials)
      className="bg-[#fdfbf9] pt-24 pb-10 border-t border-rose-gold/20 relative z-20"
    >
      {/* Gradient suave no fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/5 to-transparent pointer-events-none" />

      {/* WRAPPER PARA SEGURAR TUDO */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 relative">
          {/* CTA (Call to Action) Flutuante */}
          <div
            className="bg-white p-10 md:p-16 shadow-2xl shadow-rose-gold/90 rounded-xl 
            relative -top-12 md:-top-40 mb-10 z-20 
            border border-white/50 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-lg">
                <h3 className="font-serif text-3xl text-graphite mb-5">
                  Pronta para realçar sua beleza?
                </h3>
                <p className="font-sans text-graphite/60 leading-relaxed">
                  Agende agora mesmo o seu atendimento. Permita-se viver uma
                  experiência de cuidado com elegância e naturalidade.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://wa.me/554498509063?text=Quero%20realçar%20minha%20beleza.%20Gostaria%20de%20agendar%20um%20atendimento."
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-sans uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-lg shadow-rose-gold/30 hover:shadow-rose-gold/50 hover:-translate-y-1 overflow-hidden"
                  style={{ backgroundColor: "#E2725B", color: "white" }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                  <span className="relative z-10 flex items-center gap-2">
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    Quero Agendar
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Conteúdo do footer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 mt-20 md:mt-24">
            {/* Coluna 1: Marca */}
            <div className="md:col-span-1">
              <a
                href="#"
                className="font-serif text-2xl tracking-widest uppercase text-graphite block mb-4"
              >
                Caroline Melo
              </a>
              <p className="font-sans text-sm text-graphite/70 leading-relaxed font-medium">
                Designer de Sobrancelhas & Epiladora Profissional.
              </p>
            </div>

            {/* Coluna 2: Contato + MAPA */}
            <div className="md:col-span-1">
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gold-opaque mb-6">
                Contato
              </h4>
              <ul className="space-y-6">
                {/* Item Endereço + Mapa */}
                <li className="flex flex-col gap-3 group cursor-default">
                  <div className="flex items-start gap-3 text-graphite/70 text-sm">
                    <div className="p-2 bg-rose-gold/10 rounded-full group-hover:bg-rose-gold/20 transition-colors">
                      <MapPin size={16} className="text-rose-gold shrink-0" />
                    </div>
                    <span className="mt-1">
                      Rua Padre Germano José Mayer, nº 887, Zona 02 <br />
                      Maringá – PR
                    </span>
                  </div>

                  {/* 🗺️ MAPA EMBED GOOGLE MAPS */}
                  <div className="w-full h-32 rounded-lg overflow-hidden border border-rose-gold/20 mt-2 shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4649197680457!2d-51.94222788448029!3d-23.426646767125562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd98b2c2e6c3b%3A0x4d9d4b07d5290c3b!2sRua%20Padre%20Germano%20Jos%C3%A9%20Mayer%2C%20887%20-%20Zona%2002%2C%20Maring%C3%A1%20-%20PR%2C%2086120-050%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-700 ease-in-out opacity-100"
                    ></iframe>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-graphite/70 text-sm group cursor-pointer">
                  <a
                    href="https://api.whatsapp.com/send/?phone=554498509063&text=Quero+real%C3%A7ar+minha+beleza.+Gostaria+de+agendar+um+atendimento.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-rose-gold/10 rounded-full group-hover:bg-rose-gold/20 transition-colors">
                      <Phone size={16} className="text-rose-gold shrink-0" />
                    </div>
                    <span className="group-hover:text-rose-gold transition-colors">
                      (44) 99850-9063
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Horários */}
            <div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gold-opaque mb-6">
                Horários
              </h4>
              <ul className="space-y-2 text-sm text-graphite/70 font-sans">
                <li className="font-medium">Segunda - Sábado</li>
                <li className="text-xs italic opacity-70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Atendimento com hora marcada
                </li>
              </ul>
            </div>

            {/* Coluna 4: Social */}
            <div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gold-opaque mb-6">
                Social
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/cm.carolmelo"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-12 h-12 rounded-full border border-gray-rose/50 flex items-center justify-center text-graphite/70 overflow-hidden hover:border-rose-gold hover:shadow-lg hover:shadow-rose-gold/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-rose-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                  <Instagram
                    size={20}
                    className="relative z-10 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              </div>

              <a
                href="https://www.instagram.com/cm.carolmelo/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-sans text-graphite/60 mt-4 
                hover:text-rose-gold transition-colors relative group"
              >
                @cm.carolmelo
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full" />
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Rodapé inferior */}
          <div className="border-t border-rose-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-graphite/50 font-sans">
            <p>
              &copy; {currentYear} Caroline Melo Beauty Studio. Todos os
              direitos reservados.
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="relative hover:text-rose-gold transition-colors group"
              >
                Privacidade
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#"
                className="relative hover:text-rose-gold transition-colors group"
              >
                Termos de Uso
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
