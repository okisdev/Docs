import { defaultLanguage, languages } from '@/i18n';
import { createI18nMiddleware } from 'fumadocs-core/middleware';

export default createI18nMiddleware({
  languages,
  defaultLanguage,
  hideLocale: 'always',
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
