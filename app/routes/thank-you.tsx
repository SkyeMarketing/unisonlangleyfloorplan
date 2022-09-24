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
      <main className={`flex flex-col items-center py-8 bg-center w-full mx-auto h-full bg-img bg-cover bg-no-repeat bg-blend-darken bg-blend-darken relative`}>
        <p className={`text-xl font-serif uppercase font-bold py-4 px-8 bg-white border-2 border-aqua rounded-md fixed`}>Thank you for registering!</p>
      </main>
  )
}
export default ThankYou;