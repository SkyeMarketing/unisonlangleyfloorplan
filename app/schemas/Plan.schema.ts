import {z} from "zod";
import AreaSchema from "~/schemas/Area.schema";
import BathsSchema from "~/schemas/Baths.schema";
import CategorySchema from "~/schemas/Category.schema";
import EnabledSchema from "~/schemas/Enabled.schema";
import IdSchema from "~/schemas/Id.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import NameSchema from "~/schemas/Name.schema";
import UnitsSchema from "~/schemas/Units.schema";

const PlanSchema = z.object({
  area: AreaSchema,
  baths: BathsSchema,
  category: CategorySchema,
  enabled: EnabledSchema,
  id: IdSchema,
  layout: LayoutSchema,
  name: NameSchema,
  units: UnitsSchema,
});
export default PlanSchema;
export type Plan = z.infer<typeof PlanSchema>;