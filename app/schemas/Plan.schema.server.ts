import {z} from "zod";
import AreaSchema from "~/schemas/Area.schema.server";
import BathsSchema from "~/schemas/Baths.schema.server";
import CategorySchema from "~/schemas/Category.schema.server";
import EnabledSchema from "~/schemas/Enabled.schema.server";
import IdSchema from "~/schemas/Id.schema.server";
import LayoutSchema from "~/schemas/Layout.schema.server";
import NameSchema from "~/schemas/Name.schema.server";
import UnitsSchema from "~/schemas/Units.schema.server";

export const PlanSchema = z.object({
  area: AreaSchema,
  baths: BathsSchema,
  category: CategorySchema,
  enabled: EnabledSchema,
  id: IdSchema,
  layout: LayoutSchema,
  name: NameSchema,
  units: UnitsSchema,
})

type Plan = z.infer<typeof PlanSchema>;
export default Plan;