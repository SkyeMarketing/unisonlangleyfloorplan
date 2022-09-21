import {z} from "zod";

const EnabledSchema = z
  .boolean({
    description: "Whether the plan is enabled",
    invalid_type_error: "The enabled flag must be a boolean",
  })
  .optional()
  .default(true);
export default EnabledSchema;