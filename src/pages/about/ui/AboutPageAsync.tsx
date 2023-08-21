import { lazy } from "react";
import { delayForDemo } from "../../../shared/libs/delayForDemo";

// @ts-ignore
export const AboutPageAsync = lazy(delayForDemo(() => import("./AboutPage")));