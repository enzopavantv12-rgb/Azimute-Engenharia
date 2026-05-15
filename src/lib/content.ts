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
    src: 'https://images.unsplash.com/photo-1541888081696-6e3e1fc843bb?w=900&h=1200&fit=crop&q=80', 
    label: 'Projeto Geométrico', 
    desc: 'Desenvolvimento do traçado de via com integração rodoviária completa. Este projeto envolveu estudo de viabilidade, definição de curvas de concordância horizontais e verticais, além de garantir parâmetros de segurança e fluidez para tráfego pesado e leve, atendendo rigorosamente às normas técnicas vigentes (DNIT/DER).', 
    tall: false 
  },
  { 
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=1200&fit=crop&q=80', 
    label: 'Terraplenagem', 
    desc: 'Modelagem 3D e cálculo volumétrico para projeto de loteamento residencial de médio e alto padrão. O trabalho focou na otimização da movimentação de terra (corte e aterro), minimizando custos logísticos de transporte (bota-fora e jazida) e garantindo a estabilidade de taludes e platôs perfeitamente nivelados.', 
    tall: true 
  },
  { 
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&h=1200&fit=crop&q=80', 
    label: 'Pavimentação', 
    desc: 'Dimensionamento da estrutura do pavimento e detalhamento de seção transversal. O escopo considerou estudos geotécnicos do subleito, dimensionamento de base, sub-base e revestimento asfáltico (CBUQ), assegurando a durabilidade da via contra fadiga e deformações sob carga projetada.', 
    tall: false 
  },
  { 
    src: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=900&h=1200&fit=crop&q=80', 
    label: 'Planta Topográfica', 
    desc: 'Levantamento planialtimétrico cadastral de área rural para fins de parcelamento e georreferenciamento. Utilização de equipamentos GNSS RTK de alta precisão e Estação Total para mapeamento de divisas, acidentes geográficos, áreas de preservação e benfeitorias existentes.', 
    tall: false 
  },
  { 
    src: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=900&h=1200&fit=crop&q=80', 
    label: 'Planta de Locação', 
    desc: 'Planta de implantação com sistema de coordenadas georreferenciadas para início de obras. Fornecimento de eixos, gabaritos e marcos topográficos para garantir a transferência exata do que foi projetado em escritório para o campo (Zero Retrabalho).', 
    tall: true 
  },
  { 
    src: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=900&h=1200&fit=crop&q=80', 
    label: 'Drenagem Pluvial', 
    desc: 'Projeto completo de captação e escoamento de águas pluviais em loteamento urbano. Incluiu cálculos hidrológicos, dimensionamento de bocas de lobo, poços de visita, tubulações de concreto e dissipadores de energia, prevenindo alagamentos e erosões no empreendimento.', 
    tall: false 
  },
  { 
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=900&h=1200&fit=crop&q=80', 
    label: 'Rede de Esgoto', 
    desc: 'Dimensionamento da rede coletora de esgoto sanitário para implantação em loteamento urbano. O projeto contempla traçado da rede, dimensionamento hidráulico-sanitário, definição de declividades mínimas e locação de poços de visita, seguindo diretrizes da concessionária local.', 
    tall: false 
  },
  { 
    src: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=900&h=1200&fit=crop&q=80', 
    label: 'Abastecimento de Água', 
    desc: 'Projeto de rede de distribuição de água potável em loteamento. Compreende o cálculo de vazão, dimensionamento da rede malhada, verificação de pressões nas pontas de rede e detalhamento de peças especiais, garantindo o abastecimento contínuo a todos os lotes.', 
    tall: false 
  },
] as const;
