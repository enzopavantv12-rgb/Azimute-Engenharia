export const WHATSAPP_NUMBER = '5533998136394';

export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  hero: 'Olá, vim pela landing page da Azimute e gostaria de mais informações sobre os serviços de engenharia e topografia.',
  infraestrutura: 'Olá, vim pela landing page da Azimute e gostaria de um orçamento para projetos de infraestrutura urbana ou rodoviária (loteamento, acessos, pavimentação, drenagem).',
  salaTecnica: 'Olá, vim pela landing page da Azimute e gostaria de um orçamento para serviços da Sala Técnica (terraplenagem, cálculo de volumes, apoio técnico).',
  topografia: 'Olá, vim pela landing page da Azimute e gostaria de um orçamento para serviços de topografia (levantamento, georreferenciamento, drone, locação).',
  floating: 'Olá, vim pela landing page da Azimute Engenharia e gostaria de conversar sobre um serviço.',
  finalCta: 'Olá, vim pela landing page da Azimute e quero conversar sobre o meu projeto.',
} as const;
