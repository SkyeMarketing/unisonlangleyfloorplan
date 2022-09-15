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

// const Route: React.FC = (): JSX.Element => {
//   const data: LoaderData = useLoaderData()
//
//   return (
//
//     <div
//       className={`
//           container
//           bg-white
//           mx-auto
//           px-8
//           py-16
//           flex
//           justify-center
//         `}
//     >
//       <Form
//         className={`
//             flex
//             flex-col
//             flex-wrap
//             gap-y-4
//             overflow-x-hidden
//           `}
//         method={"post"}
//       >
//         {
//           Object
//             .entries(data)
//             .map(([category, plans]) => {
//               return (
//                 <fieldset
//                   className={`
//                       mt-16
//                       mx-2
//                       px-2
//                       py-8
//
//                     `}
//                   key={category}
//                 >
//                   <legend
//                     className={`
//                         font-serif
//                         text-7xl
//                         font-bold
//                         text-center
//                         text-aqua
//                       `}
//                   >
//                     {category}
//
//                   </legend>
//
//                   <div
//
//                   >
//
//                   <div
//                     className={`
//                         flex
//                         w-128
//                         overflow-x-scroll
//                         mx-auto
//                         my-8
//                       `}
//                   >
//                     {
//                       plans
//                         .map(({area, layout, plan}) => {
//                           return (
//                             <PlanButton key={plan} value={plan} className={`mx-4`}>
//                               <PlanCard key={plan} area={area} layout={layout} plan={plan}/>
//                             </PlanButton>
//                           )
//                         })
//                     }
//                   </div>
//                   </div>
//                 </fieldset>
//               )
//             })
//         }
//       </Form>
//     </div>
//   );
// }
const Route: React.FC = (): JSX.Element => {
  const data: LoaderData = useLoaderData()

  return (
    <div
      className={`
        container
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
            .map(([cat, plans]) => {
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
                      border-2 
                      border-red-500
                      overflow-x-scroll
                      w-screen md:container
                    `}
                  >
                    <div
                      className={`
                        flex
                        
                      `}
                    >
                      {
                        plans.map(({area, layout, plan}) => {
                          return (
                            <PlanButton key={plan} value={plan} className={`mx-4`}>
                              <PlanCard area={area} layout={layout} plan={plan}/>
                            </PlanButton>
                          )
                        })
                      }
                    </div>
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