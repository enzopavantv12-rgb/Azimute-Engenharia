import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Button } from './ui/button';
import { UpgradeBanner } from './ui/upgrade-banner';
import { buildWhatsAppLink, WA_MESSAGES } from '../lib/whatsapp';

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["precisão", "segurança", "agilidade", "tecnologia", "confiança"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-azimute-bg dark:bg-azimute-dark-bg min-h-screen flex items-center pt-20 relative">
      {/* Light Mode Grid (No Glow) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(44, 101, 168, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(44, 101, 168, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 32px 32px",
        }}
      />
      {/* Dark Mode Grid & Blue Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden dark:block opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(44, 101, 168, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(44, 101, 168, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(44, 101, 168, 0.3) 0%, rgba(44, 101, 168, 0.05) 50%, transparent 80%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
          <div className="container mx-auto px-6 md:px-12 xl:px-16 relative z-10">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <UpgradeBanner 
                  buttonText="Conheça a Azimute Engenharia" 
                  href="#sobre"
                />
              </motion.div>
          
          <div className="flex gap-4 flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-serif text-azimute-black dark:text-[#FAFAF7]"
            >
              <span className="text-azimute-black dark:text-[#FAFAF7]">Engenharia e projetos com</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 text-azimute-blue italic">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-azimute-charcoal/80 dark:text-[#FAFAF7]/80 max-w-2xl text-center mx-auto"
            >
              Soluções técnicas em topografia, georreferenciamento, aerolevantamento e projetos de infraestrutura. Nossa meta é entregar resultados confiáveis para que você não tenha retrabalho em campo.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-4"
          >
            <Button size="lg" className="gap-4 group" asChild>
              <a href={buildWhatsAppLink(WA_MESSAGES.hero)} target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp <WhatsAppIcon size={16} color="#FFFFFF" className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-4 group dark:border-[#FAFAF7]/20 dark:text-[#FAFAF7] dark:hover:bg-[#FAFAF7]/10" asChild>
              <a href="#servicos">
                Ver nossos serviços <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
