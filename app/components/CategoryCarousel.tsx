import {z} from "zod";
import AreaSchema from "~/schemas/Area.schema";
import IdSchema from "~/schemas/Id.schema";
import NameSchema from "~/schemas/Name.schema";
import LayoutSchema from "~/schemas/Layout.schema";

const CategoryCarouselPropsSchema = z.object({
  plans: z.array(z.object({
    area: AreaSchema,
    id: IdSchema,
    layout: LayoutSchema,
    name: NameSchema,
  }))
})
type CategoryCarouselProps = z.infer<typeof CategoryCarouselPropsSchema>;

export default ({plans}: CategoryCarouselProps) => (
  <>
    {
      plans
        .map((
          {
            area,
            id,
            layout,
            name
          }) => {
          return (
            <li
              key={id}
              className={`
                flex
                flex-col
                gap-y-2
                flex-1
                p-2
                border
                border-aqua
                border-opacity-50
                rounded
                bg-white
              `}
            >
              <p>{name}</p>
              <p>{area}</p>
              <p>{layout}</p>
            </li>
          )
        })}
  </>
)