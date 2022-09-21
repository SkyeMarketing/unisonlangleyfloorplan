import {z} from "zod";
import PlanSchema from "~/schemas/Plan.schema";

const PlansSchema = z.array(PlanSchema, {
  description: "The plans for the project",
  invalid_type_error: "The plans must be an array of plans",
  required_error: "The plans are required",
});
export default PlansSchema;