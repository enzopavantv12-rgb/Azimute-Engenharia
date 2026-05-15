type Variant = 'color' | 'mono' | 'white' | 'black';

interface AzimuteSymbolProps {
  size?: number;
  variant?: Variant;
  className?: string;
}

const getSrc = (variant: Variant) => {
  switch (variant) {
    case 'white':
      return '/assets/logos/Símbolo Azimute(3).png';
    case 'black':
      return '/assets/logos/Símbolo Azimute(4).png';
    case 'color':
    case 'mono':
    default:
      return '/assets/logos/Símbolo Azimute(2).png';
  }
};

export const AzimuteSymbol = ({ size = 48, variant = 'color', className = '' }: AzimuteSymbolProps) => {
  return (
    <img
      src={getSrc(variant)}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};
