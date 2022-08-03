import type {ErrorBoundaryComponent, LinksFunction, MetaFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import React from "react";

import styles from "~/styles/app.css"

export const links: LinksFunction = () => ([
  { rel: "stylesheet", href: styles },
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


const App: React.FC = () => {
  return (
    <html>
      <head>
        <Links />
        <Meta />
      </head>

      <body className={`bg-whiteh-screen`}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
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