import {z} from "zod";

const AreaSchema = z
  .enum([
    "464",
    "582",
    "633",
    "646",
    "716",
    "797",
    "827",
    "859",
    "863",
    "880",
    "1042",
    "1043",
  ], {
    description: "The area of the plan",
    invalid_type_error: "The area must be a string",
    required_error: "Area is required",
  })
  .transform((area) => `${area} Sq.Ft.`);
export default AreaSchema;