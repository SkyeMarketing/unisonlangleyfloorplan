import type { ActionFunction, LoaderFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import React, { useId } from "react";
import SubmitButton from "~/components/SubmitButton";


interface ProcessExt extends NodeJS.ProcessEnv {
  ZAPIER_WEBHOOK: string
}

export const action: ActionFunction = async ({ request }): Promise<Response> => {
  const formData = await request.formData();

  const plan = formData.get("plan");
  const unit = formData.get("unit");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const realtor = formData.get("realtor");

  const zapier = await fetch((process.env as ProcessExt).ZAPIER_WEBHOOK, {
    method: "POST",
    body: JSON.stringify({
      plan,
      unit,
      firstName,
      lastName,
      email,
      phone,
      realtor,
    })
  })

  return redirect(`/`);
}

export type LoaderData = {
  plan: string,
  unit: string,
}
export const loader: LoaderFunction = ({ params }): LoaderData | Response => {
  const plan = params["plan"]
  const unit = params["unit"]

  if (plan === undefined) {
    return redirect(`/`)
  }

  if (unit === undefined) {
    return redirect(`/${plan}`)
  }

  return { plan, unit };
}

const $Unit: React.FC = () => {
  const { plan, unit }: LoaderData = useLoaderData()

  const [fId, lId, eId, pId, rId] = [useId(), useId(), useId(), useId(), useId()];
  return (
    <div className={`w-screen h-screen  bg-red-500`}>
      <Form className={`mx-auto w-90`} method="post">
        <input type="hidden" name="plan" value={plan} />
        <input type="hidden" name="unit" value={unit} />

        <div>
          <div>
            <h2>
              Plan {plan}
            </h2>
          </div>

          <div>
            <h2>
              <div
                className={`
              block
              border-2
              border-black
              peer-checked:border-aqua
              rounded-lg
              w-64
              overflow-hidden
            `}
              >
                <div>
                  <h2>{unit}</h2>
                </div>
              </div>
            </h2>
          </div>
        </div>

        <div>
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="First Name" id={fId} />
        </div>

        <div>
          <label htmlFor={lId}>Last Name</label>
          <input type="text" name="lastName" placeholder="Last Name" id={lId} />
        </div>

        <div>
          <label htmlFor={eId}>Email</label>
          <input type="email" name="email" placeholder="Email" id={eId} />
        </div>

        <div>
          <label htmlFor={pId}>Phone Number</label>
          <input type="tel" name="phone" placeholder="Phone Number" id={pId} />
        </div>

        <div>
          <input type="checkbox" name="realtor" id={rId} />
          <label htmlFor={rId}>I am a Realtor</label>
        </div>

        <SubmitButton />
      </Form>
    </div>
  )
}
export default $Unit;