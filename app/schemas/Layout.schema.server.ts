import {z} from "zod";

const LayoutSchema = z.enum([
  "studio",
  "one-bedroom",
  "one-bedroom-plus-den",
  "two-bedroom",
  "two-bedroom-plus-den",
  "jr-2-bedroom",
  "three-bedroom",
], {
  description: "The layout of the plan",
  invalid_type_error: "The layout must be a string",
  required_error: "The layout is required",
})
  .transform((layout) => {
    switch (layout) {
      case "studio":
        return "Studio";
      case "one-bedroom":
        return "1 Bedroom";
      case "one-bedroom-plus-den":
        return "1 Bedroom + Den";
      case "two-bedroom":
        return "2 Bedroom";
      case "two-bedroom-plus-den":
        return "2 Bedroom + Den";
      case "jr-2-bedroom":
        return "Jr. 2 Bedroom";
      case "three-bedroom":
        return "3 Bedroom";
    }
  })
export default LayoutSchema;