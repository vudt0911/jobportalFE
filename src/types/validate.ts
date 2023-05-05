import { Rule } from "antd/lib/form";

export type ValidateSchema<T> = { [Property in keyof T]?: Rule[] };
