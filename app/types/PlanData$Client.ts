import type PlanData from "~/types/PlanData";

export interface PlanData$Layout extends Omit<PlanData, "category" | "unavailable"> {}

type PlanData$Client = {
  [key: string]: [PlanData$Layout]
};
export default PlanData$Client