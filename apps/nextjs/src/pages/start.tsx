// Libraries
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';
import { Layout, Header, Button, Flex } from '@revolut/ui-kit';

// Utils
import { env } from '@/env/client.mjs';

// Types
import type { NextPage, GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

const StartPage: NextPage = () => {
  return (
    <Layout>
      <header className="absolute flex py-2 h-16 w-full items-center border-b border-gray-200 px-4 xl:px-56">
        <div className="relative h-full w-36">
          <Image
            src="/isologo.svg"
            alt="dLuka"
            fill
            sizes="(max-width: 640px) 50px, 640px"
          />
        </div>
      </header>
      <Layout.Main>
        <Header variant="main" marginTop="s-72">
          <Header.Title
            style={{
              lineHeight: '1.5',
            }}
          >
            Ingresa a Supuesto
          </Header.Title>
          <Header.Description>
            Ingresa con tu cuenta de Google para continuar
          </Header.Description>
        </Header>
        <Button
          variant="black"
          onClick={() =>
            signIn('google', {
              callbackUrl: `${env.NEXT_PUBLIC_APP_URL}/dashboard`,
            })
          }
          marginTop="s-32"
        >
          <div className="flex w-full gap-2 items-center">
            <Image
              src="/integrations/google.png"
              alt="Google"
              width={36}
              height={36}
            />
            Ingresar con Google
          </div>
        </Button>
      </Layout.Main>
    </Layout>
  );
};

export default StartPage;
