import type {ErrorBoundaryComponent, LinksFunction, LoaderFunction, MetaFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useLocation,} from "@remix-run/react";

import React, {useEffect} from "react";

import styles from "~/styles/app.css"
import * as gtag from "~/utils/gtags.client";

export const links: LinksFunction = () => ([
  {rel: "stylesheet", href: styles},
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap"
  }
])

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Unison Floorplans",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  gaTrackingId?: string,
}

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({gaTrackingId: process.env.GA_TRACKING_ID});
};

const App: React.FC = () => {
  const location = useLocation()
  const {gaTrackingId} = useLoaderData<LoaderData>()

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  })

  return (

    <html>
    <head>
      <Links/>
      <Meta/>
      {
        process.env.NODE_ENV === "development" && !gaTrackingId
          ? null
          : (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              />
              <script
                async
                id="gtag-init"
                dangerouslySetInnerHTML={{
                  __html: `
                window.datalayer = window.datalayer || []
                function gtag() {
                  datalayer.push(arguments);
                }
                gtag('js', new Date())
                gtag('config', '${gaTrackingId}', {
                  page_path: '${location.pathname}'
                }
                )
              `
                }}
              />
            </>
          )
      }
    </head>
    <body>

    <Outlet/>
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  )
}
export default App;

export const CatchBoundary: React.FC = () => {
  return (<></>)
}

export const ErrorBoundary: ErrorBoundaryComponent = ({error}) => {
  return (<></>)
}