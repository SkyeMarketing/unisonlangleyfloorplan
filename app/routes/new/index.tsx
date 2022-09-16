import type {ActionFunction, LoaderFunction} from "@remix-run/node";
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

  const ref = React.useRef<HTMLDivElement>(null)

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
                      mx-auto
                      overflow-x-auto 
                      w-screen md:container
                      gap-x-4
                      snap-x
                      snap-mandatory
                      snap-always
                    `}
                    ref={ref}
                  >
                    {
                      plans.map(({area, layout, plan}, index) => {
                        return (
                          <PlanButton key={plan} value={plan}
                                      className={`${index === 0 ? 'lg:ml-[50%]' : ''} snap-center snap-always scroll-ml-96`}>
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