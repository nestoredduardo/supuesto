import { router } from '../trpc';
import { authRouter } from '../router/auth';
import { seatsRouter } from '../modules/seats';

export const appRouter = router({
  auth: authRouter,
  seats: seatsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
