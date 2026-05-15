import { motion } from 'framer-motion';
import { AzimuteSymbol } from './AzimuteSymbol';
import { buildWhatsAppLink, WA_MESSAGES } from '../lib/whatsapp';

export const FinalCTA = () => {
  return (
    <section id="contato" className="bg-azimute-black dark:bg-[#080D14] relative overflow-hidden py-[clamp(6rem,12vw,12rem)]">
      <AzimuteSymbol
        variant="white"
        size={700}
        className="absolute top-1/2 -translate-y-1/2 -right-64 opacity-5 pointer-events-none"
      />

      <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[800px]"
        >
          <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-azimute-gold mb-6">
            FALE COM A AZIMUTE
          </span>
          <h2 className="font-serif font-light text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[#FAFAF7] mb-8">
            Tecnologia, precisão e <i className="text-azimute-gold">compromisso</i> para transformar sua demanda em resultado.
          </h2>
          <p className="text-[17px] leading-[1.65] text-[#FAFAF7]/70 mb-10 max-w-[540px]">
            Envie sua demanda pelo WhatsApp. Analisamos e retornamos com um orçamento personalizado para o seu projeto.
          </p>
          
          <a
            href={buildWhatsAppLink(WA_MESSAGES.finalCta)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-azimute-gold text-azimute-black px-10 py-5 text-[16px] font-semibold hover:bg-azimute-gold-deep transition-all duration-300 shadow-premium hover:shadow-none hover:-translate-y-0.5 rounded-sm"
          >
            Falar pelo WhatsApp 
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
