import {z} from "zod";
import AreaSchema from "~/schemas/Area.schema";
import NameSchema from "~/schemas/Name.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import {useEffect, useRef, useState} from "react";
import CategoryPlan from "~/components/CategoryPlan";

const CategoryCarouselPropsSchema = z.object({
  plans: z.array(z.object({
    area: AreaSchema,
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
        items-center
        gap-2
      `}
    >
      <button
        className={`
          rounded-full 
          hover:bg-aqua 
          h-12 
          w-12 
          flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
        `}
        type={`button`}
        ref={leftRef}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`
            w-8
            h-8
            group-hover:text-white
            transition-all
            ease-in-out
            duration-300
          `}
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <CategoryPlan {...plans[current]} />
      <button
        className={`
          rounded-full 
          hover:bg-aqua 
          h-12 
          w-12 
          flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
        `}
        type={`button`}
        ref={rightRef}>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`
            w-8
            h-8
            group-hover:text-white
            transition-all
            ease-in-out
            duration-300
          `}
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}