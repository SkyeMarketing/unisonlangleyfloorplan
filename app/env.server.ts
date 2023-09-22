import { z } from "zod"

const Env = z.object({
  ZAPIER_WEBHOOK: z.string().url(),  
})

Env.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof Env> {}
  }
}
