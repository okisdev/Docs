import '@/styles/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { I18nProvider } from 'fumadocs-ui/i18n';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children, params }: Readonly<{ children: ReactNode; params: { lang: string } }>) {
  return (
    <html lang={params.lang} className={inter.className} suppressHydrationWarning>
      <body>
        <I18nProvider
          locale={params.lang}
          locales={[
            {
              name: 'English',
              locale: 'en',
            },
            {
              name: '简体中文',
              locale: 'zh-CN',
            },
          ]}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
