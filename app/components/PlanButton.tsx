import React from "react";
import type {PlanData$Layout} from "~/types/PlanData$Client";

export type PlanButtonProps = {
  plan: PlanData$Layout
}

const PlanButton: React.FC<PlanButtonProps> = ({plan}) => {
  return (
    <button
      className={`
        group
        block
        border-2
        border-black hover:border-aqua
        rounded-lg hover:rounded-md
        w-64 md:w-80
        overflow-hidden
      `}
      name={`plan`}
      value={plan.name}
      type={"submit"}
    >
      <img
        alt={`Plan ${plan.name} Floorplan`}
        className={`
          border-b-1
          border-aqua
        `}
        loading={"lazy"}
        src={`/imgs/plans/${plan.name}.jpg`}
      />
      <div
        className={`
          place-center
          text-center
          py-8
          border-t
          border-aqua
          bg-grey/10
          group-hover:bg-aqua
          transition-all
          ease-in-out
          duration-300
        `}
      >
        <h2
          className={`
            text-2xl
            font-bold
            font-serifCaps
            text-black
            group-hover:underline 
            group-hover:decoration-white 
            group-hover:decoration-4
            group-hover:text-white
        `}
        >
          {`Plan ${plan.name}`}
        </h2>
        <ul
          className={`
            text-lg
            font-bold
            font-serif
            uppercase
            group-hover:text-white
            mt-4
          `}
        >
          <li>
            {`${plan.beds} Bedroom${plan.beds > 1 ? 's' : ''}`}
          </li>
          <li>
            {`${plan.sqFt} Sq.Ft.`}
          </li>
        </ul>
      </div>
    </button>
  )
}
export default PlanButton;