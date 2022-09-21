import {z} from "zod";

const LayoutSchema = z.enum([
  "studio",
  "one-bedroom",
  "one-bedroom-plus-den",
  "two-bedroom",
  "two-bedroom-plus-den",
  "jr-two-bedroom",
  "three-bedroom",
], {
  description: "The layout of the plan",
  invalid_type_error: "The layout must be a string",
  required_error: "The layout is required",
})
export default LayoutSchema;