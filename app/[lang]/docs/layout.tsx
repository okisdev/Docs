import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '@/app/layout.config';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { projects } from '@/config/project';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <DocsLayout
      sidebar={{
        banner: <RootToggle options={projects} />,
      }}
      i18n
      {...docsOptions}
    >
      {children}
    </DocsLayout>
  );
}
