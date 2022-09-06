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
      <main className={`flex place-items-center place-content-center w-screen h-screen bg-img bg-cover bg-no-repeat bg-blend-darken`}>
        <p className={`bg-black/50 bg-blend-hard-light font-serifCaps text-white text-3xl px-24 py-16 rounded-2xl`}>Thank you for registering</p>
      </main>
    </>
  )
}
export default ThankYou;