import React from "react";
import type LayoutServer from "~/config/Layout.server";
import {layouts} from "~/config/Layout.server";
import type AreaServer from "~/config/Area.server";
import {areas} from "~/config/Area.server";
import type Plan from "~/config/Plan.server";
import {plans} from "~/config/Plan.server";

type PlanCard = React.FC<PlanCardComponentProps> & {
  Image: React.FC<PlanCardImageProps>,
  Layout: React.FC<PlanCardLayoutProps>,
  Area: React.FC<PlanCardAreaProps>,
  Title: React.FC<PlanCardTitleProps>,
}

export type PlanCardComponentProps = {
  area: AreaServer,
  layout: LayoutServer,
  plan: Plan,
}

const PlanCardComponent: PlanCard = ({area, layout, plan}) => {
  return (
    <div
      className={`
        flex
        flex-col
        gap-y-0.5
        w-64 md:w-80
        border-2
        border-black hover:border-aqua
        rounded-lg hover:rounded-md
        overflow-hidden
        group
      `}
    >
      <PlanCardComponent.Image plan={plan} />
      <div
        className={`
          place-center
          text-center
          py-8
          border-t
          border-aqua
          bg-grey/10
          group-hover:bg-aqua
          transition-all
          ease-in-out
          duration-300
        `}
      >
        <PlanCardComponent.Title plan={plan} />
        <ul
          className={`
          text-lg
            font-bold
            font-serif
            uppercase
            group-hover:text-white
            mt-4
          `}
        >
          <li><PlanCardComponent.Layout layout={layout} /></li>
          <li><PlanCardComponent.Area area={area}  /></li>
        </ul>
      </div>
    </div>
  );
};
export default PlanCardComponent;

export type PlanCardLayoutProps = {
  layout: LayoutServer,
}
PlanCardComponent.Layout = ({ layout }) => {
  return (<p>{layouts[layout]}</p>);
}

export type PlanCardImageProps = {
  plan: Plan,
}

PlanCardComponent.Image = ({ plan }) => {
  const planName = plans[plan].name;
  const path = `/imgs/plans/${planName}.min.webp`;

  return (
    <img
      alt={`Plan ${planName} Floorplan`}
      className={`
        border-b-1
        border-aqua
      `}
      src={path} />
  );
}

type PlanCardAreaProps = {
  area: AreaServer,
}

PlanCardComponent.Area = ({ area }) => {
  return (
    <p>{areas[area]}</p>
  );
}

type PlanCardTitleProps = {
  plan: Plan,
}

PlanCardComponent.Title = ({plan}) => {
  return (
    <h2
      className={`
        uppercase
        text-2xl
        font-bold
        font-serifCaps
        text-black
        group-hover:underline 
        group-hover:decoration-white 
        group-hover:decoration-4
        group-hover:text-white
      `}
    >
      {`Plan ${plans[plan].name}`}
    </h2>
  );
}
