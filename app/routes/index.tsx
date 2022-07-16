import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import Plans from "~/data/plans/Plans.server";
import {Form, useLoaderData} from "@remix-run/react";
import type PlanData$Client from "~/types/PlanData$Client";
import type PlanData from "~/types/PlanData";
import PlanButton from "~/components/PlanButton";
import {redirect} from "@remix-run/node";

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

export default function Index() {
  const data: PlanData$Client = useLoaderData()

  return (
    <Form
      className={`
        px-16
        flex
        flex-col
        place-center
      `}
      method={"post"}
    >
      {
        Object
          .keys(data)
          .map((key) => {
              const plans = data[key];

              return (
                <fieldset className={`mt-4
                      mx-2 px-2 py-4`} key={key}>
                  <legend
                    className={`
                      font-serif
                      underline
                      decoration-4
                      decoration-aqua
                      text-2xl
                    `}
                  >
                    {key}
                  </legend>
                  <div
                    className={`
                        flex
                        flex-row
                        flex-wrap
                        gap-4
                      `}
                  >
                    {
                      plans.map(plan => {
                        return <PlanButton key={plan.name} plan={plan}/>
                      })
                    }
                  </div>
                </fieldset>
              )
            }
          )
      }
    </Form>
  );
}
