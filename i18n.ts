import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'en' as const;

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import('./messages/en.json')).default,
  };
});
