import PlanSchema, {Plan} from "~/schemas/Plan.schema";
import CategorySchema from "~/schemas/Category.schema";
import {z} from "zod";
import Plans from "~/data/Plans.server";
import {Form, useLoaderData} from "@remix-run/react";
import CategoryCarousel from "~/components/CategoryCarousel";
import AreaSchema from "~/schemas/Area.schema";
import IdSchema from "~/schemas/Id.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import NameSchema from "~/schemas/Name.schema";

const LoaderDataSchema = z
  .record(CategorySchema, z
    .array(z.object({
      area: AreaSchema,
      id: IdSchema,
      layout: LayoutSchema,
      name: NameSchema,
    }))
  );
type LoaderData = z.infer<typeof LoaderDataSchema>;

export const loader = () => {
  const data: LoaderData = {};
  Plans
    .filter(({enabled}) => enabled)
    .map(({baths, enabled, units, ...plan}) => plan)
    .forEach(({category, ...plan}) => {
      if (data[category]) {
        data[category]?.push(plan);
      } else {
        data[category] = [plan];
      }
    });
  return data;
}
export default () => {
  const data: LoaderData = useLoaderData();
  return (
    <main
      className={`
        container
        px-8
        py-12
        mx-auto
        bg-white
      `}
    >
      <Form
        className={`
          flex
          flex-col
          gap-y-2
        `}
        method="post"
      >
        {
          Object.entries(data).map(([category, plans]) => (
            <fieldset
              className={`
                mt-4 md:mt-8
              `}
              key={category}
            >
              <legend
                className={`
                  mx-auto
                  uppercase
                  font-serif
                  text-4xl md:text-7xl
                  font-bold
                  text-center
                  text-aqua
                `}
              >
                {category}
              </legend>

              <CategoryCarousel plans={plans} />
            </fieldset>
          ))
        }
      </Form>
    </main>
  )
}