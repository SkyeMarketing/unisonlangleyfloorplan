import React from "react";
import type Plan from "~/config/Plan.server";

export type PlanButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "name" | "type" | "value"> & {
  children: React.ReactNode,
  value: Plan,
}

const PlanButton: React.FC<PlanButtonProps> = ({children, ...props}) => {
  return (
    <>
      <button
        {...props}
        name={`plan`}
        type={"submit"}
      >
        {children}
      </button>
    </>
  )
}
export default PlanButton;