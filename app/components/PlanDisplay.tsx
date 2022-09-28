import React from "react";
import {Link} from "@remix-run/react";
import NameSchema from "~/schemas/Name.schema";
import {z} from "zod";

const PlanDisplaySchema = z.object({
  plan: NameSchema,
})

const PlanDisplay = ({plan}: z.infer<typeof PlanDisplaySchema>) => {
  return (
    <Link
      className={`
        px-8
        py-4
        text-2xl
        text-black
        hover:text-aqua
        font-serif
        inline-block
        border-2
        border-aqua
        rounded-lg
        text-center
        uppercase
      `}
      to={`/`}
    >
      <span className={`uppercase`}>Plan</span> {plan}
    </Link>
  )
}
export default PlanDisplay