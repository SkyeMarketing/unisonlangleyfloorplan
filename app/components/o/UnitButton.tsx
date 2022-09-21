import React from "react";

export type UnitButtonProps = {
  number: number
}

const UnitButton: React.FC<UnitButtonProps> = ({number}): JSX.Element => {
  return (
    <button
      className={`
        group
        hover:bg-aqua
        py-4 md:py-6
        block
        border-2
        border-black
        peer-hover:bg-aqua
        peer-checked:border-aqua
        rounded-lg
        w-64 md:w-56 lg:w-32
        overflow-hidden
        hover:border-black
      `}
      name={"unit"}
      value={number}
      type={"submit"}
    >
      <div className="text-black group-hover:text-white font-serif text-2xl">
        <p className="text-center">{number}</p>
      </div>
    </button>
  )
}
export default UnitButton