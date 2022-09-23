import PlanSchema, {Plan} from "~/schemas/Plan.schema";
import CategorySchema from "~/schemas/Category.schema";
import {z} from "zod";
import {Form, useLoaderData} from "@remix-run/react";
import CategoryCarousel from "~/components/CategoryCarousel";
import AreaSchema from "~/schemas/Area.schema";
import IdSchema from "~/schemas/Id.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import NameSchema from "~/schemas/Name.schema";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {json, redirect} from "@remix-run/node";
import PLANS from "~/data/Plans.server";

const FormDataSchema = z.object({
  plan: z.string(),
})
type FormData = z.infer<typeof FormDataSchema>

export const action: ActionFunction = async ({request}) => {
  return redirect(`/m/t?plan=${FormDataSchema.parse(await request.formData()).plan}`)
}

const LoaderDataSchema = z
  .record(CategorySchema, z
    .array(z.object({
      area: AreaSchema,
      layout: LayoutSchema,
      name: NameSchema,
    }))
  );
type LoaderData = z.infer<typeof LoaderDataSchema>;

export const loader: LoaderFunction = () => {
  const data: LoaderData = {};
  PLANS
    .filter(({enabled}) => enabled)
    .map(({baths, enabled, units, ...plan}) => plan)
    .forEach(({category, ...plan}) => {
      console.log(category)
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
        px-3
        py-6
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
                py-4 sm:py-6
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
                  py-4 md:py-8
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