import React from "react";

export type PlanDisplayProps = {
  plan: string,
}
const PlanDisplay: React.FC<PlanDisplayProps> = ({plan}) => {
  return (
    <p
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
      `}
    >
      <span className={`uppercase`}>Plan</span> {plan}
    </p>
  )
}
export default PlanDisplay