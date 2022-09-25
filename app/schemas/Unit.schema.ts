import {z} from "zod";

const UnitSchema = z.number();
export default UnitSchema;
export type Unit = z.infer<typeof UnitSchema>;