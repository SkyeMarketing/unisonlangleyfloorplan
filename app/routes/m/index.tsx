import CategorySchema from "~/schemas/Category.schema";
import {z} from "zod";
import {Form, useLoaderData} from "@remix-run/react";
import CategoryCarousel from "~/components/CategoryCarousel";
import AreaSchema from "~/schemas/Area.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import NameSchema from "~/schemas/Name.schema";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {redirect} from "@remix-run/node";
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
      <section
        className={`
          flex
          flex-col
          gap-y-2
        `}
      >
        {
          Object.entries(data).map(([category, plans]) => (
            <div
              className={`
                py-4 sm:py-6
              `}
              key={category}
            >
              <h1
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
              </h1>

              <CategoryCarousel plans={plans} />
            </div>
          ))
        }
      </section>
    </main>
  )
}