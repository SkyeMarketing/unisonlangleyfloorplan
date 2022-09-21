import React from "react";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {Form, Link, useLoaderData} from "@remix-run/react";
import type UnitData$Client from "~/types/UnitData$Client";
import {redirect} from "@remix-run/node";
import Plans from "~/data/plans/Plans.server";
import type PlanData from "~/types/PlanData";
import UnitButton from "~/components/o/UnitButton";

export const action: ActionFunction = async ({request}): Promise<Response> => {
  const formData = await request.formData()

  const plan = formData.get("plan")
  const unit = formData.get("unit")

  if(plan === null) {
    return redirect(`/`)
  }

  const maybePlan = Plans.find(p => p.name === plan)

  if(maybePlan === undefined) {
    return redirect(`/`)
  }

  if(unit === null) {
    return redirect(`/${plan}`)
  }

  if (typeof unit !== "string") {
    return redirect(`${plan}`)
  }

  const unitNum = parseInt(unit)

  if (!maybePlan.units.includes(unitNum)) {
    return redirect("/")
  }

  return redirect(`/${plan}/${unit}`)
}

export const loader: LoaderFunction = ({params}): UnitData$Client | Response => {
  const plan: string | undefined = params["plan"]

  if (plan === undefined) {
    return redirect("/")
  }

  const data = Plans
    .filter((p: PlanData) => !p.unavailable)
    .find((p: PlanData) => p.name === plan)

  if (data === undefined) {
    return redirect("/")
  }

  return data
}

const $Plan: React.FC = (): JSX.Element => {
  const data: UnitData$Client = useLoaderData()

  return (
    <div
      className={`
        container
        mx-auto
        bg-white
        overflow-auto
        flex
        flex-col
        justify-center
        h-full
        `}
    >
      <div
        className={` 
        `}
      >
        <img
          className={`w-full`}
          alt={`Plan ${data.name} Floorplan`}
          src={`/imgs/plans/${data.name}.webp`}
        />
      </div>
        <Form className={`flex flex-col gap-4 mx-2 px-4`} method={"post"}>
          <input type={"hidden"} name={"plan"} value={data.name} />
          <div className="font-serif flex flex-col `todo:fix justify` place-center mt-2 py-4 border border-black rounded-lg text-center">
            <h2 className="uppercase text-3xl font-bold flex-grow text-aqua">{`Plan ${data.name}`}</h2>
            <Link className={`hover:text-aqua hover:underline hover:decoration-2 hover:decocation-aqua transition-all duration-300 ease-in-out`} to={`/?plan=${data.name}`}>Change floorplan</Link>
          </div>

          <div className="flex flex-col text-xl text-center">
            <div className="flex flex-col font-serif upperc ase uppercase">
              <p>
                {
                  typeof data.beds === "number"
                    ? `${data.beds} ${data.beds > 1 ? "Bedrooms" : "Bedroom"}`
                    : typeof data.beds === "string"
                      ? data.beds
                      : `${data.beds.pre ?? ""} ${data.beds.count} ${data.beds.post ?? ""}`
                }
              </p>
              <p>{`${data.baths} Bath`}</p>
            </div>
            <div className="flex flex-col font-serif uppercase">
              <p>{`${data.sqFt} Sq.Ft.`}</p>
            </div>
          </div>

          <div
            className={`
              md:w-full
              flex md:flex
              flex-col lg:flex-row
              gap-x-2 md:gap-x-8
              gap-y-4
              md:flex-wrap
              overflow-auto
              justify-center
              items-center
            `}
          >
            {
              data.units.map((number: number) => <div key={number} className={`my-2`}><UnitButton number={number} /></div>)
            }
          </div>
        </Form>
    </div>
  )
}
export default $Plan