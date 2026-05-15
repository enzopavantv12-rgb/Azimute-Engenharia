import { motion } from 'framer-motion';
import { differentials } from '../lib/content';
import { AzimuteSymbol } from './AzimuteSymbol';

export const Differentials = () => {
  return (
    <section className="bg-azimute-bg dark:bg-azimute-dark-bg py-[clamp(5rem,10vw,10rem)] relative">
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-azimute-charcoal dark:text-[#FAFAF7]/70 mb-4">
            POR QUE A AZIMUTE
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.015em] text-azimute-black dark:text-[#FAFAF7]">
            Engenharia que conecta campo, projeto e entrega.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lado esquerdo - Destaque Principal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-azimute-blue dark:bg-white p-10 md:p-16 relative overflow-hidden flex flex-col justify-end min-h-[400px] lg:min-h-auto rounded-sm shadow-premium dark:shadow-none hover:shadow-premium-hover transition-all duration-700 ease-out hover:-translate-y-1 border border-transparent dark:border-white/5"
          >
            <AzimuteSymbol
              variant="white"
              size={400}
              className="absolute -top-10 -right-10 opacity-5 md:opacity-[0.08] pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1 dark:hidden"
            />
            <img 
              src="/assets/logos/Simbolo_Azimute_4.png" 
              alt="" 
              className="absolute -top-10 -right-10 w-[400px] h-[400px] opacity-0 dark:opacity-[0.08] pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1 hidden dark:block"
            />
            
            <div className="relative z-10">
              <span className="text-azimute-gold text-[11px] font-bold uppercase tracking-[0.2em] mb-5 block">
                DIFERENCIAL PRINCIPAL
              </span>
              <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-[#FAFAF7] dark:text-azimute-black leading-[1.1] mb-6">
                Técnica integrada
              </h3>
              <p className="text-[#FAFAF7]/85 dark:text-azimute-charcoal text-[15px] leading-relaxed max-w-[480px]">
                Projetos bem desenvolvidos, unindo o que acontece em campo ao que é produzido no escritório. Cada disciplina compatibilizada com as demais antes da entrega final — porque retrabalho em obra é o que mais custa caro.
              </p>
            </div>
          </motion.div>

          {/* Lado direito - Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-azimute-black/5 dark:border-white/10 p-8 flex flex-col hover:border-azimute-blue/20 dark:hover:border-white/20 hover:shadow-glass dark:hover:shadow-none transition-all ease-out rounded-sm"
              >
                <h4 className="text-azimute-blue dark:text-azimute-blue-soft text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
                  {item.title}
                </h4>
                <p className="text-azimute-charcoal dark:text-[#FAFAF7]/80 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
