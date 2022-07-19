import React from "react";

export type UnitButtonProps = {
  number: number
}

const UnitButton: React.FC<UnitButtonProps> = ({number}): JSX.Element => {
  return (
    <button
      className={`
            py-4
              block
              border-2
              peer-hover:bg-aqua
              peer-checked:border-aqua
              rounded-lg
              w-64
              overflow-hidden
            `}
      name={"unit"}
      value={number}
      type={"submit"}
    >
      <div className="hover:text-white">
        <p className="text-center">Unit {number}</p>
      </div>
    </button>
  )
}
export default UnitButton