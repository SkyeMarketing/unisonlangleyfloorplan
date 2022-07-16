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
        border-black
        hover:border-aqua
        rounded-lg
        w-80
        overflow-hidden
      `}
      name={`plan`}
      value={plan.name}
    >
      <img
        className={`
                border-b-1
                border-aqua
              `}
        alt={`Plan ${plan.name} Floorplan`}
        src={`/imgs/plans/${plan.name}.png`}
      />
      <div
        className={`
                place-center
                text-center
                py-8
                border-t
                border-aqua
                bg-grey/10
                hover:bg-aqua
              `}
      >
        <h2
          className={`
                    text-2xl
                    font-bold
                    font-serifCaps
                    text-black
                    underline decoration-white decoration-4
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
                    group-hover:text-grey
                  `}
        >
          <li>
            {plan.beds} Beds
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