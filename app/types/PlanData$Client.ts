import type PlanData from "~/types/PlanData";

export declare interface PlanData$Layout extends Omit<PlanData, "category" | "unavailable" | "units"> {}

declare type PlanData$Client = {
  [key: string]: [PlanData$Layout]
};
export default PlanData$Client