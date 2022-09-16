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
      <main className={`flex flex-col justify-center items-center container w-screen mx-auto h-screen bg-img bg-cover bg-no-repeat bg-blend-darken bg-blend-darken`}>
        <p className={`text-xl font-serif uppercase font-bold py-4 px-8 bg-white border-2 border-aqua rounded-md`}>Thank you for registering!</p>
      </main>
  )
}
export default ThankYou;