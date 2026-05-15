import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../lib/content';
import { Button } from './ui/button';
import { PhoneCall } from 'lucide-react';

const unsplashImages = [
  'https://images.unsplash.com/photo-1541888081696-6e3e1fc843bb?q=80&w=2070&auto=format&fit=crop', // Infraestrutura
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop', // Sala Tecnica
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop', // Topografia
];

const AccordionItem = ({ item, image, isActive, onMouseEnter }: any) => {
  return (
    <div
      className={`
        relative rounded-sm overflow-hidden cursor-pointer
        transition-all duration-700 ease-[0.22,1,0.36,1]
        ${isActive ? 'h-[300px] lg:h-[550px] w-full lg:w-[450px]' : 'h-[60px] lg:h-[550px] w-full lg:w-[80px]'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      <img
        src={image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 duration-700 ${isActive ? 'bg-azimute-black/20 dark:bg-azimute-dark-bg/40' : 'bg-azimute-black/70 dark:bg-azimute-dark-bg/80'}`}></div>

      <span
        className={`
          absolute text-[#FAFAF7] text-[18px] font-serif font-semibold whitespace-nowrap
          transition-all ease-[0.22,1,0.36,1]
          ${
            isActive
              ? 'bottom-6 left-6 rotate-0 opacity-100' 
              : 'bottom-1/2 left-6 translate-y-1/2 lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-0 lg:-rotate-90 opacity-80'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="servicos" className="bg-azimute-bg dark:bg-azimute-dark-bg py-[clamp(5rem,10vw,10rem)] overflow-hidden relative">
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
      <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-5/12 text-left relative min-h-[550px] flex flex-col">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-[11px] font-medium uppercase tracking-[0.2em] text-azimute-charcoal dark:text-[#FAFAF7]/70 mb-4"
            >
              O QUE FAZEMOS
            </motion.span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col flex-grow"
              >
                <h2 className="font-serif text-[clamp(2rem,3vw,2.75rem)] leading-[1.05] tracking-[-0.015em] text-azimute-black dark:text-[#FAFAF7] mb-6">
                  {activeService.title}
                </h2>
                
                <p className="text-[15.5px] leading-[1.65] text-azimute-charcoal dark:text-[#FAFAF7]/80 mb-8">
                  {activeService.description}
                </p>

                <ul className="flex flex-col gap-3 mb-10 flex-grow">
                  {activeService.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[14px] text-azimute-charcoal dark:text-[#FAFAF7]/80">
                      <span className="text-azimute-gold mt-[2px]">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div>
                  <Button size="lg" className="gap-3 group" asChild>
                    <a href={activeService.ctaLink} target="_blank" rel="noopener noreferrer">
                      Orçamento para {activeService.title.split(' ')[0]}
                      <PhoneCall className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2 lg:gap-4 h-auto lg:h-[550px]">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.title}
                  item={service}
                  image={unsplashImages[index]}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
