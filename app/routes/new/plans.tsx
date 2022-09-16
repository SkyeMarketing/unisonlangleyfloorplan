import type {LoaderFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import Plans from "~/config/Plans.server";

export const loader: LoaderFunction = ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  const planQuery = searchParams.get("plan");

  if (!planQuery) {
    return json(Plans)
  } else {
    const plan = Plans.find(planData => planData.plan === planQuery);

    if (plan) {
      return json(plan)
    } else {
      return json({error: "Plan not found"}, {status: 404})
    }
  }
}
