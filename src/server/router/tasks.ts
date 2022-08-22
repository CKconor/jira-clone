import { z } from "zod";
import { createProtectedRouter } from "./protected-router";

export const taskRouter = createProtectedRouter().query("getAll", {
  async resolve({ ctx }) {
    if (ctx.session) {
      const tasks = await ctx.prisma.task.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });
      return tasks;
    }
  },
});
