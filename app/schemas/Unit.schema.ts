import {z} from "zod";

const UnitSchema = z.number({
  description: "Available unit for the plan",
  invalid_type_error: "The unit must be a number",
});
export default UnitSchema;
export type Unit = z.infer<typeof UnitSchema>;