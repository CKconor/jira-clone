import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter().query("tasks", {
  input: z
    .object({
      userId: z.string().nullable(),
    })
    .nullable(),
  async resolve({ ctx, input }) {
    if (input) {
      const id = input.userId;
      const tasks = await ctx.prisma.task.findMany({
        where: {
          userId: id,
        },
      });
      return tasks;
    }
  },
});
