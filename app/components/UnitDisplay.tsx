import React from "react";
import {Link} from "@remix-run/react";

export type UnitDisplayProps = {
  number: number,
  plan: string,
}

const UnitDisplay: React.FC<UnitDisplayProps> = ({number, plan}) => {
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
      `}
      to={`/${plan}`}
    >
      <span className={`uppercase`}>Unit</span> {number}
    </Link>
  )
}
export default UnitDisplay