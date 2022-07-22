import React from "react";

const SubmitButton: React.FC = () => {
  return (
    <button
      className={`
      group
      hover:bg-aqua
            py-4
              block
              border-2
              peer-hover:bg-aqua
              peer-checked:border-aqua
              rounded-lg
              w-64
              overflow-hidden
              hover:border-black
            `}
      type={"submit"}
    >
      <div className="text-black group-hover:text-white font-serif">
        <p className="text-center"><span className={`font-bold uppercase`}>Register</span></p>
      </div>
    </button>
  )
}
export default SubmitButton