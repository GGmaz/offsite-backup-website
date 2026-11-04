export interface Reference {
  name: string;
  logo?: string;
  width?: number;
  height?: number;
  website?: string;
  variant?: string;
}

export const references: Reference[] = [
  { name: 'Put-Invest', logo: 'reference-put-invest.png', width: 1563, height: 1151, website: 'https://put-invest.com/' },
  { name: 'AB & CO Geosystems', logo: 'reference-abco.png', width: 320, height: 151, website: 'https://abco.co.rs/' },
  { name: 'Potens', logo: 'reference-potens.png', width: 175, height: 139 },
  { name: 'Stan Invest 021', logo: 'reference-stan-invest.png', width: 95, height: 62, website: 'https://staninvest021.com/' },
  { name: 'Alivago' },
  { name: 'Očni centar Bjelica', logo: 'reference-bjelica.jpg', width: 200, height: 200, website: 'https://ocnicentarbjelica.rs/', variant: 'bjelica' },
];
