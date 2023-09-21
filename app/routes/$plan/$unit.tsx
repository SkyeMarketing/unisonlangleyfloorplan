import type {
  ActionFunction,
  LoaderFunction,
} from "@remix-run/server-runtime"

import NameSchema from "~/schemas/Name.schema";
import UnitSchema from "~/schemas/Unit.schema";
import {z} from "zod";
import {Form, useLoaderData} from "@remix-run/react";
import PlanDisplay from "~/components/PlanDisplay";
import UnitDisplay from "~/components/UnitDisplay";
import InputField from "~/components/InputField";
import CheckboxField from "~/components/CheckboxField";
import SubmitButton from "~/components/SubmitButton";
import {redirect} from "@remix-run/node";
import PLANS from "~/data/Plans.server";

const FormDataSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    plan: NameSchema,
    unit: z.string(),
    realtor: z.literal("Yes").optional(),
  })

const LoaderDataSchema = z
  .object({
    plan: NameSchema,
    unit: UnitSchema,
  })


export default () => {
  let {plan, unit}: z.infer<typeof LoaderDataSchema> = useLoaderData()

  return (

    <div
      className={`
        container
        mx-auto
        bg-white
        flex
        flex-col
        items-center
        h-screen  
        `}
    >
      <img
        className={`
          overflow-hidden
        `}
        alt={`Plan ${plan} Floorplan`}
        src={`/imgs/plans/${plan}.webp`}
      />

      <Form
        className={`
            overflow-auto flex flex-col mx-auto place-center gap-4 mx-2 px-4 lg:w-2/3
          `}
        method={"post"}
      >
        <input type="hidden" name="plan" value={plan}/>
        <input type="hidden" name="unit" value={unit}/>

        <div
          className={`
              flex
              flex-row
              gap-8
              px-4 md:px-auto
              justify-center
            `}
        >
          <PlanDisplay plan={plan}/>

          <UnitDisplay plan={plan} number={unit}/>
        </div>

        <hr
          className={`
              my-2
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
              gap-6
              my-4
              items-center
            `}
        >
          <div className={`flex flex-col md:flex-row gap-4`}>
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
          </div>
          <div className={`flex flex-col md:flex-row gap-4`}>
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
          </div>

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

export const action = (async ({request}) => {
  const formData = await request.formData()
  const data: Record<string, string> = {}
  formData.forEach((value, key) => {
    if (typeof value !== "string") {
      return redirect("/")
    }
    data[key] = value
  })

  const formDat = FormDataSchema.parse(data)

  let phoneNumber = parseInt(formDat.phoneNumber)

  if (isNaN(phoneNumber)) {
    return redirect("/")
  }

  const dat = {
    ...formDat,
    phoneNumber,
  }

  const {plan, unit, firstName, lastName, email, phoneNumber : phone, realtor} = dat

  type ENV = NodeJS.ProcessEnv & { ZAPIER_WEBHOOK: string }

  const env = process.env as ENV

  const zapier = await fetch(new URL(env.ZAPIER_WEBHOOK), {
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

  return redirect(`/thank-you`);
}) satisfies ActionFunction

export const loader = (async ({params}) => {
  const {plan, unit} = params

  if (!plan) {
    return {redirect: "/"}
  }

  const planAvailable = PLANS
    .filter(({enabled}) => enabled)
    .find(({name}) => name === plan)

  if (!planAvailable) {
    return {redirect: "/"}
  }

  if (!unit) {
    return redirect(`/${planAvailable.name}`)
  }

  const _unit = parseInt(unit)

  if (isNaN(_unit)) {
    return redirect(`/${plan}`)
  }

  const loaderData = LoaderDataSchema.parse({
    plan,
    unit: _unit,
  })

  if (!planAvailable.units.includes(loaderData.unit)) {
    return redirect(`/${plan}`)
  }

  return loaderData

}) satisfies LoaderFunction
