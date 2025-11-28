import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Visagismo } from "./components/Visagismo";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-champagne-light min-h-screen font-sans antialiased selection:bg-roseGold/40 selection:text-coffee">
      <Navigation />

      <main>
        <Hero />
        <Services />
        <Visagismo />
        <About />
        <Portfolio />
        <Testimonials />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=554498509063&text=Quero+real%C3%A7ar+minha+beleza.+Gostaria+de+agendar+um+atendimento.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar via WhatsApp"
          className="w-16 h-16 rounded-full shadow-xl border border-white/30
      bg-[#E2725B] text-white flex items-center justify-center
      transition-all duration-300 backdrop-blur-sm
      hover:scale-[1.1] hover:shadow-lg hover:shadow-[#D1442A] group"
        >
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:rotate-12 transition-transform duration-300"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72A12.84 12.84 0 0 0 9.8 6.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
