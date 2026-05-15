import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildWhatsAppLink, WA_MESSAGES } from '../lib/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          href={buildWhatsAppLink(WA_MESSAGES.floating)}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform duration-200"
          style={{ boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)' }}
          aria-label="Falar no WhatsApp"
        >
          <WhatsAppIcon size={28} color="#FFFFFF" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
