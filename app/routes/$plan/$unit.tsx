import type { ActionFunction, LoaderFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import SubmitButton from "~/components/SubmitButton";
import PlanDisplay from "~/components/PlanDisplay";
import UnitDisplay from "~/components/UnitDisplay";
import CheckboxField from "~/components/CheckboxField";
import InputField from "~/components/InputField";

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

  const zapier = await fetch(new URL((process.env as ProcessExt).ZAPIER_WEBHOOK), {
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

  return (
    <div className={`w-128 h-screen`}>
      <Form className={`w-128 px-16 py-8 flex flex-col place-center`} method="post">
        <input type="hidden" name="plan" value={plan} />
        <input type="hidden" name="unit" value={unit} />

        <div
          className={`
            flex
            flex-row
            gap-4
            w-96
            place-center
          `}
        >
          <PlanDisplay plan={plan} />

          <UnitDisplay number={parseInt(unit)} />
        </div>

        <div className={`w-96 mt-4 border border-aqua h-px w-128`}>
          <></>
        </div>


        <div
          className={`
            flex
            flex-col
            gap-4
            py-4
          `}
        >

          <InputField label={"First Name"} type={"text"} name={"firstName"} />

          <InputField label={"Last Name"} type={"text"} name={"lastName"} />

          <InputField label={"Email"} type={"email"} name={`email`} />

          <InputField name={"phone"} type={"tel"} label={"Phone Number"} />
        
          <CheckboxField content={"I am a Realtor"} name={"realtor"} />

          <SubmitButton />
        </div>
      </Form>
    </div>
  )
}
export default $Unit;