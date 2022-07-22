import React, {useId} from "react";

export type CheckboxFieldProps = {
  content: string,
  name: string,
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({content, name}) => {
  const id = useId()

  return (
    <div>
      <input
        className={`
          checked:bg-aqua
          mr-4
          w-6
          h-6
        `}
        type="checkbox"
        name={name}
        id={id}
      />
      <label
        className={`
          text-2xl
          font-serif
          uppercase
        `}
        htmlFor={id}
      >
        {content}
      </label>
    </div>
  )
}
export default CheckboxField