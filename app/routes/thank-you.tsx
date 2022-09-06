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
    <>
      <main className={`w-screen h-screen bg-img bg-cover bg-no-repeat bg-blend-darken py-16 `}>
        <p className={`block w-[80vw] md:w-[50vw] lg:w-[30vw] mx-auto bg-black/50 text-center bg-blend-hard-light font-serifCaps text-white text-3xl px-24 py-16 rounded-2xl backdrop-blur-lg shadow-md shadow-aqua/50`}>Thank you for registering</p>
      </main>
    </>
  )
}
export default ThankYou;