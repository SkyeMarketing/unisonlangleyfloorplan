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
export default AreaSchema;

export type Area = z.infer<typeof AreaSchema>

export const areaTransformer = (area: Area) => `${area} Sq.Ft.`