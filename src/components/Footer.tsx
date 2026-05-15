import { Mail, MapPin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppLink, WA_MESSAGES } from '../lib/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-azimute-black dark:bg-[#080D14] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-6">
              <img src="/assets/logos/Logo Azimute(3).png" alt="Azimute Engenharia" className="h-10" />
            </div>
            <p className="text-[#FAFAF7]/70 text-[15px] leading-[1.6] max-w-[320px]">
              Engenharia, topografia e projetos com precisão e compromisso técnico.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-azimute-gold text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              CONTATO
            </h4>
            <ul className="flex flex-col gap-5 text-[#FAFAF7]/80 text-[14.5px]">
              <li>
                <a
                  href={buildWhatsAppLink(WA_MESSAGES.floating)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-azimute-gold"
                >
                  <WhatsAppIcon size={18} color="#DFCC5B" />
                  (33) 99813-6394
                </a>
              </li>
              <li>
                <a
                  href="mailto:azimuteengenhariaetopografia@gmail.com"
                  className="flex items-center gap-3 hover:text-azimute-gold"
                >
                  <Mail size={18} className="text-azimute-gold" strokeWidth={1.5} />
                  azimuteengenhariaetopografia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-azimute-gold shrink-0 mt-[2px]" strokeWidth={1.5} />
                <span>Caratinga / MG <br /> Atuação em todo o Brasil</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-azimute-gold text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              ACOMPANHE
            </h4>
            <ul>
              <li>
                <a
                  href="https://instagram.com/eng.nilsoncelio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FAFAF7]/80 hover:text-azimute-gold text-[14.5px]"
                >
                  <Instagram size={18} className="text-azimute-gold" strokeWidth={1.5} />
                  @eng.nilsoncelio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[12px] text-white/50">
            &copy; 2025 Azimute Engenharia e Topografia. Todos os direitos reservados.
          </p>
          <p className="text-[12px] text-white/50">
            Responsável Técnico: Eng. Nilson Célio · CREA ativo
          </p>
        </div>
      </div>
    </footer>
  );
};
