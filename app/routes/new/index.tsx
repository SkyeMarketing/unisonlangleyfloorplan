import type {ActionFunction, LinksFunction, LoaderFunction} from "@remix-run/node";
import {json, redirect} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import React from "react";
import type {PlanData} from "~/config/Plans.server";
import Plans from "~/config/Plans.server";
import type Category from "~/config/Category.server";
import PlanCard from "~/nomponents/PlanCard";
import PlanButton from "~/nomponents/PlanButton";

export const action: ActionFunction = async ({request}): Promise<Response> => {
  const formData = await request.formData()

  const plan = formData.get("plan")

  if (Plans.find(p => p.plan === plan) !== undefined) {
    return redirect(`/${plan}`)
  }

  return redirect("/new")
}

type StrippedPlanData = Omit<PlanData, "category">
type LoaderData = Record<Category, StrippedPlanData[]>

export const loader: LoaderFunction = () => {
  const data: LoaderData = {
    a: [],
    b: [],
    c: [],
  };

  Plans.forEach(({category, ...rest}) => data[category].push(rest));

  return json(data)
}

const Route: React.FC = (): JSX.Element => {
  const data: LoaderData = useLoaderData()

  return (
    <div
      className={`
        container
        border-x
        border-aqua/25
        bg-white
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
        method="post"
      >
        {
          Object.entries(data)
            .map(([cat, plans], categoryIdx) => {
              const category: Category = cat as Category;
              console.log(categoryIdx)
              return (
                <fieldset
                  className={`
                    mt-8 md:mt-16
                    mx-2
                    px-2
                    py-8
                  `}
                  key={category}
                >
                  <legend
                    className={`
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
                      ${categoryIdx !== 0 ? 'lg:justify-center': ''}
                      mx-auto
                      overflow-x-auto
                      w-screen md:container
                      gap-x-8
                    `}
                  >
                    {
                      plans.map(({area, layout, plan}, index) => {
                        return (
                            <PlanButton key={plan} value={plan} className={`snap-center snap-always scroll-ml-96`}>
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