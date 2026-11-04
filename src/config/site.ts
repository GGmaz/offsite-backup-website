export const site = {
  name: 'LAN-ICT',
  origin: 'https://ebackup.pro',
  base: '/',
  // Public endpoint from Formspree → your form → Integration (not an API key).
  formspreeEndpoint: 'https://formspree.io/f/mbggwlnl',
  business: {
    legalName: '',
    address: '',
    phone: '+381604740388',
    email: 'info@ebackup.pro',
    hours: '',
  },
};
export type Locale = 'sr' | 'en';
export const path = (value = '') => `${site.base.replace(/\/$/, '')}/${value.replace(/^\/+/, '')}`;
export const localePath = (locale: Locale) => path(locale === 'en' ? 'en/' : '');
export const absolute = (value: string) => new URL(value, site.origin).href;

const inquiryEndpoint = (import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || site.formspreeEndpoint).trim();
if (inquiryEndpoint && !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(inquiryEndpoint)) {
  throw new Error('Set a valid Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID');
}
export const formspreeEndpoint = inquiryEndpoint;
