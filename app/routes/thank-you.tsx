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
      <iframe src={`https://www.unisonlangley.ca/thank-you`} className={`border-0 w-screen `} />
    </>
  )
}
export default ThankYou;