import { motion } from 'framer-motion';
import { portfolioItems } from '../lib/content';
import { InteractiveBentoGallery, MediaItemType } from './ui/interactive-bento-gallery';

export const Portfolio = () => {
  const mediaItems: MediaItemType[] = portfolioItems.map((item, index) => {
    let span = "col-span-1 md:col-span-1 md:row-span-1";
    
    // Create a dynamic bento layout for the 8 items
    if (index === 0) span = "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2";
    else if (index === 3) span = "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1";
    else if (index === 4) span = "col-span-1 md:col-span-1 md:row-span-2";
    else if (index === 7) span = "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1";

    return {
      id: index + 1,
      type: "image",
      title: item.label,
      desc: item.desc,
      url: item.src,
      span: span,
    };
  });

  return (
    <section className="bg-azimute-paper dark:bg-azimute-dark-paper py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-azimute-charcoal dark:text-[#FAFAF7]/70 mb-4">
            PROJETOS REALIZADOS
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.015em] text-azimute-black dark:text-[#FAFAF7]">
            Trabalho técnico em campo e no projeto.
          </h2>
        </motion.div>

        <InteractiveBentoGallery 
          mediaItems={mediaItems} 
          title="" 
          description="" 
        />
      </div>
    </section>
  );
};
