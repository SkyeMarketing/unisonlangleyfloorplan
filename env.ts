import { z } from "zod"

const Env = z.object({
  NODE_ENV: z.enum([
    "development",
    "production",
    "test",
  ]),
  TZ: z.string().optional(),
})

Env.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof Env> {}
  }
}
