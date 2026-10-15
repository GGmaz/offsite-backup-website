export const site = {
  name: 'LAN-ICT',
  origin: 'https://ebackup.pro',
  base: '/',
  business: {
    legalName: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
  },
};
export type Locale = 'sr' | 'en';
export const path = (value = '') => `${site.base.replace(/\/$/, '')}/${value.replace(/^\/+/, '')}`;
export const localePath = (locale: Locale, archived = false) => path(`${archived ? 'old/' : ''}${locale === 'en' ? 'en/' : ''}`);
export const absolute = (value: string) => new URL(value, site.origin).href;
