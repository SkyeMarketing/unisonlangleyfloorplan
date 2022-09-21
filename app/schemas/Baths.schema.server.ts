import {z} from "zod";

const BathsSchema = z
  .number({
    description: "The number of bathrooms in the plan",
    invalid_type_error: "The number of bathrooms must be a number",
    required_error: "The number of bathrooms is required",
  })
  .min(1, {
    message: "The number of bathrooms must be at least 1",
  })
  .max(3, {
    message: "The number of bathrooms must be at most 3",
  })
  .transform((baths) => `${baths} Bath${baths > 1 ? 's' : ''}`);
export default BathsSchema;