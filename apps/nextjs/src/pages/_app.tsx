// src/pages/_app.tsx
import '../styles/globals.css';
import { Provider, UnifiedTheme } from '@revolut/ui-kit';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

import type { AppType } from 'next/app';
import { trpc } from '@/utils/trpc';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider mode="light" theme={UnifiedTheme}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
