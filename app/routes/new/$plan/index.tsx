import React from "react";
import {Form, Link, useLoaderData} from "@remix-run/react";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import type {PlanData} from "~/config/Plans.server";
import Plans from "~/config/Plans.server";
import UnitButton from "~/components/o/UnitButton";
import {layouts} from "~/config/Layout.server";
import {areas} from "~/config/Area.server";

export const action: ActionFunction = async ({request}): Promise<Response> => {
  const formData = await request.formData()

  const plan = formData.get("plan")
  const unit = formData.get("unit")

  if (plan === null) {
    return redirect(`/new`)
  }

  const maybePlan = Plans.find(p => p.plan === plan)

  if (maybePlan === undefined) {
    return redirect(`/new`)
  }

  if (unit === null) {
    return redirect(`/new/${plan}`)
  }

  if (typeof unit !== "string") {
    return redirect(`/new/${plan}`)
  }

  const unitNum = parseInt(unit)

  if (!maybePlan.units.includes(unitNum)) {
    return redirect("/new")
  }

  return redirect(`/new/${plan}/${unit}`)
}

export const loader: LoaderFunction = ({params}) => {
  const plan = params["plan"];

  if (!plan) {
    return redirect("/new");
  }

  const data = Plans
    .find(p => p.plan === plan);

  if (!data) {
    return redirect("/new");
  }

  return data;
}

const Route: React.FC = (): JSX.Element => {
  const data: PlanData = useLoaderData();
  const imgPath = `/imgs/plans/${data.plan.toUpperCase()}.webp`;

  return (
    <div
      className={`
        container
        mx-auto
        bg-white
        flex
        flex-col
        justify-center
        items-center
      `}
    >
      <img
        alt={`Plan ${data.plan.toUpperCase()} Floorplan`}
        className={`
          w-full
          overflow-hidden
        `}
        src={imgPath}
      />
      <Form className={`overflow-auto flex flex-col mx-auto place-center gap-4 mx-2 px-4 lg:w-2/3`} method={"post"}>
        <input type={"hidden"} name={"plan"} value={data.plan}/>
        <div className="font-serif flex flex-col mx-auto mt-2 px-4 py-4 border border-black rounded-lg text-center">
          <h2 className="uppercase text-3xl font-bold flex-grow text-aqua">{`Plan ${data.plan.toUpperCase()}`}</h2>
          <Link
            className={`hover:text-aqua hover:underline hover:decoration-2 hover:decocation-aqua transition-all duration-300 ease-in-out`}
            to={`/new?plan=${data.plan}`}>Change floorplan</Link>
        </div>

        <div className="flex flex-col text-xl text-center">
          <div className="flex flex-col font-serif uppercase">
            <p>
              {layouts[data.layout]}
            </p>
            <p>{`${data.baths} Bath`}</p>
          </div>
          <div className="flex flex-col font-serif uppercase">
            <p>{areas[data.area]}</p>
          </div>
        </div>

        <div
          className={`
              flex
              flex-row
              justify-center lg:justify-start
              items-start lg:items-center
              flex-wrap lg:flex-nowrap
              gap-y-2 md:gap-y-4 lg:gap-y-2
              gap-x-2 md:gap-x-4 lg:gap-x-2
              overflow-x-auto
              overflow-y-auto lg:overflow-y-hidden
              items-center
              snap-x lg:snap-y
              snap-mandatory
              snap-always
            `}
        >
          {
            data.units.map((number: number, idx) => <div key={number}
                                                         className={` my-2 snap-center snap-always scroll-ml-96`}>
              <UnitButton number={number}/></div>)
          }
        </div>
      </Form>
    </div>
  )
}
export default Route;