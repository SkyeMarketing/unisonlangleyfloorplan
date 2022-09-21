import type {z} from "zod";
import {useLoaderData} from "@remix-run/react";
import type PlanSchema from "~/schemas/Plan.schema";
import Plans from "~/data/Plans.server";
import CategorizedPlansSchema, {FilteredPlansSchema} from "~/schemas/CategorizedPlans.schema";

export const loader = () => {
  const categorizedPlans: z.infer<typeof CategorizedPlansSchema> = CategorizedPlansSchema.parse({});

  Plans
    .filter(({enabled}) => enabled)
    .forEach((plan: z.infer<typeof PlanSchema>) => {
      const {category, enabled, ...rest} = plan;

      if (!categorizedPlans[category]) {
        categorizedPlans[category] = [];
      }

      categorizedPlans[category]?.push(rest);
    })

  Object.entries(categorizedPlans).forEach(([category, plans]) => {
    console.log(category, plans);
  })
  return categorizedPlans
}
export default () => {
  const data: z.infer<typeof CategorizedPlansSchema> = useLoaderData();

  return (
    <>
      {
        Object
          .entries(data)
          .map(([category, plans]) => {
            console.log(category, plans);
            return <></>
        })
      }
    </>
  )
}