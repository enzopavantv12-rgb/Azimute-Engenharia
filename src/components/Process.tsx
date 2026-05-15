import { motion } from 'framer-motion';
import { processSteps } from '../lib/content';
import { ElegantCarousel } from './ui/elegant-carousel';

export const Process = () => {
  const carouselSlides = processSteps.map((step, index) => {
    const images = [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=1200&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=1200&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&h=1200&fit=crop&q=80',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=2'
    ];
    
    const accents = [
      '#D4A955', // Gold
      '#2C65A8', // Blue Soft
      '#8BA7B8', // Muted Blue
      '#C4956A'  // Terracotta
    ];

    return {
      title: step.title,
      subtitle: `Etapa ${step.number}`,
      description: step.desc,
      accent: accents[index],
      imageUrl: images[index]
    };
  });

  return (
    <section id="processo" className="bg-azimute-paper dark:bg-azimute-dark-paper py-[clamp(5rem,10vw,10rem)] relative overflow-hidden">
      <div className="w-full">
        <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-azimute-charcoal dark:text-[#FAFAF7]/70 mb-4">
              COMO TRABALHAMOS
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.015em] text-azimute-black dark:text-[#FAFAF7]">
              Um processo direto, sem fricção desnecessária.
            </h2>
          </motion.div>
        </div>

        <ElegantCarousel slides={carouselSlides} />
      </div>
    </section>
  );
};
