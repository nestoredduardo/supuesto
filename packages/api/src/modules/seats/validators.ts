import z from 'zod';

export const newMovementValidator = z.object({
  name: z.string().min(1).max(100),
  amount: z.number().min(0),
  debit_id: z.string(),
  credit_id: z.string(),
});
export type NewMovementValidator = z.infer<typeof newMovementValidator>;

export const newSeatValidator = z.object({
  name: z.string().min(1).max(100),
  seatType: z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'INCOME', 'EXPENSE']),
});
export type NewSeatValidator = z.infer<typeof newSeatValidator>;
