import React from "react";
import {Link} from "@remix-run/react";

export type PlanDisplayProps = {
  plan: string,
}
const PlanDisplay: React.FC<PlanDisplayProps> = ({plan}) => {
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