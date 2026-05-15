interface WhatsAppIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const WhatsAppIcon = ({ size = 20, color = '#1F1713', className }: WhatsAppIconProps) => {
  const isWhite = color === '#FFFFFF' || color === 'white';
  const src = isWhite 
    ? '/assets/icones%20whatsapp/whatsapp%20(1).png' 
    : '/assets/icones%20whatsapp/whatsapp.png';
    
  return (
    <img 
      src={src} 
      alt="WhatsApp" 
      width={size} 
      height={size} 
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
