import { z } from "zod";
import { createProtectedRouter } from "./protected-router";

export const userRouter = createProtectedRouter().query("getUser", {
  async resolve({ ctx }) {
    if (ctx.session) {
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: ctx.session.user.id,
        },
      });
      return user;
    }
  },
});
