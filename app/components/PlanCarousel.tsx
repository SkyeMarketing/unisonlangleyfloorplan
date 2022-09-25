import UnitsSchema from "~/schemas/Units.schema";
import {z} from "zod";
import {useEffect, useRef, useState} from "react";
import PlanUnit from "~/components/PlanUnit";
import {Link} from "@remix-run/react";
import NameSchema from "~/schemas/Name.schema";

const CategoryCarouselPropsSchema = z.object({
  plan: NameSchema,
  units: UnitsSchema,
})

export default ({plan, units}: z.infer<typeof CategoryCarouselPropsSchema>) => {
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

        if (current < units.length - 1) {
          setCurrent(current + 1);
        }
      });
    }
  }, [current, units.length])

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
          hover:bg-aqua disabled:hover:bg-grey
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
        disabled={current === 0}
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
      <Link to={`/${plan}/${units[current]}`}><PlanUnit unit={units[current]} /></Link>
      <button
        className={`
          rounded-full 
          hover:bg-aqua disabled:hover:bg-grey
          h-12 
          w-12 
          flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
          disabled:text-grey
        `}
        disabled={current === units.length - 1}
        type={`button`}
        ref={rightRef}>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`
            w-8
            h-8
            group-hover:text-white disabled:group-hover:text-black
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