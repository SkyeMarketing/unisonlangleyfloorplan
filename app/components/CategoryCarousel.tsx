import {z} from "zod";
import NameSchema from "~/schemas/Name.schema";
import AreaSchema from "~/schemas/Area.schema";
import LayoutSchema from "~/schemas/Layout.schema";
import {useCallback, useEffect, useRef, useState} from "react";
import CategoryPlan from "~/components/CategoryPlan";

const CategoryCarouselSchema = z
  .object({
    plans: z
      .array(z
        .object({
          area: AreaSchema,
          layout: LayoutSchema,
          name: NameSchema,
        })
      )
  })

export default ({plans}: z.infer<typeof CategoryCarouselSchema>) => {
  const MAX_PLANS = plans.length;
  const FIRST_PLAN = 0;
  const LAST_PLAN = MAX_PLANS - 1;

  const [current, setCurrent] = useState(0);

  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const rightLgButtonRef = useRef<HTMLButtonElement>(null);

  const leftClickListener = useCallback((e: MouseEvent) => {
    e.preventDefault();

    if (current > 0) {
      setCurrent(current - 1);
    }
  }, [current])

  const rightClickListener = useCallback((e: MouseEvent) => {
    e.preventDefault();

    if (current < LAST_PLAN) {
      setCurrent(current + 1);
    }
  }, [current, plans.length])

  const rightLgClickListener = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();


      if (current < plans.length - 1) {
        setCurrent(current + 1);
      } else {
        setCurrent(LAST_PLAN);
      }
    },
    [LAST_PLAN, current, plans.length]
  )

  useEffect(
    () => {

      if (leftButtonRef.current) {
        const left = leftButtonRef.current;
        left.addEventListener('click', leftClickListener);
      }

      if (rightButtonRef.current) {
        const right = rightButtonRef.current;
        right.addEventListener('click', rightClickListener);
      }

      if (rightLgButtonRef.current) {
        const rightLg = rightLgButtonRef.current;
        rightLg.addEventListener('click', rightLgClickListener);
      }
    },
    [current]
  )

  const smComponentSchema = z
    .object({
      plan: z
        .object({
          area: AreaSchema,
          layout: LayoutSchema,
          name: NameSchema,
        })
    })
  const SmComponent = ({plan}: z.infer<typeof smComponentSchema>) => (<CategoryPlan {...plan} />);

  const lgComponentSchema = z
    .object({
      plans: z
        .array(z
          .object({
            area: AreaSchema,
            layout: LayoutSchema,
            name: NameSchema,
          })
        )
    })

  const LgComponent = ({plans}: z.infer<typeof lgComponentSchema>) => (
    <div
      className={`
        flex
        justify-center
        items-center
        gap-2
      `}
    >
      {plans.map((plan, index) => {
        if (index >= current && index <= current + 2) {
          return <CategoryPlan {...plan} />
        } else {
          return <></>;
        }
      })}
    </div>
  );


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
        disabled={current === FIRST_PLAN}
        ref={leftButtonRef}
        type={"button"}
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
      {/* Default */}
      <span
        className={`
          lg:hidden
          flex
          gap-2
          justify-center
          items-center
        `}
      >
        <SmComponent plan={plans[current]} />
      </span>
      {/* lg */}
      <span
        className={`
          hidden lg:flex
          gap-2
          justify-center
          items-center
        `}
      >
        <LgComponent plans={plans} />
      </span>

      <button
        className={`
          lg:hidden
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
        disabled={current === LAST_PLAN}
        ref={rightButtonRef}
        type={'button'}
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
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        className={`
          hidden
          rounded-full 
          hover:bg-aqua 
          h-12 
          w-12 
          hidden lg:flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
        `}
        disabled={current + 2 >= LAST_PLAN}
        ref={rightLgButtonRef}
        type={'button'}
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
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}