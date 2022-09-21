import CategorySchema from "~/schemas/Category.schema";
import PlanSchema from "~/schemas/Plan.schema";
import {z} from "zod";

export const FilteredPlansSchema = PlanSchema
  .omit({"category": true, "enabled": true,}).array()

const CategorizedPlansSchema = z
  .record(CategorySchema, FilteredPlansSchema)
export default CategorizedPlansSchema;