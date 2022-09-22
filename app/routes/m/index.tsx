import PlanSchema, {Plan} from "~/schemas/Plan.schema";
import CategorySchema from "~/schemas/Category.schema";
import {z} from "zod";
import Plans from "~/data/Plans.server";
import {useLoaderData} from "@remix-run/react";
import {Category} from "~/schemas/Category.schema"

const FilteredPlanSchema = PlanSchema.omit({
  baths: true,
  category: true,
  enabled: true,
});
type FilteredPlan = z.infer<typeof FilteredPlanSchema>;
const LoaderDataSchema = z
  .record(CategorySchema, z
    .array(FilteredPlanSchema)
  );
type LoaderData = z.infer<typeof LoaderDataSchema>;

export const loader = () => {
  const data: LoaderData = {};
  Plans
    .filter(({enabled}) => enabled)
    .map(({baths, enabled, ...plan}) => plan)
    .forEach(({category, ...plan}) => {
      if (data[category]) {
        data[category]?.push(plan);
      } else {
        data[category] = [plan];
      }
    });
  console.log(data);
  return data;
}
export default () => {
  const data: LoaderData = useLoaderData();
  return (<></>)
}