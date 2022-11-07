import { protectedProcedure, router } from '@/trpc';

import {
  newMovementValidator,
  newSeatValidator,
} from '@/modules/seats/validators';

export const seatsRouter = router({
  newMovement: protectedProcedure
    .input(newMovementValidator)
    .mutation(async ({ ctx, input }) => {
      const movement = await ctx.prisma.movement.create({
        data: {
          name: input.name,
          amount: input.amount,
          debit_id: input.debit_id,
          credit_id: input.credit_id,
        },
      });

      return movement;
    }),
  newSeat: protectedProcedure
    .input(newSeatValidator)
    .mutation(async ({ ctx, input }) => {
      const seat = await ctx.prisma.seat.create({
        data: {
          name: input.name,
          user_id: ctx.session.user.id,
          seat_type: input.seatType,
        },
      });

      return seat;
    }),
  getSeats: protectedProcedure.query(async ({ ctx }) => {
    const seats = await ctx.prisma.seat.findMany({
      where: {
        user_id: ctx.session.user.id,
      },
    });

    return seats;
  }),
});
