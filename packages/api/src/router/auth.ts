import { TRPCError } from '@trpc/server';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    if (!user)
      throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });

    return user;
  }),
});
