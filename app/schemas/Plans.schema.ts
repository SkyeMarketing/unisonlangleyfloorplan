import {z} from "zod";
import PlanSchema from "~/schemas/Plan.schema";

const PlansSchema = z.array(PlanSchema);
export default PlansSchema;
export type Plans = z.infer<typeof PlansSchema>;