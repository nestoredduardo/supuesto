import { useRouter } from 'next/router';
import { Layout, Header, Button } from '@revolut/ui-kit';

// Utils
import { requireAuth } from '@/utils/requireAuth';

import type { NextPage, GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = requireAuth(async () => {
  return {
    props: {},
  };
});

const NewPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Layout.Main>
        <Header variant="item">
          <Header.BackButton aria-label="Close" onClick={() => router.back()} />
          <Header.Title>Jason Moe</Header.Title>
        </Header>
      </Layout.Main>
      <Layout.Actions>
        <Button elevated variant="black">
          Agregar movimiento
        </Button>
      </Layout.Actions>
    </Layout>
  );
};

export default NewPage;
