import type { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from '~/styles/thank-you.css'

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
]

const  ThankYou: React.FC = (): JSX.Element => {
  return (
      <main
        className={`
          flex 
          flex 
          items-center sm:items-end md:items-center lg:items-end
          justify-center
          py-8 
          bg-center 
          w-full 
          mx-auto 
          h-full 
          bg-img 
          bg-cover 
          bg-fixed 
          bg-no-repeat 
          bg-blend-darken 
          bg-blend-darken 
        `}
      >
        <p
          className={`
            text-xl 
            font-serif 
            uppercase 
            font-bold 
            py-4 
            px-8 
            bg-white 
            border-2 
            border-aqua 
            rounded-md 
            text-center
          `}>
          Thank you for registering!
        </p>
      </main>
  )
}
export default ThankYou;