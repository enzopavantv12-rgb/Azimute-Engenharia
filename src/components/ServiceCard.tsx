interface ServiceCardProps {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
  image: string;
  ctaLink: string;
}

export const ServiceCard = ({ eyebrow, title, description, items, image, ctaLink }: ServiceCardProps) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-azimute-black/5 hover:border-azimute-blue/30 transition-all ease-[0.22,1,0.36,1] hover:-translate-y-2 hover:shadow-premium-hover rounded-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-azimute-blue-soft rounded-t-sm">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${image})`,
            filter: 'contrast(1.05) saturate(0.85)'
          }}
        />
        <div className="absolute inset-0 bg-azimute-blue/15 group-hover:bg-azimute-blue/25" />
        <div className="absolute top-4 left-4 bg-azimute-bg/90 backdrop-blur-sm px-3 py-1">
          <span className="text-azimute-gold text-[10px] font-bold uppercase tracking-[0.1em]">{eyebrow}</span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-[28px] leading-tight mb-4 text-azimute-black">{title}</h3>
        <p className="text-[14.5px] leading-relaxed text-azimute-charcoal mb-6">
          {description}
        </p>
        <ul className="flex flex-col gap-3 mb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[13.5px] text-azimute-charcoal leading-snug">
              <span className="text-azimute-gold mt-[2px]">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 border-t border-azimute-black/5">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-azimute-blue group/cta"
          >
            <span className="relative">
              Solicitar orçamento
              <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-azimute-gold transition-all ease-[0.22,1,0.36,1] group-hover/cta:w-full"></span>
            </span>
            <span className="transition-transform ease-[0.22,1,0.36,1] group-hover/cta:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
