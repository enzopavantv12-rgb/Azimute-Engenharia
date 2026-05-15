export const CredibilityStrip = () => {
  const items = [
    {
      title: 'ATUAÇÃO NACIONAL',
      desc: 'Atendemos projetos em todo o território brasileiro.',
    },
    {
      title: 'PRECISÃO TÉCNICA',
      desc: 'Equipamentos e softwares modernos de alta precisão.',
    },
    {
      title: 'AEROLEVANTAMENTO',
      desc: 'Mapeamento aéreo com drones para áreas amplas.',
    },
    {
      title: 'RESPONSABILIDADE',
      desc: 'Engenheiro civil responsável pelo projeto.',
    },
  ];

  return (
    <section className="bg-azimute-black py-12">
      <div className="max-w-container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`px-4 lg:px-8 first:pl-0 last:pr-0 ${
                index % 2 !== 0 ? 'border-l border-azimute-gold/20' : 'lg:border-l lg:border-azimute-gold/20 lg:first:border-l-0'
              }`}
            >
              <h4 className="text-azimute-gold text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
                {item.title}
              </h4>
              <p className="text-[#FAFAF7]/75 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
