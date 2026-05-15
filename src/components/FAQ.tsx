import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../lib/content';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-azimute-bg dark:bg-azimute-dark-bg py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32 h-fit"
          >
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-azimute-charcoal dark:text-[#FAFAF7]/70 mb-4">
              PERGUNTAS FREQUENTES
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.015em] text-azimute-black dark:text-[#FAFAF7]">
              O que costumam perguntar antes de fechar conosco.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-8 flex flex-col border-t border-azimute-black/10 dark:border-white/10"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
