declare type PlanData = {
  baths: number,
  beds:
      number
    | {
        pre?: string,
        count: number,
        post?: string,
      }
    | string,
  category: string,
  name: string,
  sqFt: number,
  unavailable: boolean,
  units: number[],
}

export default PlanData;