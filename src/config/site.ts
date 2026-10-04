export const site = {
  name: 'Offsite Backup',
  origin: 'https://ggmaz.github.io',
  base: '/offsite-backup-website',
  business: {
    legalName: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
  },
};
export type Locale = 'sr' | 'en';
export const path = (value = '') => `${site.base}/${value.replace(/^\//, '')}`;
export const localePath = (locale: Locale) => path(locale === 'en' ? 'en/' : '');
export const absolute = (value: string) => new URL(value, site.origin).href;
