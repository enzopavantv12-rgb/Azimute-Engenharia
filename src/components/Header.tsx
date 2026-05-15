import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WA_MESSAGES, buildWhatsAppLink } from '../lib/whatsapp';
import { ThemeSwitch } from './ui/theme-switch-button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-azimute-bg/90 dark:bg-azimute-dark-bg/90 backdrop-blur-lg border-b border-azimute-black/5 dark:border-white/5 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16 h-[72px] flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img src="/assets/logos/Logo Azimute(2).png" alt="Azimute Engenharia e Topografia" className="h-10 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-105 dark:hidden" />
            <img src="/assets/logos/Logo Azimute(3).png" alt="Azimute Engenharia e Topografia" className="h-10 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-105 hidden dark:block" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-azimute-charcoal dark:text-[#FAFAF7]/80 hover:dark:text-[#FAFAF7] text-[14px] font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-azimute-gold transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full"></span>
              </a>
            ))}
            <ThemeSwitch />
            <a
              href={buildWhatsAppLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-azimute-blue text-azimute-bg px-5 py-2.5 text-[14px] font-medium hover:bg-azimute-blue-deep"
            >
              <WhatsAppIcon size={18} color="#FAFAF7" />
              WhatsApp
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <ThemeSwitch />
            <button
              className="text-azimute-charcoal dark:text-[#FAFAF7] p-2 -mr-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-azimute-charcoal/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-azimute-bg dark:bg-azimute-dark-bg p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-azimute-charcoal dark:text-[#FAFAF7]"
                  aria-label="Fechar menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-azimute-charcoal dark:text-[#FAFAF7] text-[18px] font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-6 border-t border-azimute-black/10">
                  <a
                    href={buildWhatsAppLink(WA_MESSAGES.hero)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-azimute-blue text-azimute-bg px-6 py-3 text-[16px] font-medium w-full"
                  >
                    <WhatsAppIcon size={20} color="#FAFAF7" />
                    WhatsApp
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
