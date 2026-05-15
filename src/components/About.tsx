import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="sobre" className="bg-azimute-bg dark:bg-azimute-dark-bg py-[clamp(5rem,10vw,10rem)] relative">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-azimute-charcoal dark:text-[#FAFAF7]/70 mb-4">
              SOBRE NÓS
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.015em] text-azimute-black dark:text-[#FAFAF7] mb-8">
              Azimute Engenharia: direção, <i className="text-azimute-blue">precisão</i> e engenharia aplicada.
            </h2>
            
            <div className="space-y-6 text-[15.5px] leading-[1.7] text-azimute-charcoal dark:text-[#FAFAF7]/80 mb-12">
              <p>
                Sediada em Caratinga, Minas Gerais, e com atuação em todo o território nacional, a Azimute Engenharia foi criada para oferecer soluções técnicas de topografia, georreferenciamento e projetos de infraestrutura com o rigor que o setor exige.
              </p>
              <p>
                O nome 'Azimute' — termo técnico que define direção e ângulo — traduz o compromisso da empresa com planejamento, confiabilidade e execução. Cada serviço passa pela coordenação direta do responsável técnico, garantindo padronização, controle e acompanhamento próximo em todas as etapas.
              </p>
              <p>
                Atendemos construtoras, loteadoras, incorporadoras, mineradoras, parceiros da engenharia e clientes finais que precisam de soluções técnicas integradas — do levantamento de campo ao desenvolvimento do projeto executivo.
              </p>
            </div>

            <div className="pt-8 border-t border-azimute-black/10 dark:border-white/10">
              <dl className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-azimute-charcoal dark:text-[#FAFAF7]/60 mb-1">Responsável Técnico</dt>
                  <dd className="text-[14.5px] font-medium text-azimute-blue dark:text-azimute-blue-soft">Eng. Nilson Célio</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-azimute-charcoal dark:text-[#FAFAF7]/60 mb-1">Registro Profissional</dt>
                  <dd className="text-[14.5px] font-medium text-azimute-blue dark:text-azimute-blue-soft">CREA ativo</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-azimute-charcoal dark:text-[#FAFAF7]/60 mb-1">Sede</dt>
                  <dd className="text-[14.5px] font-medium text-azimute-blue dark:text-azimute-blue-soft">Caratinga / MG</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-azimute-charcoal dark:text-[#FAFAF7]/60 mb-1">Atuação</dt>
                  <dd className="text-[14.5px] font-medium text-azimute-blue dark:text-azimute-blue-soft">Território Nacional</dd>
                </div>
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative aspect-[4/5] bg-azimute-blue-soft dark:bg-[#080D14] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80)',
                filter: 'contrast(1.05) saturate(0.85)'
              }}
            />
            <div className="absolute inset-0 bg-azimute-blue/20 dark:bg-azimute-black/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
