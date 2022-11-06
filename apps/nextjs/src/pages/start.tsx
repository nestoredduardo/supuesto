import { signIn } from 'next-auth/react';
import { Layout } from '@revolut/ui-kit';

import type { NextPage } from 'next';

const StartPage: NextPage = () => {
  return (
    <Layout>
      <Layout.Menu></Layout.Menu>
    </Layout>
  );
};

export default StartPage;
