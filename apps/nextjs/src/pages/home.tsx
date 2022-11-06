// Libraries
import { signOut } from 'next-auth/react';
import {
  Layout,
  SideNav,
  Avatar,
  BottomNav,
  Header,
  VStack,
  ActionMenu,
  useDropdown,
  Action,
} from '@revolut/ui-kit';
import * as Icons from '@revolut/icons';

// Utils
import { requireAuth } from '@/utils/requireAuth';
import { env } from '@/env/client.mjs';

// Components
import { Equity } from '@/modules/home';

// Type
import type { NextPage, GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = requireAuth(async () => {
  return {
    props: {},
  };
});

const HomePage: NextPage = () => {
  const userDropdown = useDropdown();

  return (
    <Layout>
      <Layout.Menu>
        <SideNav hide="*-md">
          <SideNav.Header>
            <SideNav.Avatar>
              <Avatar
                size={40}
                bg="white"
                color="white"
                image={`${env.NEXT_PUBLIC_APP_URL}/logo.svg`}
              >
                <Avatar.Badge image="https://picsum.photos/80" />
              </Avatar>
            </SideNav.Avatar>
            <SideNav.Title>Supuesto</SideNav.Title>
            <SideNav.Description>Just for fun</SideNav.Description>
          </SideNav.Header>
          <SideNav.Items>
            <SideNav.Item useIcon={Icons.Home} aria-current="page">
              Home
            </SideNav.Item>
            <SideNav.Item useIcon={Icons.BalanceSheet} aria-current="page">
              Patrimonio
            </SideNav.Item>
            <SideNav.Item useIcon={Icons.CreditBag} aria-current="page">
              Resultados
            </SideNav.Item>
            <SideNav.Item useIcon={Icons.ArrowBulkRequest} aria-current="page">
              Movimientos
            </SideNav.Item>
          </SideNav.Items>
        </SideNav>

        <BottomNav variant="floating" role="tablist" hide="md-*">
          <BottomNav.Item
            role="tab"
            useIcon={Icons.Home}
            aria-selected
            aria-label="Home"
          />
          <BottomNav.Item
            role="tab"
            useIcon={Icons.BalanceSheet}
            aria-selected
            aria-label="Patrimonio"
          />
          <BottomNav.Item
            role="tab"
            useIcon={Icons.CreditBag}
            aria-selected
            aria-label="Resultados"
          />
          <BottomNav.Item
            role="tab"
            useIcon={Icons.ArrowBulkRequest}
            aria-selected
            aria-label="Movimientos"
          />
        </BottomNav>
      </Layout.Menu>
      <Layout.Main>
        <Header variant="main">
          <Header.Title>Hola 🫡!</Header.Title>
          <Header.Actions>
            <Action {...userDropdown.getAnchorProps()}>
              <Avatar
                image="https://picsum.photos/80"
                aria-label="Open notification center"
              />
            </Action>

            <ActionMenu
              {...userDropdown.getTargetProps()}
              placement="bottom-end"
            >
              <ActionMenu.Group>
                <ActionMenu.Item
                  useIcon={Icons.LogoutDoor}
                  onClick={() => signOut()}
                >
                  Cerrar sesión
                </ActionMenu.Item>
              </ActionMenu.Group>
            </ActionMenu>
          </Header.Actions>
        </Header>
        <VStack space="s-16">
          <Equity />
        </VStack>
      </Layout.Main>
    </Layout>
  );
};

export default HomePage;
