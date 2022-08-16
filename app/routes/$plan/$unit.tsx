import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import React from "react";
import SubmitButton from "~/components/SubmitButton";
import PlanDisplay from "~/components/PlanDisplay";
import UnitDisplay from "~/components/UnitDisplay";
import CheckboxField from "~/components/CheckboxField";
import InputField from "~/components/InputField";

interface ProcessExt extends NodeJS.ProcessEnv {
  ZAPIER_WEBHOOK: string
}

export const action: ActionFunction = async ({request}): Promise<Response> => {
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

  return redirect(`https://www.unisonlangley.ca/thank-you`);
}

export type LoaderData = {
  plan: string,
  unit: string,
}
export const loader: LoaderFunction = ({params}): LoaderData | Response => {
  const plan = params["plan"]
  const unit = params["unit"]

  if (plan === undefined) {
    return redirect(`/`)
  }

  if (unit === undefined) {
    return redirect(`/${plan}`)
  }

  return {plan, unit};
}

const $Unit: React.FC = () => {
  const {plan, unit}: LoaderData = useLoaderData()

  return (

    <div
      className={`
        container
        mx-auto
        bg-white
        overflow-auto
        flex
        flex-col-reverse lg:flex-row
        justify-center
        h-full
        `}
    >
      <div
        className={`
          flex-grow
        `}
      >
        <img
          className={`aspect-w-3 aspect-h-2 lg:my-[5vh] w-full`}
          alt={`Plan ${plan} Floorplan`}
          src={`/imgs/plans/${plan}.webp`}
        />
      </div>

      <Form
        className={`
            px-4
            py-8
          `}
        method={"post"}
      >
        <input type="hidden" name="plan" value={plan}/>
        <input type="hidden" name="unit" value={unit}/>

        <div
          className={`
              flex
              flex-col md:flex-row
              gap-8
              px-4 md:px-auto
            `}
        >
          <PlanDisplay plan={plan}/>

          <UnitDisplay plan={plan} number={parseInt(unit)}/>
        </div>

        <hr
          className={`
              my-4
              h-px
              mx-auto
              w-full
              border-2
              border-aqua
              rounded-full
            `}
        />

        <div
          className={`
              flex
              flex-col
              gap-8
              my-4
              py-4
              items-center
            `}
        >
          <InputField
            label={"First Name"}
            name={`firstName`}
            type={`text`}
            autoComplete={`given-name`}
          />
          <InputField
            label={"Last Name"}
            name={`lastName`}
            type={`text`}
            autoComplete={`family-name`}
          />
          <InputField
            label={"Email"}
            name={`email`}
            type={`email`}
            autoComplete={`email`}
          />
          <InputField
            label={"Phone Number"}
            name={`phoneNumber`}
            type={`tel`}
            autoComplete={`tel-national`}
          />

          <CheckboxField
            content={"I am a Realtor"}
            name={"realtor"}
          />

          <SubmitButton/>
        </div>
      </Form>


    </div>
  )
}
export default $Unit;