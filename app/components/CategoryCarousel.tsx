import {z} from "zod";
import AreaSchema from "~/schemas/Area.schema";
import NameSchema from "~/schemas/Name.schema";
import IdSchema from "~/schemas/Id.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import {useEffect, useRef, useState} from "react";
import CategoryPlan from "~/components/CategoryPlan";

const CategoryCarouselPropsSchema = z.object({
  plans: z.array(z.object({
    area: AreaSchema,
    id: IdSchema,
    layout: LayoutSchema,
    name: NameSchema,
  })),
})

export default ({plans}: z.infer<typeof CategoryCarouselPropsSchema>) => {
  const [current, setCurrent] = useState(0);

  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {

    if (leftRef.current) {
      const left = leftRef.current;

      left.addEventListener('click', (e) => {
        e.preventDefault();

        if (current > 0) {
          setCurrent(current - 1);
        }
      })
    }

    if(rightRef.current) {
      const right = rightRef.current;

      right.addEventListener('click', (e) => {
        e.preventDefault();

        if (current < plans.length - 1) {
          setCurrent(current + 1);
        }
      });
    }
  }, [current, plans.length])

  return (
    <div
      className={`
        flex
        justify-center
        gap-2
      `}
    >
      <button type={`button`} ref={leftRef}>Left</button>
      <CategoryPlan {...plans[current]} />
      <button type={"button"} ref={rightRef}>Right</button>
    </div>
  )
}