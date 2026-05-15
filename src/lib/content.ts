import { buildWhatsAppLink, WA_MESSAGES } from './whatsapp';

export const services = [
  {
    eyebrow: 'Classe 01',
    title: 'Infraestrutura Urbana e Rodoviária',
    description: 'Projetos completos de loteamentos e acessos rodoviários, com integração entre traçado geométrico, terraplenagem, drenagem pluvial, redes de abastecimento e esgoto. Cada projeto é desenvolvido com compatibilização técnica entre disciplinas, garantindo que o que sai do escritório chegue ao campo sem retrabalho.',
    items: [
      'Projetos de loteamento e desmembramento',
      'Projetos rodoviários e acessos',
      'Projetos geométricos de vias',
      'Pavimentação',
      'Drenagem pluvial',
      'Rede de abastecimento de água',
      'Rede de esgoto',
    ],
    image: '/assets/portfolio/01-projeto-geometrico.jpg',
    ctaLink: buildWhatsAppLink(WA_MESSAGES.infraestrutura),
  },
  {
    eyebrow: 'Classe 02',
    title: 'Sala Técnica',
    description: 'Suporte técnico especializado para demandas pontuais e projetos complementares. Atendemos construtoras, mineradoras e profissionais da engenharia que precisam de cálculos, modelagens e apoio técnico para destravar etapas específicas da obra ou do projeto.',
    items: [
      'Projetos de terraplenagem',
      'Cálculo de volume e movimentação de terra',
      'Apoio técnico para mineração e infraestrutura',
      'Modelagem técnica para projetos de terceiros',
      'Compatibilização de projetos',
    ],
    image: '/assets/portfolio/02-terraplenagem.jpg',
    ctaLink: buildWhatsAppLink(WA_MESSAGES.salaTecnica),
  },
  {
    eyebrow: 'Classe 03',
    title: 'Topografia',
    description: 'Levantamentos de campo executados com equipamentos modernos de alta precisão, processados e entregues em formatos técnicos compatíveis com as próximas etapas do seu projeto. Da medição de um lote urbano ao aerolevantamento de grandes áreas.',
    items: [
      'Levantamento planialtimétrico cadastral',
      'Georreferenciamento de imóveis rurais',
      'Locação de obra e locação de projetos',
      'Aerofotogrametria com drone',
      'Levantamentos "as built"',
      'Projetos de divisão e desmembramento',
      'Regularização fundiária urbana e rural',
    ],
    image: '/assets/portfolio/04-planta-topografica.jpg',
    ctaLink: buildWhatsAppLink(WA_MESSAGES.topografia),
  },
] as const;

export const processSteps = [
  { number: '01', title: 'Contato e Diagnóstico', desc: 'Você nos envia a localização, dimensão aproximada da área e o tipo de serviço que precisa. A partir daí, fazemos uma análise preliminar da demanda.' },
  { number: '02', title: 'Análise Técnica', desc: 'Avaliamos complexidade, tipo de terreno, deslocamento e metodologia necessária. Quando o serviço envolve projeto, o escopo é dimensionado em detalhe.' },
  { number: '03', title: 'Orçamento Personalizado', desc: 'Apresentamos uma proposta clara, com escopo definido e sem custos ocultos. Alterações que surgirem durante a execução são alinhadas previamente.' },
  { number: '04', title: 'Execução e Entrega', desc: 'Conduzimos o serviço com acompanhamento direto do responsável técnico, da etapa de campo ao desenvolvimento do projeto e entrega final.' },
] as const;

export const differentials = [
  { title: 'Qualidade Técnica', desc: 'Padrão técnico exigente em cada etapa, do levantamento bruto ao memorial descritivo final.' },
  { title: 'Compromisso com Prazo', desc: 'Cada projeto tem prazo acordado em contrato e cumprido com seriedade — não vendemos urgência que não podemos entregar.' },
  { title: 'Equipamentos Modernos', desc: 'Atuamos com tecnologia atual em topografia, aerolevantamento e processamento de dados.' },
  { title: 'Zero Retrabalho', desc: 'Compatibilização entre disciplinas garante que o projeto que sai do escritório não volte para correção.' },
] as const;

export const faqs = [
  { q: 'Quanto custa um levantamento topográfico?', a: 'O valor depende do tamanho da área, localização, tipo de terreno, complexidade e equipamento necessário para execução. Após analisar essas informações, conseguimos passar um orçamento mais preciso.' },
  { q: 'Vocês atendem somente na região de Caratinga?', a: 'Não. A Azimute Engenharia atende em todo o território nacional, conforme a demanda do cliente e a necessidade do projeto.' },
  { q: 'Vocês trabalham com drone?', a: 'Sim. Realizamos aerolevantamentos e mapeamentos com drone, utilizando equipamentos modernos e softwares de processamento de alta precisão.' },
  { q: 'Quanto tempo demora para entregar um levantamento ou projeto?', a: 'O prazo varia conforme tamanho da área, complexidade e demanda do serviço. Após a análise inicial, conseguimos informar um prazo estimado de execução e entrega.' },
  { q: 'Vocês fazem somente topografia ou também executam projetos?', a: 'Além dos levantamentos topográficos, também desenvolvemos projetos de terraplenagem, loteamentos, acessos rodoviários, infraestrutura urbana e movimentação de terra.' },
  { q: 'Vocês conseguem resolver toda a parte técnica do projeto?', a: 'Sim. Buscamos entregar uma solução completa, desde o levantamento em campo até o desenvolvimento técnico e compatibilização dos projetos necessários.' },
] as const;

export const portfolioItems = [
  { 
    src: '/assets/portfolio/projeto-geometrico.png', 
    label: 'Projeto Geométrico', 
    desc: 'Projetos viários com precisão geométrica, segurança e integração urbana.', 
    tall: false 
  },
  { 
    src: '/assets/portfolio/terraplanagem.png', 
    label: 'Terraplanagem', 
    desc: 'Planejamento de movimentação de terra com estabilidade e eficiência executiva.', 
    tall: true 
  },
  { 
    src: '/assets/portfolio/pavimentacao.png', 
    label: 'Pavimentação', 
    desc: 'Projetos de pavimentação urbana e rodoviária com foco em durabilidade.', 
    tall: false 
  },
  { 
    src: '/assets/portfolio/planta-topografica.png', 
    label: 'Planta Topográfica', 
    desc: 'Levantamentos topográficos precisos para obras e regularizações.', 
    tall: false 
  },
  { 
    src: '/assets/portfolio/planta-locacao.png', 
    label: 'Planta de Locação', 
    desc: 'Locação técnica precisa para execução segura e alinhada ao projeto.', 
    tall: true 
  },
  { 
    src: '/assets/portfolio/abastecimento-agua.png', 
    label: 'Abastecimento d’Água', 
    desc: 'Projetos hidráulicos e redes de abastecimento sustentáveis.', 
    tall: false 
  },
  { 
    src: '/assets/portfolio/drenagem-pluvial.png', 
    label: 'Drenagem Pluvial', 
    desc: 'Soluções de drenagem urbana para prevenção de alagamentos.', 
    tall: false 
  },
  { 
    src: '/assets/portfolio/rede-esgoto.png', 
    label: 'Rede de Esgoto', 
    desc: 'Infraestrutura sanitária planejada para eficiência urbana.', 
    tall: false 
  },
] as const;
