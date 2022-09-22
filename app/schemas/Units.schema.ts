import {z} from "zod";
import UnitSchema from "~/schemas/Unit.schema";

const UnitsSchema = z.array(UnitSchema, {
  description: "Available units for the plan",
  invalid_type_error: "The units must be an array of numbers",
  required_error: "The units are required",
});
export default UnitsSchema;
export type Units = z.infer<typeof UnitsSchema>;