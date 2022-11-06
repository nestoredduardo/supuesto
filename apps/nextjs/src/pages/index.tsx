import type { NextPage } from 'next';
import Head from 'next/head';
import { signIn, signOut } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import type { inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from '@acme/api';

const Home: NextPage = () => {
  return <></>;
};

export default Home;
