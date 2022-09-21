import {z} from "zod";

const IdSchema = z
  .string({
    description: "The unique identifier for the plan",
    invalid_type_error: "The id must be a string",
    required_error: "The id is required",
  });
export default IdSchema;