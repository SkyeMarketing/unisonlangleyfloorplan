import type {LoaderFunction} from "@remix-run/node";
import PLANS from "~/data/Plans.server";
import {redirect} from "@remix-run/node";
import {z} from "zod";
import AreaSchema, {areaTransformer} from "~/schemas/Area.schema";
import BathsSchema, {bathsTransformer} from "~/schemas/Baths.schema";
import NameSchema, {nameTransformer} from "~/schemas/Name.schema";
import UnitsSchema from "~/schemas/Units.schema";
import LayoutSchema, {layoutTransformer} from "~/schemas/Layout.schema";
import {Link, useLoaderData} from "@remix-run/react";
import PlanUnit from "~/components/PlanUnit";
import PlanCarousel from "~/components/PlanCarousel";

const LoaderDataSchema = z.object({
  area: AreaSchema,
  baths: BathsSchema,
  layout: LayoutSchema,
  name: NameSchema,
  units: UnitsSchema,
})
type LoaderData = z.infer<typeof LoaderDataSchema>;

export const loader: LoaderFunction = ({params}) => {
  const {plan} = params;

  console.log(params)

  if (!plan) {
    redirect(`/`)
  }

  const findPlan = PLANS
    .filter(({enabled}) => enabled)
    .map(({area, baths, layout, name, units}) => {
      return {area, baths, layout, name, units};
    })
    .find(p => p.name === plan)

  if (!findPlan) {
    return redirect("/")
  }

  return LoaderDataSchema.parse(findPlan);

}
export default () => {
  const data: LoaderData = useLoaderData();

  return (
    <main
      className={`
        container
        flex
        flex-col
        mx-auto
        lg:space-y-8
        overflow-hidden
      `}
    >
      <img
        className={`
          lg:w-3/4
          mx-auto
          justify-self-center
        `}
        alt={`${data.name} floorplan`}
        src={`/imgs/plans/${data.name}.webp`}
      />

      <div
        className={`
          flex
          flex-col
          justify-center
          items-center
          gap-4
        `}
      >
        <div
          className={`
            border-2
            border-aqua
            rounded-lg
            px-4
            py-2
            mb-2
          `}
        >
          <div
            className={`
              flex
              flex-col
              font-serif
              gap-x-1
              text-sm
              py-4
              px-2
              w-64
              text-center
            `}
          >
            <h1
              className={`
                uppercase
                text-3xl
                font-bold
                text-aqua
              `}
            >
              {nameTransformer(data.name)}
            </h1>
            <Link
              to={`/m`}
              className={`
                decoration-1
                underline
                hover:text-aqua 
                hover:underline 
                hover:decoration-2 
                hover:decocation-aqua 
                transition-all 
                duration-300 
                ease-in-out
              `}
            >
              Change floorplan
            </Link>
          </div
          >
          <ul
            className={`
              flex
              flex-col
              items-center
              text-xl
              uppercase
              font-serif
            `}
          >
            <li>{layoutTransformer(data.layout)}</li>
            <li>{bathsTransformer(data.baths)}</li>
            <li>{areaTransformer(data.area)}</li>
          </ul>
        </div>

        {/*<div
          className={`
            hidden lg:block
          `}
        >
          <PlanCarousel plan={data.name} units={data.units} />
        </div>*/}

        <ul
          className={`
            flex
            flex-wrap
            flex-row
            gap-4
            overflow-x-auto
            py-2
            justify-center
            items-center
            mx-auto
          `}
        >
          {data.units.map((unit) => (
            <li key={unit}>
              <Link to={`/${data.name}/${unit}`}><PlanUnit unit={unit}/> </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}