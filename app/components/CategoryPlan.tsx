import {z} from "zod";
import AreaSchema, {areaTransformer} from "~/schemas/Area.schema";
import NameSchema from "~/schemas/Name.schema";
import LayoutSchema, {layoutTransformer} from "~/schemas/Layout.schema";
import IdSchema from "~/schemas/Id.schema";

const CategoryPlanSchema = z.object({
  area: AreaSchema,
  id: IdSchema,
  layout: LayoutSchema,
  name: NameSchema,
})
export default ({area, id, layout, name}: z.infer<typeof CategoryPlanSchema>) => {
  return (
    <button
      name={`plan`}
      type={`submit`}
      value={id}
    >
      <div
        className={`
          flex
          flex-col sm:flex-row
          justify-center sm:justify-start
          sm:items-center
          w-64 sm:w-auto
          border-2
          border-black hover:border-grey
          rounded-lg
          overflow-hidden
          bg-grey hover:bg-aqua
          group
        `}
      >
        <img
          alt={`${name} Floorplan`}
          className={`
            border-b-2 sm:border-b-0 sm:border-r-2
            border-aqua group-hover:border-grey
          `}
          src={`/imgs/plans/${name}.min.webp`} />
        <div
          className={`
            place-center
            text-center
            transition-all
            ease-in-out
            duration-300
            sm:w-41
            py-2 sm:py-auto
            sm:px-4
          `}
        >
          <h2
            className={`
              uppercase
              text-2xl
              font-bold
              font-serifCaps
              text-black group-hover:text-white
              group-hover:underline
              group-hover:decoration-white
              group-hover:decoration-4
            `}
          >
            Plan {name}
          </h2>
          <ul
            className={`
              mt-4
              text-lg
              font-bold
              font-serif
              uppercase
              text-black group-hover:text-white
            `}
          >
            <li>{layoutTransformer(layout)}</li>
            <li>{areaTransformer(area)}</li>
          </ul>
        </div>
      </div>
    </button>
  )
}