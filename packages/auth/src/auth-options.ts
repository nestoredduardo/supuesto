import { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@supuesto/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async signIn({ account, profile }) {
      console.log(profile);

      return true;
    },
  },
  pages: {
    signIn: '/start',
  },
};
