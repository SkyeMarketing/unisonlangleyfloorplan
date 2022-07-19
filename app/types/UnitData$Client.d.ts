import type PlanData from "~/types/PlanData";

interface UnitData$Client extends Omit<PlanData, "category" | "unavailable"> {}
export default UnitData$Client
