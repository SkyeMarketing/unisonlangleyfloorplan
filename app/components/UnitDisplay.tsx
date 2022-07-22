import React from "react";

export type UnitDisplayProps = {
  number: number,
}

const UnitDisplay: React.FC<UnitDisplayProps> = ({number}) => {
  return (
    <p
      className={`
        px-8
        py-4
        text-5xl
        text-black
        hover:text-aqua
        font-serif
        inline-block
        border-2
        border-aqua
        rounded-lg
        
      `}
    >
      <span className={`uppercase`}>Unit</span> {number}
    </p>
  )
}
export default UnitDisplay