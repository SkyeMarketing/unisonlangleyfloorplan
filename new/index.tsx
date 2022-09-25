import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {json, redirect} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import React from "react";
import type {PlanData} from "~/config/Plans.server";
import Plans from "~/config/Plans.server";
import type Category from "~/config/Category.server";
import PlanCard from "~/components/o/PlanCard";
import PlanButton from "~/components/o/PlanButton";

export const action: ActionFunction = async ({request}): Promise<Response> => {
  const formData = await request.formData()

  const plan = formData.get("plan")

  if (Plans.find(p => p.plan === plan) !== undefined) {
    return redirect(`/new/${plan}`)
  }

  return redirect("/new")
}

type StrippedPlanData = Omit<PlanData, "category">
type LoaderData = Partial<Record<Category, StrippedPlanData[]>>

export const loader: LoaderFunction = () => {
  const data: LoaderData = {};

  Plans.forEach(({category, ...rest}) => {
    const cat = data[category];

    if (!cat) {
      data[category] = [rest];
    } else {
      cat.push(rest)
    }
  });

  return json(data)
}

const Route: React.FC = (): JSX.Element => {
  const data: Required<LoaderData> = useLoaderData()

  return (
    <div
      className={`
        container
        bg-white
        mx-auto
        px-8
        py-12
        flex
        justify-center
        overflow-hidden
      `}
    >
      <Form
        className={`
          flex
          flex-col
          flex-wrap
          gap-y-2
        `}
        method="post"
      >
        {
          Object.entries(data)
            .map(([cat, plans], categoryIdx) => {
              const category: Category = cat as Category;
              return (
                <fieldset
                  className={`
                    mt-4 md:mt-8
                    mx-2
                    px-2
                    py-8
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

                  <div
                    className={`
                      flex
                      mx-auto
                      overflow-x-auto
                      w-screen md:container
                      gap-x-4
                      snap-x
                      snap-mandatory
                      snap-always
                      ${categoryIdx !== 0 ? "lg:justify-center" : ""}
                      pb-2
                    `}
                  >
                    {
                      plans.map(({area, layout, plan}, index) => {
                        return (
                          <PlanButton key={plan} value={plan}
                                      className={`snap-center snap-always scroll-ml-96`}>
                            <PlanCard area={area} layout={layout} plan={plan}/>
                          </PlanButton>
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
  )
}
export default Route