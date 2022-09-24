import {z} from "zod";

const PlanUnitSchema = z.object({
  unit: z.number()
})
export default ({unit}: z.infer<typeof PlanUnitSchema>) => {
  return (
    <span
      className={`
        block
        py-4 md:py-6
        hover:bg-aqua
        border-2
        border-aqua hover:border-grey
        rounded-lg
        w-32 md:w-56 lg:w-32
        font-serif
        text-2xl
        text-center
        group
      `}
    >
      <p
        className={`
          text-black group-hover:text-white
        `}
      >
        {unit}
      </p>
    </span>
  )
}