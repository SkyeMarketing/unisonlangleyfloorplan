import React, {useId} from "react";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
}

const InputField: React.FC<InputFieldProps> = ({...props}) => {
  const id = useId()

  return (
    <div
      className={`
        flex
        flex-col
        gap-2
        w-80
        px-4 md:px-auto
      `}
    >
      <label
        className={`
          text-2xl
          font-serif
          uppercase
        `}
        htmlFor={id}
      >
        {props.label}
      </label>
      <input
        className={`
          px-6
          py-4
          border-2
          border-black
          focus:border-aqua
          hover:border-aqua
          inline-block
          font-serif
          text-xl
          rounded-lg
        `}
        type={props.type}
        name={props.name}
        id={id}
        required={true}
      />
    </div>
  )
}
export default InputField