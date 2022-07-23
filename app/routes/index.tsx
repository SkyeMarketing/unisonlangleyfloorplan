import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import Plans from "~/data/plans/Plans.server";
import {Form, useLoaderData} from "@remix-run/react";
import type PlanData$Client from "~/types/PlanData$Client";
import type PlanData from "~/types/PlanData";
import PlanButton from "~/components/PlanButton";
import React from "react";

export const action: ActionFunction = async ({request}): Promise<Response> => {
  const formData = await request.formData()

  const plan = formData.get("plan")

  if (Plans.find(p => p.name === plan) !== undefined) {
    return redirect(`/${plan}`)
  }

  return redirect("/")
}

export const loader: LoaderFunction = (): PlanData$Client => {
  const data: PlanData$Client = {}

  Plans
    .filter((plan => !plan.unavailable))
    .forEach(({baths, beds, name, sqFt, category}: PlanData) => {
      let cat = data[category]

      if (cat === undefined) {
        cat = [{baths, beds, name, sqFt}]
      } else {
        cat.push({baths, beds, name, sqFt})
      }

      data[category] = cat
    })

  return data
}

const Index: React.FC = (): JSX.Element => {
  const data: PlanData$Client = useLoaderData()

  return (

    <div
      className={`
          container
          mx-auto
          px-8
          py-16
          flex
          justify-center
        `}
    >
      <Form
        className={`
            flex
            flex-col
            flex-wrap
            gap-y-4
          `}
        method={"post"}
      >
        {
          Object
            .entries(data)
            .map(([category, plans]) => {
              return (
                <fieldset
                  className={`
                      mt-16
                      mx-2 
                      px-2 
                      py-8
                      
                    `}
                  key={category}
                >
                  <legend
                    className={`
                        font-serif
                        text-7xl
                        font-bold
                        text-center
                        text-aqua
                      `}
                  >
                    {category}
                  </legend>

                  <div
                    className={`
                        flex
                        flex-row
                        flex-wrap
                        gap-4
                        justify-center
                        items-center
                        my-8
                      `}
                  >
                    {
                      plans
                        .map((plan) => {
                          return (
                            <PlanButton
                              key={plan.name}
                              plan={plan}
                            />
                          )
                        })
                    }
                  </div>
                </fieldset>
              )
            })
        }
      </Form>
    </div>
  );
}
export default Index