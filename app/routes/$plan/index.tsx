import React from "react";
import type {LoaderFunction} from "@remix-run/node";
import {Form, Link, useLoaderData} from "@remix-run/react";
import type UnitData$Client from "~/types/UnitData$Client";
import {redirect} from "@remix-run/node";
import Plans from "~/data/plans/Plans.server";
import type PlanData from "~/types/PlanData";
import UnitButton from "~/components/UnitButton";

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
    <div className="flex flex-row">
      <div className="flex-grow">
        <img
          alt={`Plan ${data.name} Floorplan`}
          src={`/imgs/plans/${data.name}.png`}
        />
      </div>
      <div className="w-[20vw]">
        <Form method={"post"}>
          <input type={"hidden"} name={"plan"} value={data.name} />
          <div className="flex flex-row">
            <h2 className="flex-grow text-3xl font-bold">{`Plan ${data.name}`}</h2>
            <Link to={`/?plan=${data.name}`}>Change floorplan</Link>
          </div>

          <div className="border-4 flex flex-col text-xl">
            <p>{`${data.sqFt} Sq.Ft.`}</p>
            <div className="flex flex-row"><p>{`${data.beds} Bedroom`}</p>
              <p>{`${data.baths} Bath`}</p>
            </div>
          </div>

          <div
            className={`
              flex
              flex-wrap
              gap-4
              place-center
            `}
          >
            {
              data.units?.map((number: number) => <UnitButton key={number} number={number} />)
            }
          </div>
        </Form>
      </div>
    </div>
  )
}
export default $Plan