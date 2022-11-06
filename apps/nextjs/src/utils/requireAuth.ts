// Types
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

// Utils
import { getServerSession } from '@supuesto/auth';

export const requireAuth = (getServerSideProps: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getServerSession(ctx);

    if (!session) {
      return {
        redirect: {
          destination: '/start',
          permanent: false,
        },
      };
    }

    return getServerSideProps(ctx);
  };
};
