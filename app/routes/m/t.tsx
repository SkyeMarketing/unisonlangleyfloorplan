import type {LoaderFunction} from "@remix-run/node";

export const loader: LoaderFunction = ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  return searchParams.get('plan');
}