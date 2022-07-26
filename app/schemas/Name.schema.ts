import {z} from "zod";

const NameSchema = z
  .string({
    description: "The name of the plan",
    invalid_type_error: "The name must be a string",
    required_error: "The name is required",
  })
export default NameSchema;
export type Name = z.infer<typeof NameSchema>;

export const nameTransformer = (name: Name) => `Plan ${name}`