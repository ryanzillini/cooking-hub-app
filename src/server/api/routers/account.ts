import { createTRPCRouter, protectedProcedure } from "../trpc";

export const accountRouter = createTRPCRouter({
  welcome: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      where: { chef: true },
    });
  }),
});
