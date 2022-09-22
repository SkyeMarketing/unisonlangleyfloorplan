import {z} from "zod";

const CategorySchema = z
  .enum([
      "A",
      "B",
      "C",
    ], {
      description: "The category of the plan",
      invalid_type_error: "The category must be a string",
      required_error: "Category is required",
    }
  );
export default CategorySchema;
export type Category = z.infer<typeof CategorySchema>;